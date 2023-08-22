import React, { useState } from "react";
import axios from "axios";

import classes from "./newItem.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddNewItem = ({ onAddNewItem }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false);

  const enteredTitleIsValid = title.trim() !== "";
  const inputIsInvalid = !enteredTitleIsValid && enteredTitleTouched;
  const titleInputCasses = inputIsInvalid
    ? `${classes.formControlInvalid}`
    : "";

  const handleClose = () => {
    setShow(false);
    setTitle("");
    setEnteredTitleTouched(false);
  };

  const handleShow = () => setShow(true);

  const ttleInputchangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const ttleInputBlurHandler = (event) => {
    setEnteredTitleTouched(true);
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    setEnteredTitleTouched(true);

    if (!enteredTitleIsValid) {
      return;
    }

    try {
      const apiKey = "K70amQMblSEBeyX2_W6MFST5jHS9OasJMD9W4gJMo7PvyNTSQA";
      const apiUrl = "/api/v1/task";

      const headers = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      };

      const newTask = [{ title, completed: false }];

      const response = await axios.post(apiUrl, newTask, { headers });
      
      if (!response.status === 201) {
        throw new Error("Failed to add new item");
      }

      handleClose();
      onAddNewItem();
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
          <form onSubmit={formSubmissionHandler} className={titleInputCasses}>
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
                  onChange={ttleInputchangeHandler}
                  onBlur={ttleInputBlurHandler}
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
