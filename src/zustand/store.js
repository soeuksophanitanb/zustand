import { create } from "zustand";

export const useCounter = create((set) => ({
  count: 0,
  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  dec: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  isOpen: false,
  setOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));

export const usePerson = create((set) => ({
  user: [{ id: 1, name: "John Wick" }],
  setPerson: (name) =>
    set((state) => ({
      user: [...state.user, { id: state.user.length + 1, name }],
    })),
  setEditPerson: (newName, id) =>
    set((state) => ({
      user: state.user.map((p) => (p.id == id ? { ...p, name: newName } : p)),
    })),
  setDeletePerson: (id) =>
    set((state) => ({
      user: state.user.filter((p) => p.id !== id),
    })),
}));

export const useOldPerson = create((set) => ({
  oldId: null,
  setOldId: (oldid) =>
    set(() => ({
      oldId: oldid,
    })),
}));
