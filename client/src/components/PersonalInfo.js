import React from "react";
import { Form, Container,Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const  PersonalInfo = ( ) => {

    
    return (

        <div>
        <Container>
               <Row>
                   <h2>
                   </h2>
               <Form>
             <Form.Group className="mb-3 " >
               <Form.Label>Full Name</Form.Label>
               <Form.Control 
               type="text" name="name"  placeholder="Your Name" />       
             </Form.Group>
             
             <Form.Group className="mb-3">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" />
             </Form.Group>
           </Form>
               </Row>
           </Container>        </div>
    )
}

export default PersonalInfo;