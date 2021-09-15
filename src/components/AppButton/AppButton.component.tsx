import React from "react";

interface Props {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppButton = (props: Props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default AppButton;
