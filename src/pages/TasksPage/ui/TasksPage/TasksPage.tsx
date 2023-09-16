import cls from "./TasksPage.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import {
  getFilteredTasks,
  getTasks,
  getUncompletedTasksNumber,
} from "../../model/selectors/selectors";
import { TaskList } from "../../../../entities/Task";
import { useAppDispatch } from "../../../../shared/hooks/useAppDispatch";
import { taskListActions } from "../../model/slice/taskList";
import { Button, Stack, Typography } from "@mui/material";
import { TasksFilter } from "../../../../features/TasksFilter";
import { CreateTaskForm } from "../../../../features/CreateTaskForm";

interface TasksPageProps {
  className?: string;
}

export const TasksPage = ({ className }: TasksPageProps) => {
  const filteredTasks = useSelector(getFilteredTasks);
  const dispatch = useAppDispatch();
  const uncompletedTasksNumber = useSelector(getUncompletedTasksNumber);
  const onComplete = (id: number) => {
    dispatch(taskListActions.changeTaskCompleteness(id));
  };
  const onCreate = (text: string) => {
    dispatch(taskListActions.addNewTask(text));
  };
  const clearCompletedTasks = () => {
    dispatch(taskListActions.clearCompletedTasks());
  };
  return (
    <Stack
      direction={"column"}
      spacing={5}
      alignItems={"center"}
      className={classNames(cls.TasksPage, className)}
    >
      <Typography variant={"h2"}>To do list</Typography>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Typography>{uncompletedTasksNumber} items left</Typography>
        <TasksFilter />
        <Button variant={"contained"} onClick={clearCompletedTasks}>
          Clear completed
        </Button>
      </Stack>
      <CreateTaskForm onCreate={onCreate} />
      <TaskList tasks={filteredTasks} onComplete={onComplete} />
    </Stack>
  );
};
