import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: React.FunctionComponent<Props> = (props) => {
  return <input className="px-10" {...props} />;
};

export default Input;
