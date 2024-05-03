import React, { ReactNode } from "react";

type ContainerProps = {
  label: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ label }) => {
  return <button className="hover:underline">{label}</button>;
};

export default Container;
