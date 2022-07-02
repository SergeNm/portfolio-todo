import React, { useEffect } from "react";
import { Todo } from "../../models/models";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
import { fetchAllTodos } from "src/redux/thunks/todoThunk";
import { useAppDispatch } from "src/redux/hooks";

interface props {
  todos: Array<Todo>;
}

const TodoList: React.FC<props> = ({
  todos,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              !todo.completed &&
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {todos?.map((todo, index) => (
              todo.completed &&
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
