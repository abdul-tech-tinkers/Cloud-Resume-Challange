import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => {
  // Check if theme is stored in localStorage, otherwise default to "light"
  const initialTheme = localStorage.getItem("theme") as Theme || "light";

  return {
    theme: initialTheme,
    toggleTheme: () => {
      set((state) => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme); // Save theme to localStorage
        return { theme: newTheme };
      });
    },
  };
});

export default useThemeStore;
