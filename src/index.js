import React from 'react';
import ReactDOM from 'react-dom';
// Provider提供context对象，作为最顶层组件，传入store，使其所有子组件都可以用store
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
document.getElementById('root')
);
