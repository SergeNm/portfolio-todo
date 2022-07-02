import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Todo } from "../../models/models";
import HomeButton from "../app/HomeButton";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { fetchAllTodos, updateTodo } from "src/redux/thunks/todoThunk";

const TodoApp: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const [todo, setTodo] = useState<Todo>();
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(
      updateTodo({
        id: todo?.id,
        title: todo?.title,
        completed: !todo?.completed,
      } as Todo)
    );
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAllTodos());
    }, 500);
  }, [todos, dispatch]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (
      (source.droppableId === "TodosList" &&
        destination.droppableId === "TodosRemove") ||
      (source.droppableId === "TodosRemove" &&
        destination.droppableId === "TodosList")
    ) {
      handleEdit();
    }
  };

  return (
    <div>
      <HomeButton />
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={(el) =>
          setTodo(todos.find((todo) => todo.id === parseInt(el.draggableId)))
        }
      >
        <div className="App">
          <span className="heading">Todo App</span>
          <InputField />
          <TodoList
            todos={todos}
          />
        </div>
      </DragDropContext>
    </div>
  );
};

export default TodoApp;
