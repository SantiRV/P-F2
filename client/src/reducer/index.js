import {
    GETALLCOUNTRIES,
    FILTERCOUNTRIES,
    ORDERCOUNTRIESAZ,
    ORDERCOUNTRIESPOP,
    COUNTRYDETAIL,
    ADDACTIVITIES,
    GETACTIVITIES,
    GETCOUNTRIESQUERY,
    GETCOUNTRIESBYNAME,
    FILTERBYACTIVITY,
} from '../actions/constants';

const initialState = {
    countries: [],
    allCountries: [],
    allActivities: [],
    activities: [],
    detail: {},
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GETALLCOUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            }
        case FILTERCOUNTRIES:
            const allCountries = state.allCountries;
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(e => e.continent === action.payload);
            return {
                ...state,
                countries: continentFiltered,
            }
        case ORDERCOUNTRIESAZ:
            let sortedArr = action.payload === 'asc' ? state.countries.sort(function(a,b) {
                if(a.name > b.name) {
                    return 1
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.countries.sort(function (a, b) {
                if(a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0 
            })
            return {
                ...state,
                countries: sortedArr,
            }
        case ORDERCOUNTRIESPOP:
            let sortedArrPop = action.payload === 'mayp' ? state.countries.sort(function(a, b) {
                if(a.population > b.population) {
                    return 1
                }
                if(b.population > a.population) {
                    return -1
                }
                return 0
            }) :
            state.countries.sort(function(a, b) {
                if(a.population > b.population) {
                    return -1
                }
                if(b.population > a.population) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                countries: sortedArrPop,
            }
        case COUNTRYDETAIL:
            return {
                ...state,
                detail: action.payload,
            }
        case ADDACTIVITIES:
            return {
                ...state,
            }
        case GETACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
            }      
        case GETCOUNTRIESQUERY:
            return {
                ...state,
                countries: action.payload,
            }
        case FILTERBYACTIVITY:
            const allCountries2 = state.allCountries;
            const alone = allCountries2.filter((country) => {
                return country.Activities.length > 0;
            })

            let newArray = [];

            for(let i = 0; i < alone.length; i++){
                for(let j = 0; j < alone[i].Activities.length; j++){
                    if(alone[i].Activities[j].name === action.payload) {
                        newArray.push(alone[i]);
                    }
                }
            }
            const filter = action.payload === 'Todos' ? allCountries2 : newArray;
            return {
                ...state,
                countries: filter,
            }
        case GETCOUNTRIESBYNAME:
            console.log(action.payload);
            let name = action.payload === '' ? state.allCountries : state.countries.filter((e) => e.name.toLowerCase().includes(action.payload.toLoweCase()));
            console.log(action.payload);
            return {
                ...state,
                countries: name,
            }
        default:
            return state;
    }
}

export default rootReducer;
