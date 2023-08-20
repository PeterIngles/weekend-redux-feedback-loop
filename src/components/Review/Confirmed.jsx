import React from 'react';
import { Link } from 'react-router-dom'

export function Confirmed() {


    return <div>
        <h1>THANK YOU!</h1>
        <Link to="/">
            <button>LEAVE NEW FEEDBACK</button>
        </Link>
    </div>;
}
