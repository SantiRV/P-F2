import {React, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail } from '../actions/index';
import logo from '../images/logo.png';
import '../styles/CountryDetail.css';

export default function CountryDetail(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
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
        <div className='prindiv'>

            <div className='bar'>
                <Link to='/home'>
                    <img className='bothome' onClick={(e) => handleClick(e)} src={logo} alt='logo' />
                </Link>
            </div>

            <div className='card'>
                <div className='conpais'>
                    <h2 className='titulo'>Country Details</h2>
                    {
                        country ?
                        <div>
                            <img className='flag' src={country.flags} alt='Img not found' />
                            <h2 className='name'>{country.name}</h2>
                            <h4 className='continent'>{country.continents}</h4>
                            <h4 className='cod'>{country.id}</h4>
                            <h4 className='detail'>Capital: {country.capital}</h4>
                            <h4 className='detail'>Region: {country.subregion}</h4>
                            <h4 className='detail'>Area: {country.area} km²</h4>
                            <h4 className='detail'>Populaton: {country.population}</h4>
                        </div> : <p>Loading...</p>
                    }
                </div>
                <div className='conact'>
                    <h3 className='titulo'>Country Activities</h3>

                    {
                        country.Activities&&country.Activities.length ?
                        country.Activities.map(e => {
                            return (
                                <div>
                                    <h4 className='nameact'>{e.name}</h4>
                                    <p className='detail'>Difficulty: {e.difficulty}</p>
                                    <p className='detail'>Duration: {e.duration}</p>
                                    <p className='detail'>Season: {e.season}</p>
                                </div>
                            )
                        }) :
                        <p>Activities not found</p>
                    }
                    <Link to='/activities'>
                        <button className='botactd'>Create Activity</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};