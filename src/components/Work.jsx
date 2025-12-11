import React, { useState } from "react";
import w1 from "../assets/work/work-11.png";
import w2 from "../assets/work/work-12.png";
import w3 from "../assets/work/work-13.png";
import w4 from "../assets/work/work-15.png";
import w5 from "../assets/work/work-14.png";
import w6 from "../assets/work/work-16.png";
// import w7 from "../assets/work/work-17.png";

const works = [
  { id: 1, img: w1, title: "Educational Website", tags: ["eLearning", "Using Next js"], width: "100%", height: "550px", gapTop: "10px", gapBottom: "10px" },
  { id: 2, img: w2, title: "VIP Auto Tires & Service", tags: ["eCommerce", "Using React"], width: "100%", height: "550px", gapTop: "10px", gapBottom: "0px" },
  { id: 3, img: w3, title: "Dream 11 Creacket Team", tags: ["React Practice", "Using React"], width: "100%", height: "520px", gapTop: "10px", gapBottom: "10px" },
  { id: 4, img: w4, title: "VIP Auto Tires & Service", tags: ["eCommerce", "Using HTML_CSS"], width: "100%", height: "518px", gapTop: "-10px", gapBottom: "10px" },
  { id: 5, img: w5, title: "VIP Auto Tires & Service", tags: ["eCommerce", "Using HTML_CSS"], width: "100%", height: "300px", gapTop: "10px", gapBottom: "10px" },
  { id: 6, img: w6, title: "Organic Food", tags: ["eCommerce", "Using JS"], width: "100%", height: "300px", gapTop: "10px", gapBottom: "10px" },
  // { id: 7, img: w7, title: "Food Website", tags: ["eCommerce", "Using JS"], width: "100%", height: "300px", gapTop: "10px", gapBottom: "10px" },
];

const Work = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="bg-[#011627] py-8">
      <div className="max-w-[1450px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {works.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group cursor-pointer transition-all duration-500"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: item.width,
              height: item.height,
            }}
            onClick={() => setSelectedImg(item.img)}
          >
            {item.title && (
              <div className="absolute bottom-0 left-0 w-full bg-black/50 px-4 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-center">
                <h4 className="text-white text-sm font-medium leading-none">{item.title}</h4>
                <ul className="flex gap-2 text-gray-300 text-xs mt-1">
                  {item.tags.map((tag, index) => (
                    <li key={index} className="relative after:content-['/'] after:ml-1 last:after:hidden">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
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
