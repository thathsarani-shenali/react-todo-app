import { useState } from 'react';
import classes from './todoList.module.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddNewItem=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <div className="d-flex justify-content-end">
            <Button onClick={handleShow} className={classes.AddNewItemButton}>
                Add New
            </Button>

            <Modal show={show} onHide={handleClose}>
                <h3>Add new item</h3>
                <Modal.Body>
                    <form>
                        <div>
                            <label htmlFor='title'>title </label>
                            <input type='text' id='title' />
                        </div>
                        
                        <div className=''>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" >
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