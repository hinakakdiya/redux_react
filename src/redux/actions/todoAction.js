import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./AllActions";

export const ADD_TODO_ACTION = (todo) => {
    console.log("add todo action successfully called", todo);
    return {
        type: ADD_TODO,
        data: todo
    }
}

export const EDIT_TODO_ACTION = (id) =>({
        type: EDIT_TODO,
        data: id
})

export const DELETE_TODO_ACTION = (id, title) => {
    console.log(id, title, "=== in delete action");

    return{
        type: REMOVE_TODO,
        data: {
            id,
            title
        }
    }
}

