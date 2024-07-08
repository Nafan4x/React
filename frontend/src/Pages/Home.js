import React, {Component} from "react";
import { CardSubtitle} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {LittleCard} from '../Components/LittleCard.js';
import {GetProducts} from '../services/prodService.js';
import { Container, Row, Col } from 'react-bootstrap';

//const cards = Array.from({ length: 9 }); // создаем массив с 9 элементами

const cardData = [
];



export function Home(){ 
    // const cardData = GetProducts();
    
    const cardData = GetProducts();
    console.log("asdsad", cardData);

    while (cardData == "Loading"){
        return <div>Loading</div>
    }

    return (
        <Container style={{ marginTop: '50px'}}>
            <Row className="g-4">
                {cardData.map((card, index) => (
                    <Col key={index}  xs={15} sm={6} md={4} lg={3} >
                        <LittleCard  data={card} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
    }
