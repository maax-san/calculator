import { Button } from "./Button";
import { calculateButtons } from "./calculate";

type ButtonPannelProps = {
  clickHandler: (value: string) => void;
};

export const ButtonPannel = ({ clickHandler }: ButtonPannelProps) => (
  <div className="button-panel">
    {calculateButtons?.map((button) => (
      <Button
        key={button.id}
        type={button.type}
        clickHandler={(value) => clickHandler(value)}
        value={button.value}
        wide={button.value === "0"}
      />
    ))}
  </div>
);
