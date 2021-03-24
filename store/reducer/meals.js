import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAV } from '../actions/meals'

const initState = {
    allMeals: MEALS,
    filMeals: MEALS,
    favMeals: []
}

const mealReducer = (state = initState, action) => {
    switch(action.type){
        
        case TOGGLE_FAV:
            console.log('action.mealId', action.mealId)
            const existIndex = state.favMeals.findIndex(meal => meal.id === action.mealId)

            if(existIndex >= 0){
                console.log('in reducer, exist')
                const updateFav = [...state.favMeals]
                updateFav.splice(existIndex, 1)
                return { ...state, favMeals: updateFav}
            }
            else{
                const mealAdd = state.allMeals.find(meal => meal.id === action.mealId)
                console.log('in reducer, not exist', mealAdd.title)
                return { ...state, favMeals: state.favMeals.concat(mealAdd)}
            }
            

        default:
            return state
    }
}

export default mealReducer