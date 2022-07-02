import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/todo/Spinner";
const Todo = React.lazy(() => import("./components/todo/TodoApp"));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
