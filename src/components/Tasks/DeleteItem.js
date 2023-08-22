import classes from "./taskItem.module.css";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const DeleteItem = (props) => {
  const deleteButtonHandler = () => {
    props.onDelete();
  };

  return (
    <Button
      variant="link"
      className={`${classes.trashButton} p-0`}
      onClick={deleteButtonHandler}
    >
      <FontAwesomeIcon icon={faTrashCan} className={classes.trashIcon} />
    </Button>
  );
};

export default DeleteItem;
