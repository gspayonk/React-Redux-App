import React from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import {FETCH_ERROR, FETCH_FOUND, FETCH_REQUEST, fetchQuotes} from './actions';
import ReactDOM from 'react-dom';
import SimQuotes from './components/SimQuotes';

function App () {

  // const getQuotes = event => {
  //   props.fetchQuotes();
  // };

  return (
    <div className="App">
{/*       
      <button onClick={() => {getQuotes();}}>Give me a quote!</button>
      
      {props.quotes ? (
        props.quotes.map(quote => (
          <div>
            <h3>Name: {quote.character}</h3>
            <img src={quote.image} />
            <h3>Quote: {quote.quote}</h3>
          </div>
        ))
      ) : (
        <h1> Loading, please wait</h1>
      )} */}
      <h1>Simpsons Quotes</h1>
      <SimQuotes />
    </div>
  );
}

export default App;

// const mapStateToProps = state => {

//   return {
//     error: state.error,
//     isFetching: state.isFetching,
//     quotes: state.quotes
//   };
// };

// export default connect(
//   mapStateToProps,
//   {FETCH_ERROR, FETCH_FOUND, FETCH_REQUEST, fetchQuotes})(App);