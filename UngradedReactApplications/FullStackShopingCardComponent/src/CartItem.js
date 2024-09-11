import React from 'react';
import { Accordion } from 'react-bootstrap';

const CartItem = ({ item, index, deleteCartItem }) => {
	const handleItemClick = (index) => {
		deleteCartItem(index);
	};
	return (
		<Accordion.Item eventKey={index + 1}>
			<Accordion.Header>{item.Name}</Accordion.Header>
			<Accordion.Body onClick={() => handleItemClick(index)}>
				$ {item.Cost} from {item.Country}
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default CartItem;
