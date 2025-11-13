import React, { useState } from "react";
import w1 from "../assets/work/work-11.png";
import w2 from "../assets/work/work-12.png";
import w3 from "../assets/work/work-13.png";
import w4 from "../assets/work/work-15.png";
import w5 from "../assets/work/work-14.png";
import w6 from "../assets/work/work-16.png";
import w7 from "../assets/work/work-17.png";

const works = [
  { id: 6, img: w6, type: "small", title: "Organic Food", tags: ["eCommerce", "Using JS"] },
  { id: 5, img: w5, type: "small", title: "VIP Auto Tires & Service", tags: ["eCommerce", "Using HTML_CSS"] },
  { id: 1, img: w1, type: "wide", title: "Educational Website", tags: ["eLearning", "Using React"] },
  { id: 3, img: w3, type: "small", title: "Dream 11 Creacket Team", tags: ["React Practice", "Using React"] },
  { id: 2, img: w2, type: "small", title: "VIP Auto Tires & Service", tags: ["eCommerce", "Using React"]},
  { id: 4, img: w4, type: "large", title: "VIP Auto Tires & Service", tags: ["eCommerce", "Using HTML_CSS"] },
  { id: 7, img: w7, type: "wide", title: "Food Website", tags: ["eCommerce", "Using JS"]},
  


];

const Work = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="bg-[#011627] py-8">
      <div className="max-w-[1450px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
        {works.map((item) => {
          let colSpan = "col-span-1";
          let rowHeight = "h-[311px] md:h-[200px] lg:h-[311px]";

          if (item.type === "wide") colSpan = "lg:col-span-2";
          if (item.type === "large") {
            colSpan = "lg:col-span-2";
            rowHeight = "h-[633px] md:h-[400px] lg:h-[633px]";
          }

          return (
            <div
              key={item.id}
              className={`relative overflow-hidden group cursor-pointer transition-all duration-500 ${colSpan} ${rowHeight}
              ${item.id === 7 ? "md:-translate-y-[200px] lg:-translate-y-[320px]" : ""}`}
              
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setSelectedImg(item.img)}
            >
              {item.title && (
                <div className="absolute bottom-[-50px] left-0 w-full h-[85px] bg-black/50 px-6 py-4 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-center">
                  <h4 className="text-white text-sm font-medium leading-none">{item.title}</h4>
                  <ul className="flex gap-3 text-gray-300 text-xs mt-1">
                    {item.tags.map((tag, index) => (
                      <li key={index} className="relative after:content-['/'] after:ml-2 last:after:hidden">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Full view"
            className="max-w-[90%] max-h-[85vh] rounded-lg shadow-lg transform scale-100 transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
    </section>
  );
};

export default Work;
