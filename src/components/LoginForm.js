import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Form, Container,Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {

  return (
    <Container>
        <Row>
            <h2 className="text-primary text-center" > Recruiter Login </h2>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3 " >
        <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email"
          name="email"
          required
          onChange={handleOnChange}
          value={email}
          placeholder="Enter Email" />       
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
         <Form.Control 
         type="password"
         name= "password"
        required   
         onChange={handleOnChange}
         value={pass}
         placeholder="Password" />
      </Form.Group>
            
   
      <Button variant="primary" type="submit">
        Login Now
      </Button>
      <Row className="pt-3 fluid">
        <Col>
        <a  href="#!" onClick={()=>formSwitcher('rest')}> Forgot Password </a>
        </Col>
        <Col>
        <a href="/registration"> Register Now </a>
        </Col>
      </Row>
    </Form>
        </Row>
    </Container>


    
  )
}

export default LoginForm;

LoginForm.prototypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
}