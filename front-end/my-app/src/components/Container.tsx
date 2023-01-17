import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="relative overflow-y-hidden justify-between flex flex-col items-center w-[100%] mt-[80px] h-full  ">
      {children}
    </div>
  );
};

export default Container;
