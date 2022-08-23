import React, {useState} from "react";
import { Col, Container,Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import {PasswordReset} from "../components/PasswordReset";
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState("login");

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        switch(name){
            case'email':
            setEmail(value);
            break;

            case'password':
            setPassword(value);
            break;

            default:break
        }
        console.log(name, value)
    };


    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!email || !password) {
         return  alert("fill up all the details");
        }
        console.log(email, password);
    };

    const formSwitcher = (frmType) => {
        setFrmLoad(frmType);
    };

    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        if(!email) {
         return  alert("fill up the email address");
        }
        console.log(email);
    };




    return ( 
        <div className="login-page bg-primary" >
<Container >
            <Row>
                <Col>
                <div >
                 <img />
        </div>
                </Col>
                <Col>
                
         <div className="jumbotron form-box">
            { frmLoad === 'login' &&(
            <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
            />)}
            {frmLoad === 'rest' && (
             <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
            />)}
        </div>
                </Col>
            </Row>
        </Container>

        </div>
        
        
    )   
        
        
}

export default Login;

