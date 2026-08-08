/** @format */

import { create } from "zustand";
import { GOOGLE_FORM_URL } from "./constants";

interface ModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => {
    if (typeof window !== "undefined") {
      window.open(GOOGLE_FORM_URL, "_blank");
    }
  },
  closeModal: () => set({ isOpen: false }),
}));
