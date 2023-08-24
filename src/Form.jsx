import { useRef } from "react";
import { useCounter, usePerson } from "./zustand/store";

const Form = () => {
  const { setPerson } = usePerson();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button>Add</button>
    </form>
  );
};

export default Form;
