import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2>Error! this page is not found!!!!</h2>
            <Link to='/' >
                Back To HomePage
            </Link>
        </div>
    );
};

export default Error;