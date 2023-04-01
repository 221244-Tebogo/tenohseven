import React from 'react';
import { cardsData } from '../Data/data';
import Card from '../components/card';
//import Card from 'react-bootstrap/Card'

//Assigning props to the Card ()

const cards = () => {
    return (
        <div className="Cards">
        {cardsData.map((card, id) => {
        return (
            <div className="parentContainer" key={id}>
            <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
            />
            </div>
        );
        })}
    </div>
    );
};

export default cards;
