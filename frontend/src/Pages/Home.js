import React, {Component} from "react";
import { CardSubtitle} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {LittleCard} from '../Components/LittleCard.js';
import { Container, Row, Col } from 'react-bootstrap';
const cards = Array.from({ length: 9 }); // создаем массив с 9 элементами

const cardData = [
    {id:1, title: 'Card 1', description: 'This is the first card.' },
    {id:2, title: 'Card 2', description: 'This is the second card.' },
    {id:3, title: 'Card 3', description: 'This is the third card.' },
    {id:4, title: 'Card 4', description: 'This is the fourth card.' },
    {id:5, title: 'Card 5', description: 'This is the fifth card.' },
    {id:6, title: 'Card 6', description: 'This is the sixth card.' },
    {id:7, title: 'Card 7', description: 'This is the seventh card.' },
    {id:8, title: 'Card 8', description: 'This is the eighth card.' },
    {id:9, title: 'Card 9', description: 'This is the ninth card.' },
];

export function Home(){ 
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
