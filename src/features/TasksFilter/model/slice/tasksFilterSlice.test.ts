import { DEFAULT_FILTER, getFilterById, TasksFilterSchema } from "../config";
import { tasksFilterActions, tasksFilterReducer } from "./tasksFilter";

describe("tasks filter slice", () => {
  const state: TasksFilterSchema = {
    filter: getFilterById(DEFAULT_FILTER),
  };
  test("set filter", () => {
    expect(tasksFilterReducer(state, tasksFilterActions.setFilter(3))).toEqual({
      filter: {
        id: 3,
        title: "Closed",
        config: { completed: true },
      },
    });
  });
});
