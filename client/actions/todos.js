import { ADD_TODO } from './../constants/actionTypes.js';

//An action is simply an object with a type property + other
// properties that represent the change to the state tree
// {type: AN_ACTION, id: 0, input}

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    }
}

