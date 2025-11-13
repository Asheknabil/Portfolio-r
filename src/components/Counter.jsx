

import React, { useEffect, useState } from "react";
import ci1 from "../assets/icons/ci-1.png";
import ci2 from "../assets/icons/ci-2.png";
import ci3 from "../assets/icons/ci-3.png";
import ci4 from "../assets/icons/ci-4.png";

const counters = [
  { id: 1, img: ci1, number: 13, text: "React Project", type: "" },
  { id: 2, img: ci2, number: 19, text: "JavaScript Project", type: "second" },
  { id: 3, img: ci3, number: 23, text: "Tailwind/Bootstrap Project", type: "third" },
  { id: 4, img: ci4, number: 62, text: "Completed Projects", type: "four" },
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
      {/* borders only lg */}
      <div
        className={`
          hidden lg:block absolute z-[-1] border-[#333]
          ${
            item.type === "second"
              ? "border-r border-b -left-[319px] -bottom-[62px]"
              : item.type === "third"
              ? "border-l border-t -left-[62px] -bottom-[320px]"
              : item.type === "four"
              ? "border-r border-b  -bottom-[370px] -right-[0px]"
              : "border-l border-t -left-[0px] -bottom-[9px]"
          }
          w-[636px] h-[636px]
        `}
      ></div>

      {/* inner content */}
      <div className="flex flex-col items-center justify-center transform lg:-rotate-45">
        <img src={item.img} alt="" className="w-[50px] h-[50px]" />
        <h2 className="text-[48px] lg:text-[60px] text-white font-bold mt-[18px] mb-[6px]">
          {count}
        </h2>
        <p className="text-white m-0">{item.text}</p>
      </div>
    </div>
  );
};

const Counter = () => {
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
};

export default Counter;
