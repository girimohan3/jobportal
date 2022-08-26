import React, { useState } from "react";
import SignUp from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from './OtherInfo';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormPage () {

    const[page, setPage] = useState(0);

    const FormTitles = [ "Sign Up", "Personal Info", "Other Info" ]

  
    const PageDisplay = () => {
        if (page === 0) {
            return <SignUp />;
        } else if(page === 1){ return <PersonalInfo /> ;
    } else { return <OtherInfo/> }
};

    return (
        <div className="bg-danger login-page">
             <div className="form jumbotron">
            <div className="progressbar">
                <div className="form-container">
                    <div className="Header">
                        <h2>{FormTitles[page]}</h2>
                        <div className="body">
                            {PageDisplay()}
                            <div className="footer">
                                <Container>
                                    <Row>
                                        <Col>
                                        <Button disabled={page == 0 }
                                         onClick={() => {setPage((curpage) => curpage - 1)}}>Prev</Button>
                                        </Col>
                                        <Col>
                                        <Button onClick={() =>
                                    {
                                        if ( page === FormTitles.length - 1){

                                            alert("hello");

                                        }else {setPage((curpage) => curpage + 1 ); }
                                        
                                    }}>
                                    { page === FormTitles.length - 1 ? "Submit" : "Next" }  </Button>
                                        </Col>
                                    </Row>
                                </Container>
                                

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </div>
       
    )
}

export default FormPage;