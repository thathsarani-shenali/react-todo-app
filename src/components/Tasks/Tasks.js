import React from 'react';
import classes from './taskItem.module.css';
import TaskItem from './TaskItem';
import DeleteItem from './DeleteItem';

import {Card, Col, Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Tasks = (props) => {
    let taskList = <h2>No tasks found. Start adding some!</h2>;

    if (props.items.length > 0) {
        taskList = (
        <div>
            {props.items.map((task) => (
                <Card className={`${classes.todoItemCard} my-2`} key={task._uuid}>
                    <Card.Body>
                        <Row>
                            <Col className='my-aut0'>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </Col>
                            <Col className={classes.todoItemTitle} xs={10}>
                                <TaskItem className='col-8' key={task._uuid}>{task.title}</TaskItem>
                            </Col>
                            <Col>
                                <DeleteItem/>
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
