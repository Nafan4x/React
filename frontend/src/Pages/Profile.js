import React, { useState, useRef } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';

export function Profile() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        avatar: null
    });

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (upload) => {
                setFormData({
                    ...formData,
                    avatar: upload.target.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику для отправки данных на сервер
        console.log(formData);
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} style={{marginTop: "100px"}}>
                    <h2 className="mb-4">Профиль</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={4} className="bg-secondary text-center" style={{padding: '30px', borderTopLeftRadius: '10px' , borderBottomLeftRadius:'10px'}}>
                            <Image
                                    src={formData.avatar || 'https://via.placeholder.com/150'}
                                    roundedCircle
                                    style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer', marginTop: '20%' }}
                                    onClick={handleAvatarClick}
                                />
                                <Form.Control 
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleAvatarChange}
                                />
                            </Col>
                            <Col md={8} style={{padding: '10px'}}>
                                <Form.Group controlId="formUsername" className="mb-3">
                                    <Form.Label>Имя пользователя</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введите имя пользователя"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Введите email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Label>Новый пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Введите новый пароль"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formConfirmPassword" className="mb-4">
                                    <Form.Label>Подтвердите новый пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Подтвердите новый пароль"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Button variant="outline-light" type="submit" className="w-100 mt-3">
                                    Обновить профиль
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
