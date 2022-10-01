import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Card.css';

export default function Card({flags, name, continents, id}) {
    return (
        <div className='card'> 
            <img className='flagcard' src={flags} alt={name} width='70px' height='70px' />
            <h3 className='titulocard'>{name}</h3>
            <h4 className='continentcard'>{continents}</h4>

            <Link to={`/countries/${id}`}>
                <button className='buttoncard'>See more</button>
            </Link>
        </div>
    );
};