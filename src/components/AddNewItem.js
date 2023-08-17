import Button from 'react-bootstrap/Button';

import classes from './todoList.module.css';

const AddNewItem=()=>{
    return(
        <div className="d-flex justify-content-end">
            <Button className={classes.AddNewItemButton}>Add New</Button>
        </div>
    );
}
export default AddNewItem;