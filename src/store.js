// 作为唯一store 放在src下
// 通常一个功能模块就有一个reducer，在这里我们可以把多个reducer合并为一个reducer
import { createStore, combineReducer } from 'redux';

import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filter';

const reducer = combineReducer({
    todos: todoReducer,
    filter: filterReducer
})
export default createStore(reducer);
