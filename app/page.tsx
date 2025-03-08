"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Cuori {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
}

export default function Home() {
  const [aperta, setAperta] = useState(false);
  const [cuori, setCuori] = useState<Cuori[]>([]);
  const searchParams = useSearchParams();
  const destinatario = searchParams.get("destinatario");
  const mittente = searchParams.get("mittente");

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
    <div className="flex flex-col gap-y-3 justify-center items-center h-screen relative bg-fuchsia-200">
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
    </div>
  );
}
