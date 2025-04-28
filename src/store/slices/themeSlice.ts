import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

// Because of the hydrate in next i comment this code 

// const getInitialTheme = (): Theme => {
//   if (typeof window !== 'undefined') {
//     const savedTheme = localStorage.getItem('theme') as Theme | null;
//     if (savedTheme === 'dark' || savedTheme === 'light') {
//       document.documentElement.dataset.theme = savedTheme;
//       return savedTheme;
//     }
//   }
//   document.documentElement.dataset.theme = 'light';
//   return 'light';
// };

const initialState: ThemeState = {
//   theme: typeof window === 'undefined' ? 'light' : getInitialTheme(),
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
        document.documentElement.dataset.theme = action.payload;
      }
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.theme);
        document.documentElement.dataset.theme = state.theme;
      }
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;