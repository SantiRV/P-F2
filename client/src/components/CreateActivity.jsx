import {React, useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, postActivity } from '../actions';
import logo from '../images/logo.png';
import '../styles/CreateActivity.css';

function validate(input) {
    let errors = {};
    let dif = Number(input.difficulty);
    let dur = Number(input.duration);

    if(!input.name) errors.name = 'Obligatory filed'
    else if(/[^A-Za-z0-9 ]+/g.test(input.name)) errors.name = 'Cannot have special characters'

    if(!input.difficulty) errors.difficulty = 'Obligatory filed'
    else if(dif <= 0 || dif > 5) errors.difficulty = 'Must be between 1 and 5'

    if(!input.duration) errors.duration = 'Obligatory filed'
    else if(dur <= 0 || dur > 24) errors.duration = 'Must be between 0 and 24'

    if(!input.season || input.season === 'empty') errors.season = 'Obligatory filed'

    if(!input.countries || input.countries.length === 0) errors.countries = 'Obligatory filed'

    return errors
};

export default function CreateActivity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    });

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
        console.log(input)
    };

    const handleSelect = (e) => {
        setInput((estado) => {
            if(e.target.name === 'countries') {
                return {
                    ...estado,
                    countries: [...estado.countries, e.target.value]
                }
            } else {
                return {
                    ...estado,
                    [e.target.name] : e.target.value
                }
            }
        })
    };

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
        if(!input.name || !input.difficulty || !input.duration || !input.countries) {
            return alert('Fill in the form correctly before sending it')
        }

        dispatch(postActivity(input))
        alert('Activity created succesfully')
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: [],
        })
        history.push('/home')
    };

    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter( con => con !== e)
        })
    };

    function handleClick(e) {
        e.preventDefault();
        history.push('/home')
    };

    return (
        <div className='pridiv'>
            <div className='bar'>
                <Link to='/home'>
                    <img className='bothome' onClick={(e) => handleClick(e)} src={logo} alt='logo' />
                </Link>
            </div>

            <div className='contenedorform'>
                <h2 className='titulo'>Create your own activity</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    
                </form> 
            </div>
        </div>
    )
}