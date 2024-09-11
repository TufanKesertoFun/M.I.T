import React from 'react';
import { Button, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const ProductList = ({ products, addToCart }) => {
	const photos = ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/seed/picsum/200/300', 'https://picsum.photos/200/300?grayscale', 'https://picsum.photos/200/300/?blur'];

	return (
		<ListGroup>
			{products.map((item, index) => (
				<ListGroupItem
					key={index}
					className="d-flex align-items-center justify-content-between"
				>
					<Image src={photos[index % 4]} width={50} roundedCircle />
					<div className="ml-3">
						<strong>{item.Name}</strong>: ${item.Cost} -{' '}
						<small>{item.quatity ? item.inStock - item.quantity : item.inStock}in stock</small>
						{/** Todo: Replace `{item.inStock}` with the dynamic quantity in stock. */}
						{/* For that, use a ternary expression that checks whether the `item` has a property `quantity` defined. If yes, then the quantity to be displayed should be `item.inStock - item.quantity`. If `item.quantity` is not defined, then show the `item.inStock` parameter. */}
						{/* The expression would be like this: `item.quantity ? value if true || value if false */}
					</div>
					<Button variant="primary" onClick={() => addToCart(item)}>
						Add to Cart
					</Button>
				</ListGroupItem>
			))}
		</ListGroup>
	);
};

export default ProductList;
