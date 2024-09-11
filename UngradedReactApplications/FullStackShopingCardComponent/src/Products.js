import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

const Products = () => {
	const [products, setProducts] = useState([
		{ Name: 'Apples', Country: 'Italy', Cost: 3, inStock: 10 },
		{ Name: 'Oranges', Country: 'Spain', Cost: 4, inStock: 3 },
		{ Name: 'Beans', Country: 'USA', Cost: 2, inStock: 5 },
		{ Name: 'Cabbage', Country: 'USA', Cost: 1, inStock: 8 },
	]);
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);

	const addToCart = (product) => {
		if (!renderIntoDocument.quantity || (product.inStock - product.quantity ))
		{
			setCart((current) => {
				return [...current, product];
			});
		}
	
	};

	const calculateTotal = () => {
		let newTotal = cart.reduce((accum, current) => accum + current.Cost, 0);
		setTotal(newTotal);
	};

	const deleteCartItem = (index) => {
		setCart((current) => {
			return current.filter((item, i) => index !== i);
		});
	};

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col xs={12} md={4}>
					<h1>Product List</h1>
					<ProductList products={products} addToCart={addToCart} />
				</Col>
				<Col xs={12} md={4}>
					<h1>Cart Contents</h1>
					<Cart
						cart={cart}
						deleteCartItem={deleteCartItem}
						products={products}
						setProducts={setProducts}
					/>
				</Col>
				<Col xs={12} md={4}>
					<h1>Checkout</h1>
					<Checkout
						total={total}
						cart={cart}
						calculateCartTotal={calculateTotal}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Products;
