import { useRef } from "react";
import { useCounter, useOldPerson, usePerson } from "./zustand/store";

const FormEdit = () => {
  const { setEditPerson } = usePerson();
  const { oldId } = useOldPerson();
  const { setOpen } = useCounter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditPerson(inputRef.current.value, oldId);
    console.log(oldId);
    setOpen();
  };
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Edit</button>
      <button onClick={setOpen}>Cancel</button>
    </form>
  );
};

export default FormEdit;
