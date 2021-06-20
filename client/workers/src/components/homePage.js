import React from 'react';
import { Link, } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">login</Link>
            </div>
        </>
    )
}
