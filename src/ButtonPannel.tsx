import { Children, PropsWithChildren } from "react";

type ButtonPannelProps = PropsWithChildren<{}>;

export const ButtonPannel = ({ children }: ButtonPannelProps) => (
  <div className="button-panel">
    {children}
  </div>
);
