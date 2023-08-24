import { useRef } from "react";
import { useMyStore } from "../zustand/store";

const From = () => {
  const { setTodo } = useMyStore();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return;
    setTodo(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input ref={inputRef} className="input" type="text" />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default From;
