import React from "react";

const Foglio = ({ aperta }: { aperta: boolean }) => {
  return (
    <div
      className={`absolute w-full h-full bg-white rounded-lg p-4 transform rotate-x-180 ${
        aperta ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center h-full flex-col">
        <p className="text-2xl font-bold text-black">Auguri!</p>
        <p className="text-lg font-bold text-black">
          Buona festa della donna 💐
        </p>
      </div>
    </div>
  );
};

export default Foglio;
