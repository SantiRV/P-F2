import {React, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail } from '../actions/index';
import logo from '../images/logo.png';
import '../styles/CountryDetail.css';

export default function CountryDetail() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const country = useSelector((state) => state.detail);
    const history = useHistory();

    useEffect(() => {
        dispatch(getCountryDetail(id))
    }, [dispatch, id])

    function handleClick(e) {
        e.preventDefault();
        history.push('/home')
    };

    return (
        <div className='prindivcd'>

            <div className='barcd'>
                <Link to='/home'>
                    <img className='bothomecd' onClick={(e) => handleClick(e)} src={logo} alt='logo' />
                </Link>
            </div>

            <div className='cardcd'>
                <div className='conpaiscd'>
                    <h2 className='titulocd'>Country Details</h2>
                    {
                        country ?
                        <div>
                            <img className='flagcd' src={country.flags} alt='Img not found' />
                            <h2 className='namecd'>{country.name}</h2>
                            <h4 className='continentcd'>{country.continents}</h4>
                            <h4 className='codcd'>{country.id}</h4>
                            <h4 className='detailcd'>Capital: {country.capital}</h4>
                            <h4 className='detailcd'>Region: {country.subregion}</h4>
                            <h4 className='detailcd'>Area: {country.area} km²</h4>
                            <h4 className='detailcd'>Populaton: {country.population}</h4>
                        </div> : <p>Loading...</p>
                    }
                </div>
                <div className='conactcd'>
                    <h3 className='titulocd'>Country Activities</h3>

                    {
                        country.Activities&&country.Activities.length ?
                        country.Activities.map(e => {
                            return (
                                <div>
                                    <h4 className='nameactcd'>{e.name}</h4>
                                    <p className='detailcd'>Difficulty: {e.difficulty}</p>
                                    <p className='detailcd'>Duration: {e.duration}</p>
                                    <p className='detailcd'>Season: {e.season}</p>
                                </div>
                            )
                        }) :
                        <p>Activities not found</p>
                    }
                    <Link to='/activities'>
                        <button className='botactdcd'>Create Activity</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};