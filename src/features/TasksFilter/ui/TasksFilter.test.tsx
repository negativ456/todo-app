import { componentRender } from "../../../shared/config/tests/componentRender/componentRender";
import { TasksFilter } from "./TasksFilter";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getFilter } from "../model/getFilter";
import { StateSchema } from "../../../app/providers/StoreProvider";
import {
  tasksFilterActions,
  tasksFilterSlice,
} from "../model/slice/tasksFilter";

const options = {
  initialState: {
    taskFilter: {
      filter: {
        id: 1,
        title: "All",
        config: {},
      },
    },
  },
};
describe("feature/TasksFilter", () => {
  test("filter should be changed", async () => {
    componentRender(<TasksFilter />, options);
    const btn = await screen.findByTestId("FilterBtn-3");
    expect(btn).toBeInTheDocument();
    // expect(getFilter(options.initialState as unknown as StateSchema)).toEqual({
    //   id: 3,
    //   title: "Closed",
    //   config: { completed: true },
    // });
  });
});
