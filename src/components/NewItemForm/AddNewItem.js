import React, { useState, useContext } from "react";
import classes from "./newItem.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TodoContext } from "../../Store/todo-context";

const AddNewItem = () => {
  const { setTitle, title, handleAddTodo } = useContext(TodoContext);

  const [show, setShow] = useState(false);
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false);

  const enteredTitleIsValid = title.trim() !== "";
  const inputIsInvalid = !enteredTitleIsValid && enteredTitleTouched;
  const titleInputClasses = inputIsInvalid
    ? `${classes.formControlInvalid}`
    : "";

  const handleClose = () => {
    setShow(false);
    setTitle("");
    setEnteredTitleTouched(false);
  };

  const handleShow = () => setShow(true);

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const titleInputBlurHandler = () => {
    setEnteredTitleTouched(true);
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    setEnteredTitleTouched(true);

    if (!enteredTitleIsValid) {
      return;
    }

    try {
      await handleAddTodo(title); // Use the context function
      handleClose();
      setTitle("");
      setEnteredTitleTouched(false);
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  return (
    <div className="d-flex justify-content-end">
      <Button onClick={handleShow} className={classes.AddNewItemButton}>
        Add New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h4 className={classes.ModalHeader}>Add new item</h4>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formSubmissionHandler} className={titleInputClasses}>
            <div className="pt-2 row">
              <label className={`${classes.titleLabel} col-2`} htmlFor="title">
                Title
              </label>
              <div className="col-10">
                <input
                  className={classes.inputField}
                  type="text"
                  id="title"
                  value={title}
                  onChange={titleInputChangeHandler}
                  onBlur={titleInputBlurHandler}
                />

                {inputIsInvalid && (
                  <p className={`${classes.errorText}`}>Please enter a title</p>
                )}
              </div>
            </div>

            <div className="py-4 d-flex justify-content-end">
              <Button
                variant="secondary"
                className="mx-4"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button variant="primary" onClick={formSubmissionHandler}>
                Confirm
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddNewItem;
