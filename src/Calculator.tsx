import { useState } from "react";
import { ButtonPannel } from "./ButtonPannel";
import { calculate, calculatorData } from "./calculate";
import { Screen } from "./Screen";

export const Calculator = () => {
  const [data, setData] = useState<calculatorData>({
    total: 42,
    next: null,
    operation: null,
  });

  const handleClick = (buttonValue: string) => {
    setData(calculate(data, buttonValue));
  };

  return (
    <div className="calculator">
      <Screen value={data.total ?? 0} />
      <ButtonPannel clickHandler={handleClick} />
    </div>
  );
};
