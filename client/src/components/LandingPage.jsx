import React from 'react';
import {Link} from 'react-router-dom';
import {RiHome4Fill} from 'react-icons/ri';
import '../styles/LandingPage.css';

export default function LandingPage() {
    return (
        <div className='homepage'>
            
            <h1 className='titulolp'>Welcome to my Countries Page</h1>
            <h1 className='titulolp'>Travel with us!</h1>
            <h3 className='titulolp'>Author: Santiago Rambeaud Vazquez</h3>
            
            <Link to='/home'>
                <button className='buttonlp'>
                    <h3>
                        <span>Home <RiHome4Fill/></span>
                    </h3>
                </button>
            </Link>
            
        </div>
    )
}