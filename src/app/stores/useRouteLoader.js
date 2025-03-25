import { create } from "zustand";

export const useRouteLoader = create((set) => ({
  isNavigating: false,
  startNavigation: () => set({ isNavigating: true }),
  stopNavigation: () => set({ isNavigating: false }),
}));