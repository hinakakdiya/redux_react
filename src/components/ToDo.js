import React, { useState } from 'react';
import ToDoView from './ToDoView.js';
import { connect } from 'react-redux';
import { ADD_TODO_ACTION, DELETE_TODO_ACTION, EDIT_TODO_ACTION} from "../redux/actions/todoAction.js"

const ToDo = ({addTodo, editInTodoMethod}) => {

  const [Data, setData] = useState("");
  const [storeData, setStoreData] = useState([]);

  const DeleteInput  = (index) => {

    const newDetails = [...storeData]
    newDetails.splice(index, 1)
    setStoreData(newDetails)
  }

  return (
    <>
      <input
        placeholder="Enter name"
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setData(e.target.value);
        }}
        value={Data}
      />

      <button onClick={(e) => {
          e.preventDefault()
        setStoreData([...storeData, Data]);

        addTodo(Data)

        //editInTodoMethod(45, "rtyui")

        setData("");
      }}>submit</button>

      <ToDoView task={storeData} DeleteInput={DeleteInput} />
    </>
  );
}

const mapStateToProps = (state) =>({})
const mapstateToDispatch = (dispatch) => ({
    addTodo: (a) =>(dispatch(ADD_TODO_ACTION(a))),
    editInTodoMethod: (a, b) => (dispatch(DELETE_TODO_ACTION(a, b)))
})

export default connect(mapStateToProps, mapstateToDispatch) (ToDo);

