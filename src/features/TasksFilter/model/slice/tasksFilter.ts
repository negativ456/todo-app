import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DEFAULT_FILTER,
  Filter,
  filters,
  getFilterById,
  TasksFilterSchema,
} from "../config";

const initialState: TasksFilterSchema = {
  filter: getFilterById(DEFAULT_FILTER),
};

export const tasksFilterSlice = createSlice({
  name: "tasksFilterSlice",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<number>) {
      state.filter = filters[action.payload];
    },
  },
});

export const { actions: tasksFilterActions } = tasksFilterSlice;
export const { reducer: tasksFilterReducer } = tasksFilterSlice;
