import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Registration = () => {
    return (

        <div className="registration-page bg-primary">
            <div className="mt-5 ">
                <div className="jumbotron form-box">
                <RegistrationForm />
            </div>
            </div>
            
        </div>
        
        
    )
}

export default Registration;