import React, { useRef } from "react";

const TodoItem = (props) => {
  const {item, updateTodo, removeTodo} = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  
  return (
    <li key={item.id} className="card" >

      <input className="checkbox1" type="checkbox"></input>

      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />

      <div className="btns">
        <button onClick={() => changeFocus()}>
          Edit
        </button>
        <button onClick={() => removeTodo(item.id)}>
          Remove
        </button>
      </div>

    </li>
  );
};

export default TodoItem;
