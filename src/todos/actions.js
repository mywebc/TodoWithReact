import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

// 定义一个唯一id
let nextTodoId = 0;

// actions是一个对象,
// 箭头函数 加括号返回对象字面量表达式

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId ++,
    text: text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})