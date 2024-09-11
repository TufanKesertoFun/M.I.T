import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import CartItem from './CartItem';

const Cart = ({ cart, deleteCartItem, products, setProducts }) => {
	useEffect(() => {
		setProducts(
			products.map((item) => ({
				...item,
				quantity: cart.filter((el) => el.Name === item.Name).length,
			}))
		);
	}, [cart]);

	return (
		<Accordion defaultActiveKey="0">
			{cart.map((item, index) => (
				<CartItem
					key={index}
					item={item}
					index={index}
					deleteCartItem={deleteCartItem}
				/>
			))}
		</Accordion>
	);
};

export default Cart;
