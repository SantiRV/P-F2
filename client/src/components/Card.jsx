import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Card.css';

export default function Card({flags, name, continents, id}) {
    return (
        <div className='card'> 
            <img className='flag' src={flags} alt={name} width='70px' height='70px' />
            <h3 className='titulo'>{name}</h3>
            <h4 className='continent'>{continents}</h4>

            <Link to={`/countries/${id}`}>
                <button className='button'>See more</button>
            </Link>
        </div>
    );
};