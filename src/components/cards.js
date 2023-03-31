import React from 'react'
import CardsData from './cardsData'
//import Card from 'react-bootstrap/Card'

//Assigning props to the Card ()

const cards = () => {
    return (
        <div className='cards'> 
        <CardsData
        cardHeading="Software Update"
        cardImg="https://www.svgrepo.com/show/475868/quote.svg"
        cardText="Check what we updated and new features in the latest release. View details"

        cardHeading-2="Daily Quote"
        cardImg-2="https://www.svgrepo.com/show/510793/arrow-circle-down.svg"
        cardText-2="Check what we updated and new features in the latest release. View details"

        cardHeading-3="Valuable Customers"
        cardText-3="Check what we updated and new features in the latest release. View details"
        />
        
    </div>
)
}

export default cards;
