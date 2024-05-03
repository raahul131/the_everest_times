import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="">
      <h1 className="font-jacquard text-3xl sm:text-5xl text-center py-3">
        The Everest Times
      </h1>

      <Container label="hello" />
      <Container label="gello" />
    </div>
  );
};

export default Header;
