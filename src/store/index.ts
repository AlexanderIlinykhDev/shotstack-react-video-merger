import create from "zustand";
import { devtools } from "zustand/middleware";
import { STATUSES } from "../services/types";

interface Store {
  status: STATUSES;
  email: string;
  setEmail: (email: string) => void;
}

export const useStore = create<Store>()(
  devtools((set) => ({
    status: STATUSES.initial,
    email: "",
    setEmail: (email: string) => {
      set({ email: email });
    },
  }))
);
