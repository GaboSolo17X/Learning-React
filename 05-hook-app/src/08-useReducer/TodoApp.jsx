import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../Hook/useTodos";

export const TodoApp = () => {

 const {todos,todosCount,todosPending,handleDeleteTodo,handleToggleTodo,handleNewTodo}=useTodos();
  return (
    <>
      <h1>
        Todo List: {todosCount}, <small>pendientes:{todosPending}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
            {/*TODO LIST */}
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            />
           {/*TODO LIST */}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
};
