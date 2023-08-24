import { useContext } from "react";
import { useCounter, useOldPerson, usePerson } from "./zustand/store";

const List = () => {
  const { user, setDeletePerson } = usePerson();
  const { setOldId } = useOldPerson();
  const { setOpen } = useCounter();
  return (
    <ul>
      {user.map((p) => (
        <li key={Math.random()}>
          {p.name}{" "}
          <button
            onClick={() => {
              setOpen();
              setOldId(p.id);
            }}
          >
            Edit
          </button>
          <button onClick={() => setDeletePerson(p.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
