import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, filterByContinents, orderByNameAsc, orderByPop, filterByActivities, getActivities } from '../actions/index';
import Card from './Card';
import NavBar from './NavBar';
import Pagination from './Pagination';
import '../styles/Home.css';

export default function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.allActivities)
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    let [countriesPerPage, setCountriesPerPage] = useState(10);

    if(currentPage === 1) countriesPerPage = 9;
    
    const indexOfLastCountrie = currentPage * countriesPerPage;
    const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountrie, indexOfLastCountrie);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    },[dispatch]);

    function handleFilteredCountry(e){
        dispatch(filterByContinents(e.target.value))
    };

    function handleSort(e) {
        e.preventDefault()
        dispatch(orderByNameAsc(e.target.value))
        setCurrentPage(1)
        setOrder(`In order ${e.target.value}`)
    };

    function handleSortPop(e) {
        e.preventDefault()
        dispatch(orderByPop(e.target.value))
        setCurrentPage(1)
        setOrder(`In order ${e.target.value}`)
    };

    function handleFilterByAct(e) {
        e.preventDefault()
        e.target.value === 'none' ? dispatch(getCountries()) : dispatch(filterByActivities(e.target.value))
        setCurrentPage(1)
    };

    return (
        <div className='prindiv'>
            
            <div>
                <NavBar setCurrentPage={setCurrentPage} />
            </div>
            
            <div className='filters'>
                <div>
                    Order alphabetically
                    <select className='select' onChange={e => handleSort(e)}>
                        <option></option>
                        <option value='asc'>A - Z</option>
                        <option value='desc'>Z - A</option>
                    </select>
                </div>
                <div>
                    Sort by number of inhabitants
                    <select className='select' onChange={e => handleSortPop(e)}>
                        <option></option>
                        <option value='mayp'>Lowest to highest</option>
                        <option value='menp'>Highest to lowest</option>
                    </select>
                </div>
                <div>
                    Search by continents
                    <select className='select' onChange={e => handleFilteredCountry(e)} >
                        <option value={"All"}> </option>
                        <option value={"South America"}>Sudamérica</option>
                        <option value={"North America"}>Norteamérica</option>
                        <option value={"Africa"}>África</option>
                        <option value={"Asia"}>Asia</option>
                        <option value={"Europe"}>Europa</option>
                        <option value={"Oceania"}>Oceanía</option>
                        <option value={"Antarctica"}>Antarctica</option>
                    </select>
                </div>
                <div>
                    Search by activity
                    {(activities.length === 0) ? <p>No activities found</p> :
                    <select className='select' onChange={e => handleFilterByAct(e)}>
                        <option value="none"></option>
                        {activities.map(e => (
                        <option value={e.name} key={e.id}>{e.name}</option>
                        ))}
                    </select>
                    }
                </div>
            </div>
            {currentCountries?.map( (e) => {
               return (
                <div className='contenedorCards'>
                <Card flags={e.flags} name={e.name} continents={e.continents} key={e.id} id={e.id} />
                </div>
            )
        })}
        <div className='pagination'>
            <Pagination countriesPerPage={countriesPerPage} allCountries={allCountries.length} pagination={pagination} />
        </div>
            
        </div>
    )


}