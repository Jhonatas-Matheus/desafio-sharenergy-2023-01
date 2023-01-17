import React from "react";

type Props = {
  tailWindClass?: string;
  children: React.ReactNode;
};

const Container = ({
  children,
  tailWindClass = "justify-between flex flex-col items-center",
}: Props) => {
  return (
    <div
      className={`relative w-full mt-[80px] h-full  overflow-y-hidden ${tailWindClass}`}
    >
      {children}
    </div>
  );
};

export default Container;
