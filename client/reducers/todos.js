import { ADD_TODO } from './../constants/actionTypes.js';

const initialState = [{
    id: 0,
    completed: false,
    text: 'Add more todos'
}];


export default function todos(state = initialState, action = null) {
    switch(action.type) {
        case ADD_TODO:
            return state = [{
                id: Math.floor(Math.random() * 100),
                completed: false,
                text: action.text
            }, ...state];
        default:
            return state;
    }
};

//Usage?
//store.dispatch(addTodo('Text')); ?