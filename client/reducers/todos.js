import { ADD_TODO } from './../constants/actionTypes.js';

const initialState = [
    {
        id: 0,
        completed: false,
        text: 'Add more todos'
    }
];


export default todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            const maxID =
            return state = [{
                id: state.

            }, ...state];
        default:
            return state;
    }
};

//Usage?
//store.dispatch(addTodo('Text')); ?