import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tagsinput from '../components/tagsinput';
import DailyQuote from '../components/DailyQuote';
import CardsData from '../components/cardsData';
//import { Text, View } from 'react-native';
//import { Calendar } from 'react-native-calendars';
//import Table from './table';

function Compare(){ 
    return (
        <div>
        <Container>
        <Row>
        <Col>
        <h4>User Profile</h4>
        <img alt="cardImg" src="https://www.svgrepo.com/show/475868/quote.svg"
        />
        </Col>

{/*Calendar inserted here*/}
        <Col>

        <h4>Customer Calendar </h4>
        </Col>
        </Row>
    <Row>

{/*table uses 3 columns at the bottom, column 1 its */}
        <Col>
        <h4>Featured Tags</h4>
        <Tagsinput />

{/*I've inserted daily quotes here using a simple table*/}
        </Col>
        <div className="DailyQuote-container">
        <DailyQuote />
        </div>
        <Col>

    
        </Col>
        <Col>
        <h4>Valuable Customers</h4>
        3 of 3</Col>
        </Row>
    </Container>

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

        </div>
    
    )
    }

    export default Compare;