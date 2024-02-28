const emptyCheckbox = '[ ]';
const checkedCheckbox = '[x]';

export interface TaskData {
    index?: number,
    task: String,
    done: Boolean,
    toggleCheckbox: Function,
    deleteTask: Function,
  }

export function Task(props: TaskData) {

    function onCheckButton() {
      props.toggleCheckbox(props.index);
    }
  
    function onDeleteButton() {
      props.deleteTask(props.index);
    }
  
    return (
      <li className={props.done ? 'checked' : ''}>
        {
          props.done ? <button className='checked' onClick={onCheckButton}>{checkedCheckbox}</button> 
          : <button onClick={onCheckButton}>{emptyCheckbox}</button>
        }
        <span>{props.task}</span>
        <button className='delete-button' onClick={onDeleteButton}>x</button>
      </li>
    );
  }