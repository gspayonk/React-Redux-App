import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FOUND = 'FETCH_FOUND';
export const FETCH_ERROR = 'FETCH_ERROR';


export const fetchQuotes = () => dispatch => {
    dispatch({ type: FETCH_REQUEST });

    axios
    .get('https://thesimpsonsquoteapi.glitch.me/quotes')
    
    .then(res => {
        console.log(res);
        dispatch({
            type: FETCH_FOUND,
            payload: res.data.results
        });
    })

    .catch(error => {
        console.log(error);
        dispatch({
            type: FETCH_ERROR,
            payload: error.response
        });
    });
};