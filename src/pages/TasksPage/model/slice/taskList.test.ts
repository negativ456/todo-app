import { taskListActions, taskListReducer } from "./taskList";
import { TaskListSchema } from "../types/taskList";

describe("taskListSlice", () => {
  const state: TaskListSchema = {
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
  test("change task completeness", () => {
    expect(
      taskListReducer(state, taskListActions.changeTaskCompleteness(1))
    ).toEqual({
      tasks: [
        {
          id: 1,
          text: "task 1",
          completed: true,
        },
        {
          id: 2,
          text: "task 2",
          completed: false,
        },
      ],
    });
  });
  test("add new task", () => {
    expect(taskListReducer(state, taskListActions.addNewTask("new"))).toEqual({
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
        {
          id: 3,
          text: "new",
          completed: false,
        },
      ],
    });
  });
  test("remove task", () => {
    expect(taskListReducer(state, taskListActions.removeTask(1))).toEqual({
      tasks: [
        {
          id: 2,
          text: "task 2",
          completed: false,
        },
      ],
    });
  });
  test("clear completed tasks", () => {
    const state = {
      tasks: [
        {
          id: 1,
          text: "task 1",
          completed: true,
        },
        {
          id: 2,
          text: "task 2",
          completed: true,
        },
        {
          id: 3,
          text: "new",
          completed: false,
        },
      ],
    };
    expect(
      taskListReducer(state, taskListActions.clearCompletedTasks())
    ).toEqual({
      tasks: [
        {
          id: 3,
          text: "new",
          completed: false,
        },
      ],
    });
  });
});
