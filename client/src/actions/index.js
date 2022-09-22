import axios from 'axios';
import {
    GETALLCOUNTRIES,
    FILTERCOUNTRIES,
    ORDERCOUNTRIESAZ,
    ORDERCOUNTRIESPOP,
    COUNTRYDETAIL,
    GETACTIVITIES,
    GETCOUNTRIESQUERY,
    GETCOUNTRIESBYNAME,
    FILTERBYACTIVITY,
} from './constants';

export function getCountries() {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/countries',{

        });
        return dispatch({
            type: GETALLCOUNTRIES,
            payload: json.data
        })
    }
};

export function filterByContinents(payload) {
    return {
        type: FILTERCOUNTRIES,
        payload,
    }
};

export function orderByNameAsc(payload) {
    return {
        type: ORDERCOUNTRIESAZ,
        payload,
    }
};

export function orderByPop(payload) {
    return {
        type: ORDERCOUNTRIESPOP,
        payload,
    }
};

export function getCountryDetail(id) {
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/countries' + id)

            return dispatch({
                type: COUNTRYDETAIL,
                payload: json.data
            })
        } catch(error) {
            console.log('Error en getCountryDetail' + error)
        }
    }
};

export function getCountrySearch(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/countries?name=' + name.charAt(0).toUpperCase() + name.slice(1)) //Estudiar bien
            return dispatch({
                type: GETCOUNTRIESQUERY,
                    payload: json.data
            })
        } catch(error) {
            console.log('Error en getCountrySearch' + error)
        }
    }
};

export function getActivities() {
    return (dispatch) => {
        axios.get('http://localhost:3001/activities').then((info) => {
            return dispatch({
                type: GETACTIVITIES,
                payload: info.data
            });
        })
        .catch((error) => console.log('Error en getActivities' + error))
    }
};

export function filterByActivities(activity) {
    return {
        type: FILTERBYACTIVITY,
        payload: activity
    }
};

export function postActivity(payload) {
    return async function(dispatch) {
        const response = await axios.post('http://localhost:3001/activities', payload)
        console.log(response)
        return response
    }
};

export function getCountriesByName(name) {
    console.log(name) 
    return {
        type: GETCOUNTRIESBYNAME,
        payload: name,
    }
};