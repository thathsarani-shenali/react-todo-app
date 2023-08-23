import React from "react";
import { TodoContext } from "../../Store/todo-context";
import emptyList from "../../task-list.png";

import classes from "./taskItem.module.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Card, Col, Row } from "react-bootstrap";
import { useContext } from "react";

const Tasks = () => {
  const {
    items,
    loading,
    handleCheckbox,
    handleDelete,
    handleFetchTasks,
    error,
  } = useContext(TodoContext);

  let taskList = (
    <div className="text-center py-4">
      <img src={emptyList} alt="emptyList" />
      <h4 className="py-4">No tasks found. Start adding some!</h4>
    </div>
  );

  if (items.length > 0) {
    taskList = (
      <div>
        {items.map((task) => (
          <Card className={`${classes.todoItemCard} my-2`} key={task._uuid}>
            <Card.Body>
              <Row>
                <Col className="my-aut0 col-2">
                  <input
                    className={`${classes.checkbox} form-check-input`}
                    type="checkbox"
                    value=""
                    id={`checkbox-${task._uuid}`}
                    checked={task.completed}
                    onChange={() => handleCheckbox(task)}
                  ></input>
                </Col>
                <Col className={`${classes.todoItemTitle} col-8`}>
                  <p
                    className={`${task.completed ? classes.titleChanged : ""}`}
                  >
                    {task.title}
                  </p>
                </Col>
                <Col className="col-2">
                  <Button
                    variant="link"
                    className={`${classes.trashButton} p-0`}
                    onClick={() => handleDelete(task)}
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className={classes.trashIcon}
                    />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }

  let content = taskList;

  if (error) {
    content = <button onClick={handleFetchTasks}>Try again</button>;
  }

  if (loading) {
    content = (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <div className={`${classes.container} pt-2`}>{content}</div>
    </div>
  );
};

export default Tasks;
