import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

export default (sate = [], action) => {
    switch(action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }
        // 用传进来的Id, completed取反
        case TOGGLE_TODO:{
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed};
                } else {
                    return todoItem;
                }
            })
        }
        // 用filter方法将匹配的id过滤掉
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }
        // 不要忘了默认
        default: {
            return state;
        }
    }
}