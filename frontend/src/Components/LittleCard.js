import React, {Component} from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imag from '../Components/Multy.jpg';
import { Link } from "react-router-dom";

export function LittleCard({data}) {
    const {name, id_product, description} = data; 
    return (
        <Link to={`/card/${id_product}`} style={{textDecoration: "none"}}>
            <Card style={{ width: '18rem', margin: '10px'}} bg="secondary" text="white">

            <Card.Img variant="top" src={imag} />
            <Card.Body >
            <Card.Title style={{textDecoration: "none"}}>{name}</Card.Title>
            <Card.Text style={{textDecoration: "none"}}>
                {description}
            </Card.Text>
            </Card.Body>
            </Card>
        </Link>
    );
}