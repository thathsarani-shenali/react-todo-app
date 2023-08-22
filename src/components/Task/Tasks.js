import React from "react";
import axios from "axios"; // Import Axios
import emptyList from "../../task-list.png";

import classes from "./taskItem.module.css";
import TaskItem from "./TaskItem";
import DeleteItem from "./DeleteItem";

import { Card, Col, Row } from "react-bootstrap";

const Tasks = (props) => {
  const handleDeleteItem = async (taskId) => {
    try {
      const apiKey = "K70amQMblSEBeyX2_W6MFST5jHS9OasJMD9W4gJMo7PvyNTSQA";
      const apiUrl = `/api/v1/task/${taskId}`;

      const headers = {
        Authorization: `Bearer ${apiKey}`,
      };

      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers,
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      const updatedTasks = props.items.filter((task) => task._uuid !== taskId);
      props.setItems(updatedTasks);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleCheckboxToggle = async (taskId, completed) => {
    try {
      const apiKey = "K70amQMblSEBeyX2_W6MFST5jHS9OasJMD9W4gJMo7PvyNTSQA";
      const apiUrl = `/api/v1/task/${taskId}`;

      const headers = {
        Authorization: `Bearer ${apiKey}`,
      };

      const updatedCompleted = !completed;

      await axios.put(apiUrl, { completed: updatedCompleted }, { headers });

      const updatedTasks = props.items.map((task) =>
        task._uuid === taskId ? { ...task, completed: updatedCompleted } : task
      );

      props.setItems(updatedTasks);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  let taskList = (
    <div className="text-center py-4">
      <img src={emptyList} alt="emptyList" />
      <h4 className="py-4">No tasks found. Start adding some!</h4>
    </div>
  );

  if (props.items.length > 0) {
    taskList = (
      <div>
        {props.items.map((task) => (
          <Card className={`${classes.todoItemCard} my-2`} key={task._uuid}>
            <Card.Body>
              <Row>
                <Col className="my-aut0 col-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`checkbox-${task._uuid}`}
                    checked={task.completed}
                    onChange={() =>
                      handleCheckboxToggle(task._uuid, task.completed)
                    }
                  ></input>
                </Col>
                <Col className={`${classes.todoItemTitle} col-8`}>
                  <TaskItem key={task._uuid} isCompleted={task.completed}>
                    {task.title}
                  </TaskItem>
                </Col>
                <Col className="col-2">
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
    content = (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.container}>{content}</div>
    </div>
  );
};

export default Tasks;
