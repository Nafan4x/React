import { useParams } from "react-router"
import {GetProductById} from '../services/prodService.js';
import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../Components/coworking.css'
import imag from '../Components/main-image.jpg';

export function DronPage() {
    const params= useParams();
    console.log(params);
    const {data, loading, error} = GetProductById(params.id);
    console.log(data);
    const product = {
        big_img: imag,
        small_img: [
            imag,
            imag,
            imag,
            imag
        ],
        name: 'Sample Product',
        rating: 4.5,
        address: '123 Main St, Anytown, USA',
        working_time: '09:00 - 19:00',
        description: 'This is a sample product description.'
      };
    return(
        <Container fluid className="product-details">
        <Row className="justify-content-center align-items-center">
          <Col md={6} lg={6} className="left-image mb-4 mb-md-0" style={{marginTop: '-20px'}}>
            <Image src={product.big_img} fluid alt="Product Image" />
          </Col>
          <Col md={6} lg={6} className="right-images">
            <Row>
              {product.small_img.map((item, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Image src={item} fluid alt={`Right Image ${index + 1}`} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card bg="secondary" text="white">
              <Card.Body>
              <h2 className="mb-0">{data.name}</h2>
                {/* <div className="d-flex align-items-center mb-3">
                  
                  <div className="score ms-3 d-flex align-items-center">
                    <img src="/static/main/img/heart.png" alt="Heart Icon" className="heart-icon me-2" />
                    <h4 className="mb-0">{product.rating}</h4>
                  </div>
                </div> */}

                <p>{data.description}</p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}