import { useState } from 'react';

import { TaskData, Task } from './components/Task';
import { ListName } from './components/ListName';
import { InputText } from './components/InputText';

import './App.css';

function App() {
  const [currentList, setCurrentList] = useState<String>('');
  const [listData, setListData] = useState<Map<String, Array<TaskData>>>(new Map());

  function toggleCheckbox(index: number) {
    let newList = new Map(listData);
    newList.get(currentList)![index].done = !newList.get(currentList)![index].done;
    setListData(newList);
  }

  function deleteTask(index: number) {
    let newList = new Map(listData);
    newList.get(currentList)?.splice(index, 1);
    setListData(newList);
  }

  function buildTask(task: String) {
    let listName: String = currentList;
    let newList = new Map(listData);
    
    if(currentList === ''){
      listName = 'default';
      if(!listData.has('default')){
        newList.set(listName, new Array<TaskData>());
      }      
      setCurrentList(listName);
    }
    
    let data: TaskData = {
      task: task,
      done: false,
      toggleCheckbox: () => {},
      deleteTask: () => {},
    }
    
    newList.get(listName)!.push(data);
    setListData(newList);
  }

  function onClickList(name: String) {
    setCurrentList(name);
  }

  function deleteList(name: String) {
    let newList = new Map(listData);
    newList.delete(name);
    setListData(newList);
    if(listData.has('default')){
      setCurrentList('default');
    }else {
      setCurrentList('');
    }
  }

  function buildList(name: String) {
    let newList = new Map(listData);
    newList.set(name, new Array<TaskData>());
    setListData(newList);
  }

  return (
    <div className="app">
      <div className="vert-menu side-space">
        <h3>Your Lists</h3>
        <ul>
            {
              Array.from(listData.keys()).map(name => (
                <ListName name={name} onClick={onClickList} deleteList={deleteList}/>
              ))
            }
        </ul>
        <InputText placeholder='new list name' submit={buildList}/>
      </div>
      <div className="list-frame">
        <h3>{currentList}</h3>
        <InputText placeholder='write your task' submit={buildTask}/>
        <div className="list-container green-border">
          <ul>
            {
              listData.get(currentList)?.map((v, i) => (
                <Task task={v.task} done={v.done} index={i} toggleCheckbox={toggleCheckbox} deleteTask={deleteTask} key={i}/>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="side-space"></div>
    </div>
  );
}

export default App;
