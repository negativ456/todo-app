import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "../config/reducerManager";
import { tasksFilterReducer } from "../../../../features/TasksFilter";
import { taskListReducer } from "../../../../pages/TasksPage";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    taskFilter: tasksFilterReducer,
    taskList: taskListReducer,
  };
  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: true,
    preloadedState: initialState,
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
