import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: resolveInitialTheme() as Theme },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
