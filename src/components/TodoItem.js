// import classes from './todoList.module.css';
import classes from './todoItem.module.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';

const TodoItem=()=>{
    return (
        <Card className={`${classes.todoItemCard} my-4`}>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <Form.Check type="radio" aria-label="radio 1" />
                    <div>shgjhmmhkhfhk </div>
                    <Button
                        variant="link"
                        className={classes.trashButton}
                    >
                        <FontAwesomeIcon icon={faTrashCan} className={classes.trashIcon} />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TodoItem;