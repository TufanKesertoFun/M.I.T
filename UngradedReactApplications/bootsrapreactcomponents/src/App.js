import React, { useState } from "react";
import { Navbar, Container, Nav, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
];

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#cart">
                            Cart <Badge variant="light">{cart.length}</Badge>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <h2 className="mt-4 mb-4">Products</h2>
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button
                                        onClick={() => addToCart(product)}
                                        variant="primary"
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
                <Button variant="success" size="lg">
                    Checkout
                </Button>
            </div>
        </div>
    );
};

export default App;