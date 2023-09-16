import cls from "./CreateTaskForm.module.scss";
import classNames from "classnames";
import { Button, Stack, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

interface CreateTaskFormProps {
  className?: string;
  onCreate: (text: string) => void;
}

export const CreateTaskForm = ({
  className,
  onCreate,
}: CreateTaskFormProps) => {
  const [text, setText] = useState("");
  const create = () => {
    if (text) {
      onCreate(text);
      setText("");
    }
  };
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && text) {
        create();
      }
    },
    [onCreate, text]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={1}
      className={classNames(cls.CreateTaskForm, className)}
    >
      <TextField
        value={text}
        inputProps={{ "data-testid": "Create.Input" }}
        onChange={(e) => setText(e.target.value)}
        label="Enter new task"
        variant="outlined"
      />
      <Button
        data-testid={"Create.Button"}
        variant={"contained"}
        onClick={create}
      >
        Create
      </Button>
    </Stack>
  );
};
