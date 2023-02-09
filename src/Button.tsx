type ButtonProps = {
  value: string;
  wide?: boolean;
  type?: string;
  clickHandler: (value: string) => void;
};

export const Button = ({ value, wide, type, clickHandler }: ButtonProps) => {
  const className = ["btn", type, wide ? "wide" : ""].join(" ");

  return (
    <button className={className} onClick={() => clickHandler(value)}>
      {value}
    </button>
  );
};
