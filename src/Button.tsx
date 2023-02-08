type ButtonProps = {
  name: string;
  wide?: boolean;
  type?: string;
};

export const Button = ({ name, wide, type }: ButtonProps) => {
  const className = ["btn", type, wide ? "wide" : ""].join(" ");

  return <button className={className}>{name}</button>;
};
