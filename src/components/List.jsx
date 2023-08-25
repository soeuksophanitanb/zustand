import { useMyStore } from "../zustand/store";
import FormEdit from "./FormEdit";

const List = () => {
  const {
    todos,
    isOpen,
    setOpen,
    setOldId,
    setDelete,
    setOldTitle,
    setMark,
    filtered,
  } = useMyStore();
  const handleEdit = () => {
    setOpen();
  };

  const fitleredTodo =
    filtered === "Done"
      ? todos.filter((t) => t.isMark === true)
      : filtered === "Doing"
      ? todos.filter((t) => t.isMark === false)
      : todos;

  return (
    <>
      <section className="section-list">
        <ul className="list">
          {fitleredTodo.map((t) => (
            <li className="list-item" key={t.id}>
              <p className={t.isMark ? "mark" : ""}>{t.title}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setOpen();
                    setOldId(t.id);
                    setOldTitle(t.title);
                  }}
                  className="btn-edit"
                >
                  Edit
                </button>
                <button onClick={() => setDelete(t.id)} className="btn-delete">
                  Delete
                </button>
                <button onClick={() => setMark(t.id)} className="btn-delete">
                  Mark
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
