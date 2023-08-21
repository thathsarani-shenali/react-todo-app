import React from 'react';
import classes from './taskItem.module.css';
import TaskItem from './TaskItem';
import DeleteItem from './DeleteItem';

import {Card, Col, Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Tasks = (props) => {
    const handleDeleteItem = async(taskId) => {
        try{
            const apiKey = 'K70amQMblSEBeyX2_W6MFST5jHS9OasJMD9W4gJMo7PvyNTSQA';
            const apiUrl = `/api/v1/task/${taskId}`;
      
            const headers = {
              Authorization: `Bearer ${apiKey}`
            };

            const response=await fetch( apiUrl,{
                method:'DELETE',
                headers
            });

            if(!response.ok){
                throw new Error('Failed to delete item');
            }
            props.onFetch();
        }
        
        catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleCheckboxToggle=async(taskId, completed)=>{
        const apiKey = 'K70amQMblSEBeyX2_W6MFST5jHS9OasJMD9W4gJMo7PvyNTSQA';
        const apiUrl = `/api/v1/task/${taskId}`;
      
        const headers = {
            Authorization: `Bearer ${apiKey}`
        };

        let response=''; 

        if(completed){
            response=await fetch( apiUrl,{
                method:'PUT',
                headers,
                body:JSON.stringify({ completed: false })
            });
        }
        else{
            response=await fetch( apiUrl,{
                method:'PUT',
                headers,
                body:JSON.stringify({ completed: true })
            });
        }
    
        if(!response.ok){
            throw new Error('Failed to update the task');
        }
        props.onFetch();
    };

    let taskList = <h2>No tasks found. Start adding some!</h2>;

    if (props.items.length > 0) {
        taskList = (
        <div>
            {props.items.map((task) => (
                <Card className={`${classes.todoItemCard} my-2`} key={task._uuid}>
                    <Card.Body>
                        <Row>
                            <Col className='my-aut0'>
                                <input className="form-check-input" type="checkbox" value="" id={`checkbox-${task._uuid}`}
                                    checked={task.completed}
                                    onChange={() => handleCheckboxToggle(task._uuid, task.completed)}
                                >
                                </input>
                            </Col>
                            <Col className={classes.todoItemTitle} xs={10}>
                                <TaskItem key={task._uuid} isCompleted={task.completed}>{task.title}</TaskItem>
                            </Col>
                            <Col>
                                <DeleteItem onDelete={() => handleDeleteItem(task._uuid)} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </div>
        );
    }

    let content = taskList;

    if (props.error) {
        content = <button onClick={props.onFetch}>Try again</button>;
    }

    if (props.loading) {
        content = 'Loading tasks...';
    }


    return (
        <div>
            <div className={classes.container}>{content}</div>
        </div>
    );
};

export default Tasks;
