import classes from './todoList.module.css';

import AddNewItem from './AddNewItem';
import TodoItem from './TodoItem';

const TodoList=()=>{
    return (
        <section className={`${classes.todolistSection} mx-auto`}>
            <AddNewItem/>
            
            <h3 className='py-2'>Todo List</h3>
            <hr/>
            <TodoItem/>
        </section>
    );
}

export default TodoList;