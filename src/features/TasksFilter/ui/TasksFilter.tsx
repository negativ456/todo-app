import cls from "./TasksFilter.module.scss";
import classNames from "classnames";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { Filter, filtersList } from "../model/config";
import { useAppDispatch } from "../../../shared/hooks/useAppDispatch";
import { tasksFilterActions } from "../model/slice/tasksFilter";
import { getFilter } from "../model/getFilter";
import { useSelector } from "react-redux";
import * as React from "react";

interface TasksFilterProps {
  className?: string;
}

export const TasksFilter = ({ className }: TasksFilterProps) => {
  const dispatch = useAppDispatch();
  const currentFilter = useSelector(getFilter);
  const handleFilter = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: number
  ) => {
    dispatch(tasksFilterActions.setFilter(newFilter));
  };
  return (
    <ToggleButtonGroup
      value={currentFilter.id}
      exclusive
      onChange={handleFilter}
      aria-label="text alignment"
    >
      {filtersList.map((filter) => (
        <ToggleButton
          value={filter.id}
          key={filter.id}
          data-testid={`FilterBtn-${filter.id}`}
        >
          {filter.title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
