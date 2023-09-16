import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { DeepPartial } from "@reduxjs/toolkit";
import "../../../../app/styles/index.scss";
import {
  StateSchema,
  StoreProvider,
} from "../../../../app/providers/StoreProvider";
export interface componentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
}

interface TestProviderProps {
  options?: componentRenderOptions;
  children: ReactNode;
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;
  const { initialState } = options;

  return (
    <StoreProvider initialState={initialState}>
      <div className={"app"}>{children}</div>
    </StoreProvider>
  );
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
