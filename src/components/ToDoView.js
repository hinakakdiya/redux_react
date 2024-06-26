import React from 'react';

const ToDoView = (props) => {

  return (

    <>
      <ul>
        {props.task.map((value, index) => (
          <div>
            <li key={index}>{value}</li>

            <button style={{ width: '5%', height: '5%' }} onClick={(e) => {
              e.preventDefault()
              props.DeleteInput(index)
            }}>
              Delete
            </button>
          </div>

        ))}
      </ul>
    </>

  )
}
export default ToDoView;


