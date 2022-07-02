import React, { useCallback, useRef, useState } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { addTodo } from "src/redux/thunks/todoThunk";
import "./styles.css";

const InputField = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAdd = useCallback(() => {
    dispatch(addTodo(todo));
    setTodo("");
  }, [dispatch, todo]);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd();
        inputRef.current?.blur();
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
