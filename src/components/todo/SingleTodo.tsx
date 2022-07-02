import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../../models/models";
import { Draggable } from "react-beautiful-dnd";
import { useAppDispatch } from "src/redux/hooks";
import { deleteTodo, updateTodo } from "src/redux/thunks/todoThunk";

const SingleTodo: React.FC<{
  index: number;
  todo: Todo;
}> = ({ index, todo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.title);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDelete = useCallback(
    (todo: Todo) => {
      dispatch(deleteTodo(todo.id));
    },
    [dispatch]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        title: editTodo,
        completed: todo.completed,
      } as Todo)
    );
  };

  const handleDone = (id: number) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEdit(false);
            handleEdit();
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) : todo.completed ? (
            <s className="todos__single--text">{todo.title}</s>
          ) : (
            <span className="todos__single--text">{todo.title}</span>
          )}
          <div className="flex">
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.completed) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
