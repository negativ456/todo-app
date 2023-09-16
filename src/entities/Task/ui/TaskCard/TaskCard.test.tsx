import { componentRender } from "../../../../shared/config/tests/componentRender/componentRender";
import { TaskCard } from "./TaskCard";
import { Task } from "../../model/types/task";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
describe("Task card", () => {
  test("on complete should be called", async () => {
    const onComplete = jest.fn();
    const task: Task = {
      id: 1,
      text: "task",
      completed: false,
    };
    componentRender(<TaskCard task={task} onComplete={onComplete} />);
    const checkbox = screen.getByRole("TaskCard.Checkbox");
    expect(checkbox).toBeInTheDocument();
    await userEvent.click(checkbox);
    expect(onComplete).toBeCalled();
  });
  test("completed text should be crossed", async () => {
    const onComplete = jest.fn();
    const task: Task = {
      id: 1,
      text: "task",
      completed: true,
    };
    componentRender(<TaskCard task={task} onComplete={onComplete} />);
    const text = screen.getByTestId("TaskCard.text");
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("crossed");
  });
});
