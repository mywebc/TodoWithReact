import React from 'react';
// as相当于重命名
import { view as Todos } from './todos';
import { view as Filter } from './filter';
function TodoApp () {
    return (
        <div>
            <Todos/>
            <Filter/>
        </div>
    )
};
// 默认导出，只能导出一个，我们在导入时不需要知道所加载的变量名
export default TodoApp;