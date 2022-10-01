import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCountries, getCountriesByName } from "../actions/index";
import logo from '../images/logo.png';

export default function NavBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    };

    function handleInputChange(e) {
        dispatch(getCountriesByName(e))
        setCurrentPage(1)
    };

    return (
        <div className="navbar">
            <div>
                <Link to='/home'>
                    <img className='bothomenb' onClick={(e) => handleClick(e)} src={logo} alt='logo' />
                </Link>
            </div>
            <div className='searchnb'>
                <div className="searchtitlenb">Find your next destination</div>
                <input className="searchinpnb" value={name} type='txt'placeholder="what country do you want to visit..."
                onChange={(e) => {setName(e.target.value); handleInputChange(e.target.value)}} />
            </div>

            <Link to='/activities'><button className="botactnb">Create activity</button></Link>
        </div>
    )
};