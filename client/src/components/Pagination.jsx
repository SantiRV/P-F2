import React from 'react';
import '../styles/Pagination.css';

export default function Pagination({countriesPerPage, allCountries, pagination}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className='contpag'>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <button className='botpag' key={number} onClick={() => pagination(number)}>{number}</button>
                    ))
                }
            </ul>
        </nav>
    )
};