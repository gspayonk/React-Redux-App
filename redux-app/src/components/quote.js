import React from 'react';

function Quote (props) {

    return (
        <>
        <h3>Name: {props.quotes.character}</h3>
        <img src={props.quotes.image} />
        <h3>Quote: {props.quotes.quote}</h3>
        </>
    )
};

export default Quote;
