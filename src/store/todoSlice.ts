import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  items: Todo[];
  filter: 'all' | 'active' | 'completed';
}

const initialState: TodoState = {
  items: [],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<TodoState['filter']>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer; 