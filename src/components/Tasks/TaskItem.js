import classes from './taskItem.module.css';

const TaskItem = (props) => {
  return <p className={`${props.isCompleted ? classes.titleChanged : ''}`}>{props.children}</p>
};

export default TaskItem;