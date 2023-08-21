import React, { useState } from 'react';
import classes from './todoList.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddNewItem = ({ onAddNewItem }) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
  
    const handleClose = () => {
      setShow(false);
      setTitle('');
    };

    const handleShow = () => setShow(true);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleConfirm = async () => {
        try {
        const apiKey = 'K70amQMblSEBeyX2_W6MFST5jHS9OasJMD9W4gJMo7PvyNTSQA';
        const apiUrl = '/api/v1/task';

        const headers = {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        };
        

        const newTask = [{ title, completed: false }];

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            throw new Error('Failed to add new item');
        }

        handleClose();

        onAddNewItem();

        } catch (error) {
        console.error('Error adding new item:', error);
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
          <form>
            <div className='py-2 d-flex justify-content-between'>
              <label className={classes.titleLabel} htmlFor='title'>Title</label>
              <input className={classes.inputField} type='text' id='title' value={title} onChange={handleTitleChange} />
            </div>
            
            <div className='py-4 d-flex justify-content-end'>
              <Button variant="secondary" className='mx-4' onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleConfirm}>
                Confirm
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddNewItem;
