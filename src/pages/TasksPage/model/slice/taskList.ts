import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskListSchema } from "../types/taskList";

const initialState: TaskListSchema = {
  tasks: [
    {
      id: 1,
      text: "task 1",
      completed: false,
    },
    {
      id: 2,
      text: "task 2",
      completed: false,
    },
  ],
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    changeTaskCompleteness(state, action: PayloadAction<number>) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    addNewTask(state, action: PayloadAction<string>) {
      state.tasks.push({
        id: state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 1,
        text: action.payload,
        completed: false,
      });
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    clearCompletedTasks(state) {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
  },
});

export const { actions: taskListActions } = taskListSlice;
export const { reducer: taskListReducer } = taskListSlice;
