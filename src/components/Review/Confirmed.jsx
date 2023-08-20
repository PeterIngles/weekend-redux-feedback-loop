import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

export function Confirmed() {


    return <div>
        <h1>THANK YOU!</h1>
        <Link to="/">
            <Button>LEAVE NEW FEEDBACK</Button>
        </Link>
    </div>;
}
