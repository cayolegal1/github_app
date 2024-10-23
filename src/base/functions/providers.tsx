import React, { ElementType, FC } from "react";

type ComponentWithProps = [ElementType, object?];
type ComponentWithChildren = {
  children: JSX.Element;
};

export const buildProvidersTree = (
  componentWithProps: ComponentWithProps[] = [],
) => {
  const initialComponent: FC<ComponentWithChildren> = ({ children }) => (
    <>{children}</>
  );
  return componentWithProps.reduce(
    (
      AccumulatedComponents,
      [Provider, props = {}],
    ): FC<ComponentWithChildren> => {
      const MergedProvider: FC<ComponentWithChildren> = ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
      return MergedProvider;
    },
    initialComponent,
  );
};
