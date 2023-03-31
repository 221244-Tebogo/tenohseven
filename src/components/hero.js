import React from 'react'

//Dynamic Hero Section (props) this will assist in assigning different names to different images 
function hero(props) {
return (<>
    <div className={props.Name}>
    <img alt="heroImg" src={props.heroImg}/>
    <div className="hero-text">
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
    </div>
    </div>
    </>);
}

export default hero
