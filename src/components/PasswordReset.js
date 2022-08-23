import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Form, Container,Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export const PasswordReset = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {

  return (
    <Container>
        <Row>
            <h2 className="text-primary text-center" > Password Reset </h2>
        <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
    
            
   
      <Button variant="primary" type="submit">
        Reset Password
      </Button>
      <Row className="pt-3 fluid">
        <Col>
        <a href="#!" onClick={()=>formSwitcher('login')}> Login Now </a>
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

export default PasswordReset;

PasswordReset.prototypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}