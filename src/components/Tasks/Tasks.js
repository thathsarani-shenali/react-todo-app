import classes from './taskItem.module.css';
import TaskItem from "./TaskItem";

import { Button, Card, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';

const Tasks = (props) => {
    let taskList = <h2>No tasks found. Start adding some!</h2>;
  
    if (props.items.length > 0) {
        taskList = (
            <ul>
            {props.items.map((task) => (
                <Card className={`${classes.todoItemCard} my-2`}>
                <Card.Body>
                    <Row>
                        <Col className='my-aut0'>
                            <Form.Check type="radio" aria-label="radio 1" />
                        </Col>
                        <Col xs={10}>
                            <TaskItem className='col-8' key={task.id}>{task.title}</TaskItem>
                        </Col>
                        <Col >
                            <Button
                                variant="link"
                                className={classes.trashButton}
                            >
                                <FontAwesomeIcon icon={faTrashCan} className={classes.trashIcon} />
                            </Button>
                        </Col>
                    </Row>
                    
                </Card.Body>
                </Card>
            ))}
            </ul>
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
  