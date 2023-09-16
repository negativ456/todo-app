import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { componentRender } from "../../../../shared/config/tests/componentRender/componentRender";
import { CreateTaskForm } from "./CreateTaskForm";
describe("features/CreateTaskForm", () => {
  test("input should be filled", async () => {
    const onCreate = jest.fn();
    componentRender(<CreateTaskForm onCreate={onCreate} />);
    const input = await screen.findByTestId("Create.Input");
    const btn = await screen.findByTestId("Create.Button");
    await userEvent.type(input, "new task");
    await userEvent.click(btn);
    expect(input).toBeInTheDocument();
    expect(onCreate).toBeCalled();
  });
  test("could not create because of empty input", async () => {
    const onCreate = jest.fn();
    componentRender(<CreateTaskForm onCreate={onCreate} />);
    const input = await screen.findByTestId("Create.Input");
    const btn = await screen.findByTestId("Create.Button");
    await userEvent.click(btn);
    expect(onCreate).not.toBeCalled();
  });
  test("create on enter button", async () => {
    const onCreate = jest.fn();
    componentRender(<CreateTaskForm onCreate={onCreate} />);
    const input = await screen.findByTestId("Create.Input");
    await userEvent.type(input, "new task");
    await userEvent.keyboard("{Enter}");
    expect(onCreate).toBeCalled();
  });
});
