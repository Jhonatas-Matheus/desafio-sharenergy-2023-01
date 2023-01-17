import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="relative flex items-center justify-center w-[100%] pt-[80px] h-[100%] ">
      {children}
    </div>
  );
};

export default Container;
