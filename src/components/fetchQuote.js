import React from 'react'
import {useState,useEffect} from "react"
import axios from 'axios';

function FetchQuote() {
const [quote, setQuote] = useState('')
useEffect (() => {
    axios.get('https://quotesondesign.com/api/')
    .then((res) => {
      //console.log (res.data.contents)
        setQuote(res.data.contents)
        console.log(res.data.contents)
    })
    .catch((err) => {
        console.log(err);
    })
},[])

    return(
    <div className="FetchQuote">
    <>
        <h1>{quote}</h1>
          {/* <p>- {author}</p> */}
        </>
    </div>
)
}
export default FetchQuote
