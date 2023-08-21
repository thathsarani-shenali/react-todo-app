import classes from './todoList.module.css';

import AddNewItem from './AddNewItem';
import { useEffect,useState } from 'react';

import Tasks from './Tasks/Tasks';


const TodoList=()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const apiKey = 'K70amQMblSEBeyX2_W6MFST5jHS9OasJMD9W4gJMo7PvyNTSQA';
            const apiUrl = '/api/v1/task';
      
            const headers = {
              Authorization: `Bearer ${apiKey}`
            };
      
            const response = await fetch(apiUrl, { headers });
      
            if (!response.ok) {
              throw new Error('Request failed!');
            }
      
            const data = await response.json();
      
            setTasks(data.items);
          } catch (err) {
            setError(err.message || 'Something went wrong!');
          }
          setIsLoading(false);
    };

    const handleAddNewItem = () => {
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <section className={`${classes.todolistSection} mx-auto`}>
            <AddNewItem onAddNewItem={handleAddNewItem} />
            <h3 className='py-2'>Todo List</h3>
            <hr/>
            <Tasks
              items={tasks}
              loading={isLoading}
              error={error}
              onFetch={fetchTasks}
              setItems={setTasks}
            />
        </section>
    );
}

export default TodoList;