import React, {Component} from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imag from './rayan.jpg'
import { Link } from "react-router-dom";

export function LittleCard({data}) {
    const {title, id, description} = data; 
    return (
        <Link to={`/card/${id}`}>
            <Card style={{ width: '18rem', margin: '10px'}} bg="secondary" text="white">

            <Card.Img variant="top" src={imag} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Link>
    );
}