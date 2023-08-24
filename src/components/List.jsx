import { useMyStore } from "../zustand/store";
import FormEdit from "./FormEdit";

const List = () => {
  const { todos, isOpen, setOpen, setOldId, setDelete } = useMyStore();
  const handleEdit = () => {
    setOpen();
  };
  return (
    <>
      <section className="section-list">
        <ul className="list">
          {todos.map((t) => (
            <li className="list-item" key={t.id}>
              {t.title}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setOpen();
                    setOldId(t.id);
                  }}
                  className="btn-edit"
                >
                  Edit
                </button>
                <button onClick={() => setDelete(t.id)} className="btn-delete">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {isOpen && <FormEdit />}
    </>
  );
};

export default List;
