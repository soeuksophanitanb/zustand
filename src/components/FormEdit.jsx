import { useRef } from "react";
import { useMyStore } from "../zustand/store";

const FormEdit = () => {
  const { setEdit, oldId, setOpen } = useMyStore();
  const inputRef = useRef();
  const handleEdit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return;
    setEdit(inputRef.current.value, oldId);
    inputRef.current.value = "";
    setOpen();
  };
  return (
    <div className="fixed w-full h-[100vh] grid place-items-center">
      <form onSubmit={handleEdit}>
        <input className="input" ref={inputRef} type="text" />
        <button className="btn-edit">Edit</button>
        <button onClick={setOpen} className="btn-edit">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FormEdit;
