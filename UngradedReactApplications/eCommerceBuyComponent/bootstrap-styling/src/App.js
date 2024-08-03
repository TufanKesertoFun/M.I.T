import React, { useState } from "react";
import { Navbar, Container, Nav, Card, Button, Badge, Dropdown, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
    { id: 1, name: "Smartphone", price: 299, image: "https://images.unsplash.com/photo-1580894732444-9f43c5b67918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNtYXJ0cGhvbmV8ZW58MHx8fHwxNjI5MzIzMjE1&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 2, name: "Laptop", price: 799, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhcHRvcHxlbnwwfHx8fDE2MjkzMjMyMTU&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 3, name: "Headphones", price: 99, image: "https://images.unsplash.com/photo-1517430816045-df4b7de7bb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhlYWRwaG9uZXN8ZW58MHx8fHwxNjI5MzIzMjE1&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 4, name: "Smartwatch", price: 199, image: "https://images.unsplash.com/photo-1519923045616-6185d8e699a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNtYXJ0d2F0Y2h8ZW58MHx8fHwxNjI5MzIzMjE1&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 5, name: "Camera", price: 499, image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhbWVyYXxlbnwwfHx8fDE2MjkzMjMyMTU&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 6, name: "Tablet", price: 399, image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRhYmxldHxlbnwwfHx8fDE2MjkzMjMyMTU&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 7, name: "Speaker", price: 149, image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNwZWFrZXJ8ZW58MHx8fHwxNjI5MzIzMjE1&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 8, name: "Monitor", price: 299, image: "https://images.unsplash.com/photo-1589317742358-3fd0e10d1a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vbml0b3J8ZW58MHx8fHwxNjI5MzIzMjE1&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 9, name: "Keyboard", price: 49, image: "https://images.unsplash.com/photo-1586039897518-70d85aa067a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGtleWJvYXJkfGVufDB8fHx8MTYyOTMyMzIxNQ&ixlib=rb-1.2.1&q=80&w=400" },
    { id: 10, name: "Mouse", price: 29, image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdXNlfGVufDB8fHx8MTYyOTMyMzIxNQ&ixlib=rb-1.2.1&q=80&w=400" },
];

const App = () => {
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleCheckout = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div style={{ backgroundColor: "#e0f7fa", minHeight: "100vh", paddingTop: "20px" }}>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Cart <Badge bg="light">{cart.length}</Badge>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {cart.length === 0 ? (
                                        <Dropdown.Item>No items in cart</Dropdown.Item>
                                    ) : (
                                        cart.map((item, index) => (
                                            <Dropdown.Item key={index}>
                                                {item.name} - ${item.price}
                                            </Dropdown.Item>
                                        ))
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <h2 className="mt-4 mb-4 text-center">Products</h2>
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={product.image} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button
                                        onClick={() => addToCart(product)}
                                        variant="primary"
                                        className="w-100"
                                    >
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
            <div className="mt-4 mb-4 text-center">
                <Button variant="success" size="lg" onClick={handleCheckout}>
                    Checkout
                </Button>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart Summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length === 0 ? (
                        <p>No items in the cart.</p>
                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>{item.name} - ${item.price}</li>
                            ))}
                        </ul>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { /* Add your checkout logic here */ }}>
                        Proceed to Payment
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default App;
