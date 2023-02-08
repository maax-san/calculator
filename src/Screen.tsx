type ScreenProps = {
  value: number;
};

export const Screen = ({ value }: ScreenProps) => {
  return <div className="screen">{value}</div>;
};
