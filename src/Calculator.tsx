import { useState } from "react";
import { ButtonPannel } from "./ButtonPannel";
import { Screen } from "./Screen";

export const Calculator = () => {
  const [value, setValue] = useState(0);
  const [operation, setOperation] = useState(null);

  return (
    <div className="calculator">
      <Screen value={value} />
      <ButtonPannel />
    </div>
  );
};
