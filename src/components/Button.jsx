import { useMyStore } from "../zustand/store";

const Button = () => {
  const { button, setFilter } = useMyStore();
  return (
    <div className="flex gap-3">
      {button.map((b) => (
        <button
          key={b}
          onClick={() => setFilter(b)}
          className="btn-edit font-bold !bg-indigo-400 mt-2 !text-white"
        >
          {b}
        </button>
      ))}
    </div>
  );
};

export default Button;
