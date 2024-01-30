import { connect } from "react-redux";
import {addTodos, removeTodos, updateTodos,} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
  };
};

const DisplayTodos = (props) => {
  return (
    <div className="displaytodos">
          {props.todos.map((item) => {
                return (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                );
              })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
