import { Button } from "./Button";

export const ButtonPannel = () => {
  return (
    <div className="button-panel">
      <div>
        <Button type="function" name="AC" />
        <Button type="function" name="+/-" />
        <Button type="function" name="%" />
        <Button type="operator" name="÷" />
      </div>
      <div>
        <Button type="digit" name="7" />
        <Button type="digit" name="8" />
        <Button type="digit" name="9" />
        <Button type="operator" name="x" />
      </div>
      <div>
        <Button type="digit" name="4" />
        <Button type="digit" name="5" />
        <Button type="digit" name="6" />
        <Button type="operator" name="-" />
      </div>
      <div>
        <Button type="digit" name="1" />
        <Button type="digit" name="2" />
        <Button type="digit" name="3" />
        <Button type="operator" name="+" />
      </div>
      <div>
        <Button type="digit" wide={true} name="0" />
        <Button type="digit" name="," />
        <Button type="operator" name="=" />
      </div>
    </div>
  );
};
