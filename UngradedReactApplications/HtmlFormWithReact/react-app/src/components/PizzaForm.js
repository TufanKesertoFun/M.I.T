import React from "react";
import "./PizzaForm.css";

function PizzaForm() {
    return (
        <form className="pizza-form">
            <input type="text" id="name" name="name" placeholder="Name" className="form-input" />
            <br />
            <select id="size" name="size" className="form-select">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>  
            </select>
            <br/>
            <div className="form-checkbox-group">
                <div className="form-checkbox-item">
                    <input type="checkbox" id="topping1" name="topping1" value="pepperoni" className="form-checkbox"/>
                    <label htmlFor="topping1">Pepperoni</label>
                </div>
                <div className="form-checkbox-item">
                    <input type="checkbox" id="topping2" name="topping2" value="mushrooms" className="form-checkbox"/>
                    <label htmlFor="topping2">Mushrooms</label>
                </div>
                <div className="form-checkbox-item">
                    <input type="checkbox" id="topping3" name="topping3" value="bell_peppers" className="form-checkbox"/>
                    <label htmlFor="topping3">Bell Peppers</label>
                </div>
                <div className="form-checkbox-item">
                    <input type="checkbox" id="topping4" name="topping4" value="olives" className="form-checkbox"/>
                    <label htmlFor="topping4">Olives</label>
                </div>
                <div className="form-checkbox-item">
                    <input type="checkbox" id="topping5" name="topping5" value="extra_cheese" className="form-checkbox"/>
                    <label htmlFor="topping5">Extra Cheese</label>
                </div>
                
            </div>
            <input type="number" id="quantity" name="quantity" min="1" max="10" placeholder="Quantity" required className="form-input"/>
            <br/>
            <input type="text" id="address" name="address" placeholder="Delivery Address" required className="form-input"/>
            <input type="datetime-local" id="delivery_time" name="delivery_time" required className="form-input"/>
            <br />
            <input type="submit" value="Place Order" className="form-submit"/>      
        </form>
    );
}

export default PizzaForm;
