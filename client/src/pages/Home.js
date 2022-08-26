import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({children}) => {
    return (
        <div className="main-layout">
            <div className="main-header">
                            <Header />
            </div>
            <div className="main-body">
                    {children}
            </div>
            <div className="main-footer">
            <Footer/>

            </div>

            

        </div>
    )
}

export default Home;