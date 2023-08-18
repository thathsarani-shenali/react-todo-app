import classes from './todoList.module.css';

import AddNewItem from './AddNewItem';
import { useEffect,useState } from 'react';

import Tasks from './Tasks/Tasks';

const TodoList=()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async (taskText) => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch(
            'https://react-http-76e56-default-rtdb.firebaseio.com/todoItems.json'
        );

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

        const loadedTasks = [];

        for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, title: data[taskKey].title });
        }

        setTasks(loadedTasks);
        } catch (err) {
        setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <section className={`${classes.todolistSection} mx-auto`}>
            <AddNewItem/>
            <h3 className='py-2'>Todo List</h3>
            <hr/>
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </section>
    );
}

export default TodoList;