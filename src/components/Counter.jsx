import React, { useEffect, useState } from "react";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";

const counters = [
  { id: 1, icon: <FaReact className="w-12 h-12 text-[#011627]" />, number: 13, text: "React Project", type: "" },
  { id: 2, icon: <IoLogoJavascript className="w-12 h-12 text-[#011627]" />, number: 19, text: "JavaScript Project", type: "second" },
  { id: 3, icon: <DiJqueryLogo className="w-12 h-12 text-[#011627]" />, number: 23, text: "jQuery Project", type: "third" },
  { id: 4, icon: <TbBrandNextjs className="w-12 h-12 text-[#011627]" />, number: 6, text: "Next js Projects", type: "four" },
];

const CounterCard = ({ item }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = item.number;
    if (start === end) return;

    let duration = 1000;
    let incrementTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [item.number]);

  return (
    <div
      className={`
        relative flex items-center justify-center text-center bg-[#22577a]
        h-[230px] w-[230px] sm:h-[250px] sm:w-[250px] lg:h-[255px] lg:w-[255px]
        z-[1]
        lg:transform lg:rotate-45
        ${item.type === "second" || item.type === "four" ? "lg:mt-[-185px]" : ""}
      `}
    >
      <div className="flex flex-col items-center justify-center transform lg:-rotate-45">
        {item.icon}
        <h2 className="text-[48px] lg:text-[60px] text-white font-bold mt-[18px] mb-[6px]">
          {count}
        </h2>
        <p className="text-white m-0">{item.text}</p>
      </div>
    </div>
  );
};

export default function Counter() {
  return (
    <section className="bg-[#011627] lg:h-[840px] lg:pt-[380px] pt-24 overflow-hidden">
      <div className="px-6 lg:m-[160px] lg:mt-0 sm:px-12">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            justify-items-center
            gap-y-10 sm:gap-y-12 md:gap-y-16
            lg:gap-y-0 relative
          "
        >
          {counters.map((item) => (
            <CounterCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
