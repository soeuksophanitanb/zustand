import { create } from "zustand";

export const useMyStore = create((set) => ({
  todos: [{ id: 1, title: "Hello World", isMark: false }],
  setTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Math.random(), title, isMark: false }],
    })),
  setEdit: (newTitle, id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      ),
    })),
  setDelete: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
  setMark: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, isMark: !t.isMark } : t
      ),
    })),
  oldId: null,
  setOldId: (id) =>
    set(() => ({
      oldId: id,
    })),
  oldTitle: null,
  setOldTitle: (title) =>
    set(() => ({
      oldTitle: title,
    })),
  isOpen: false,
  setOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  button: ["All Todo", "Doing", "Done"],
  filtered: null,
  setFilter: (title) =>
    set(() => ({
      filtered: title,
    })),
}));
