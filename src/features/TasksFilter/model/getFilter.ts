import { StateSchema } from "../../../app/providers/StoreProvider";

export const getFilter = (state: StateSchema) => state.taskFilter.filter;
