import { useState } from "react";
import { ButtonPannel } from "./ButtonPannel";
import { calculate, calculateButtons, calculatorData } from "./calculate";
import { Screen } from "./Screen";
import { Button } from "./Button";

export const Calculator = () => {
  const [data, setData] = useState<calculatorData>({
    total: 0,
    next: null,
    operation: null,
  });

  let screenValue = data.next ? data.next : data.total ? data.total : 0;

  const handleClick = (buttonValue: string) => {
    setData(calculate(data, buttonValue));
  };

  return (
    <div className="calculator">
      <Screen value={screenValue} />
      <ButtonPannel>
        {calculateButtons?.map((button) => (
          <Button
            key={button.id}
            type={button.type}
            clickHandler={(value) => handleClick(value)}
            value={button.value}
            wide={button.value === "0"}
          />
        ))}
      </ButtonPannel>
    </div>
  );
};
