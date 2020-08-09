import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // results: [...state.result, state.counter]
                results: state.results.concat({id:new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id = action.value
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter( (result) => {
                return result.id !== action.resulElId
            });
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }

};



export default reducer;