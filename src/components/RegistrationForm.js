import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import { Form, Container,Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegistrationForm = () => {
   
  return (
    <Container>
      
        <Row>
            <h2>
                Registration Form
            </h2>
        <Form>
                    
      <Form.Group className="mb-3 " >
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
        type="text" name="name"
        placeholder="Your Name" />       
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        name="email"  placeholder="Enter email" />       
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" 
         name="phone" placeholder="Enter Mobile Number" />       
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" 
         name="company" placeholder="Your Company Name" />       
      </Form.Group>





     <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password
        </Form.Label>
        <Form.Control 
          type="password"
          
          placeholder="Password" />
        
      
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="confirm_pwd">Confirm Password
        </Form.Label>
        <Form.Control 
        type="password"
        id="confirm_pwd"
        placeholder="Confirm Password" />
      </Form.Group>
      
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
        </Row>
        <Row className="pt-2">
                  <a  href="/" >Login Now</a>

        </Row>
    </Container>


    
  )
}

export default RegistrationForm;