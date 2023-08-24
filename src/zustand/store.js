import { create } from "zustand";

export const useMyStore = create((set) => ({
  todos: [{ id: 1, title: "Hello World" }],
  setTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Math.random(), title }],
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
}));
