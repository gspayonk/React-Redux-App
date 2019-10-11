import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions';

import Quote from './quote';

const SimQuotes = props => {
    console.log('what chu looking for', props);
    useEffect(() => {
        props.fetchQuotes();
    }, []);

    if (props.isFetching) {
        return <h2>Loading Simpson Quotes...</h2>;
    }

    return (

    <div>
        {props.error && <p>{props.error}</p>}
        {props.quotes.map(quote => (
        <Quote key={quote._id} quote={quote} />
        ))}
    </div>
    );
};

const mapStateToProps = state => {
    return {
        quotes: state.quotes,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchQuotes }
)(SimQuotes);