import React from 'react';
import { hot } from 'react-hot-loader/root';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () =>{
    return(
        <>
        <Router>
            <App />
        </Router>
        </>
    )
}



export default hot(Root);