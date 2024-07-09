import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

export function DronItem(){
  const product = {
    name: 'Co7Work',
    address: '1-я Красноармейская улица, 13В, Санкт-Петербург',
    workingHours: '09:00 - 19:00',
    university: 'БГТУ Военмех имени Д. Ф. Устинова, факультет среднего профессионального образования',
    images: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300'
    ],
    rating: 0.0
  };


  return (
    <Container className="mt-5">
    <Row>
      <Col md={8}>
        <Row>
          {product.images.map((image, index) => (
            <Col md={6} key={index} className="mb-3">
              <Image src={image} fluid />
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>{product.name} <span role="img" aria-label="heart">❤️</span> {product.rating}</Card.Title>
            <Card.Text>
              {product.address}
              <br />
              График работы: {product.workingHours}
              <br />
              {product.university}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

