import cls from "./TaskList.module.scss";
import classNames from "classnames";
import { Task } from "../../model/types/task";
import { TaskCard } from "../TaskCard/TaskCard";
import { Stack } from "@mui/material";

interface TaskListProps {
  className?: string;
  tasks: Task[];
  onComplete: (id: number) => void;
}

export const TaskList = ({ className, tasks, onComplete }: TaskListProps) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"start"}
      className={classNames(cls.TaskList, className)}
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onComplete={onComplete} />
      ))}
    </Stack>
  );
};
