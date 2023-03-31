import React from 'react';
import Hero from '../components/hero';
import "../main.css";

const landing = () => {
return (
    <div>
    <Hero 
    Name="hero"
    heroImg="https://images.pexels.com/photos/3045245/pexels-photo-3045245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    title="Web, Graphic Design & Printing Services"
    text="Save Time and Money with our automated reporting and monitoring tools."
    buttonText="View Report"
    url="/"
    btnClass="show"
    />
    </div>
)
}

export default landing
