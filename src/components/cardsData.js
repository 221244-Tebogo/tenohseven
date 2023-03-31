import React from 'react'
//import Card from 'react-bootstrap/Card'

//Assigning props to the Card ()

function cardsData(props){
    return (
    <div className='cards-container'>
    <div className='style-card'>
    <h4>{props.cardHeading}</h4>
    <img src={props.cardImg} alt="icon"/>
    <p>{props.cardText}</p>
    </div>
    </div>

)
}

export default cardsData;
