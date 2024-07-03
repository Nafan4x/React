import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Ваша логика обработки входа здесь (например, отправка данных на сервер)
        console.log('Username:', username);
        console.log('Password:', password);
        // Сброс формы
        setUsername('');
        setPassword('');
    };

    return (
        <Container bg="secondary" style={{ width: "30%", marginTop: '200px', minWidth: "600px" }}>
            <h2 className="text-center mb-4">Авторизация</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicUsername" className="mb-3">
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-light" type="submit" className="w-100 mt-3">
                    Войти
                </Button>
            </Form>
        </Container>
    );
};