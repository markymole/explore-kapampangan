import React from "react";

const Eyebrow = ({ text }: { text: string }) => {
  return (
    <div className="relative w-fit">
      {text && (
        <p className="relative z-10 font-poppins text-lg font-medium">{text}</p>
      )}
      {/* <div className="absolute bottom-0 z-0 h-1/2 w-full bg-mindaro"></div> */}
    </div>
  );
};

export default Eyebrow;
