export interface ListNameProps {
    name: String;
    onClick: Function;
    deleteList: Function;
  }

export function ListName(props: ListNameProps) {

    function onClick() {
      props.onClick(props.name);
    }
  
    function onDeleteButton() {
      props.deleteList(props.name);
    }
  
    return (
      <li>
        <span onClick={onClick}>{props.name}</span>
        <button className='delete-button' onClick={onDeleteButton}>x</button>
      </li>
    );
  }