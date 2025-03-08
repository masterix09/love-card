"use client";
import React, { useEffect, useState } from "react";
import Foglio from "./Foglio";

interface Cuori {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
}

const Card = ({
  destinatario,
  mittente,
}: {
  destinatario: string;
  mittente: string;
}) => {
  const [aperta, setAperta] = useState(false);
  const [cuori, setCuori] = useState<Cuori[]>([]);

  const toggleAperta = () => {
    setAperta(!aperta);
    if (!aperta) {
      generaCuori();
    } else {
      setCuori([]);
    }
  };

  const generaCuori = () => {
    const nuoviCuori = [];
    for (let i = 0; i < 20; i++) {
      nuoviCuori.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        opacity: Math.random(),
      });
    }
    setCuori(nuoviCuori);
  };

  useEffect(() => {
    if (aperta) {
      generaCuori();
    }
  }, [aperta]);

  return (
    <>
      <div
        className={`relative w-80 h-52 bg-violet-300 rounded-lg shadow-md transition-transform duration-500 transform ${
          aperta ? "rotate-x-180" : ""
        } cursor-pointer z-10`}
        onClick={toggleAperta}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="p-4">
            <p className="absolute bottom-4 right-4 text-sm font-medium text-black">
              Mittente: {mittente ?? "Andrea"}
            </p>
            <p className="absolute bottom-4 left-4 text-sm font-medium text-black">
              Destinatario: {destinatario ?? "Mamma"}
            </p>
          </div>
        </div>
        <Foglio aperta={aperta} />
      </div>
      {aperta &&
        cuori.map((cuore) => (
          <div
            key={cuore.id}
            className="absolute text-red-500 animate-pulse"
            style={{
              top: `${cuore.top}%`,
              left: `${cuore.left}%`,
              fontSize: `${cuore.size}px`,
              opacity: cuore.opacity,
            }}
          >
            ❤️
          </div>
        ))}
      {!aperta && (
        <p className="text-black font-semibold">👆🏼Clicca sulla cartolina👆🏼</p>
      )}
    </>
  );
};

export default Card;
