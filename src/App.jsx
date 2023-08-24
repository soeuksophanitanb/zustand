import { useRef } from "react";
import "./App.css";
import Button from "./Button";
import { useCounter, usePerson } from "./zustand/store";
import List from "./List";
import FormEdit from "./FormEdit";
import Form from "./Form";

function App() {
  const { count, isOpen, setOpen } = useCounter();
  return (
    <>
      <Form />
      <List />
      {isOpen && <FormEdit />}
    </>
  );
}

export default App;
