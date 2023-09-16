import cls from "./TaskCard.module.scss";
import classNames from "classnames";
import { Task } from "../../model/types/task";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";

interface TaskCardProps {
  className?: string;
  task: Task;
  onComplete: (id: number) => void;
}

export const TaskCard = ({ className, task, onComplete }: TaskCardProps) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"center"}
      alignItems={"center"}
      className={classNames(cls.TaskCard, className)}
    >
      <Checkbox
        inputProps={{ role: "TaskCard.Checkbox" }}
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      <Typography
        className={classNames({ [cls.crossed]: task.completed })}
        variant={"body1"}
        data-testid={"TaskCard.text"}
      >
        {task.text}
      </Typography>
    </Stack>
  );
};
