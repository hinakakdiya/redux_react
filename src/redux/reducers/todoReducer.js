import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../actions/AllActions.js"

const initialState = []

 const todoReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
        {
            console.log("add todo reducer and data ===", action);
            console.log("state==",state)
        
            return [...state, action.data]
        }
        break;

        case REMOVE_TODO: {

            console.log("delete reducer called");

            const deletedStatus = state.filtred((value) => {
                return (value.id !== action.data.id)
            })
             return deletedStatus
        }
        default:
            return state
            break;

        case EDIT_TODO: {
            const editedStatus = state.map((value) => {
                if (value.id === action.id) {
                    return { ...value, title: action.data.title }
                }
                else {
                    return value
                }
            })
            return editedStatus
        }
    }
}
export default todoReducer
