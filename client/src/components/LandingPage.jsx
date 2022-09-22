import React from 'react';
import {Link} from 'react-router-dom';
import {RiHome4Fill} from 'react-icons/ri';
import '../styles/LandingPage.css';

export default function LandingPage() {
    return (
        <div className='homepage'>
            
            <h1 className='titulo'>Welcome to my Countries Page</h1>
            <h1 className='titulo'>Travel with us!</h1>
            <h3 className='titulo'>Author: Santiago Rambeaud Vazquez</h3>
            
            <Link to='/home'>
                <button className='button'>
                    <h3>
                        <span>Home <RiHome4Fill/></span>
                    </h3>
                </button>
            </Link>
            
        </div>
    )
}