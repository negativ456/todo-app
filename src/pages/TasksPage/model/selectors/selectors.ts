import { StateSchema } from "../../../../app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";
import { getFilter } from "../../../../features/TasksFilter/model/getFilter";

export const getTasks = (state: StateSchema) => state.taskList.tasks;
export const getUncompletedTasksNumber = createSelector(
  getTasks,
  (tasks) => tasks.filter((task) => !task.completed).length
);
export const getFilteredTasks = createSelector(
  getTasks,
  getFilter,
  (tasks, filter) => {
    return tasks.filter(
      (task) =>
        filter.config.completed === undefined ||
        task.completed === filter.config.completed
    );
  }
);
