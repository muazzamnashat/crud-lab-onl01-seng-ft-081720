import cuid from 'cuid';
import { combineReducers } from "redux";

const manageRestaurants = combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
})

export default manageRestaurants;

function restaurantsReducer(state=[],action){
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const data = {text: action.text, id: cuid()}
            return state.concat(data)
    
        case 'DELETE_RESTAURANT':
            return state.filter(rest => rest.id !== action.id)

        default:
            return state
    }
}

function reviewsReducer(state=[],action){
    switch (action.type) {
        case 'ADD_REVIEW':
            const data = {text: action.text, restaurantId: action.restaurantId , id: cuid()}
            return state.concat(data)
    
        case 'DELETE_REVIEW':
            return state.filter(review => review.id !== action.id)

        default:
            return state
    }
}