import React, { useState } from "react";
import { getBullets, renderBullets } from "../utils/helper";
import { GoArrowUpRight } from "react-icons/go";

const PresentationList = ({
  title = "Title for Projects",
  data = [],
}) => {
  const words = title.split(" ");
  const firstLine = words[0];
  const secondLine = words.slice(1).join(" ");
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="w-full md:w-11/12 min-h-72 rounded-2xl space-y-6 p-2 md:p-5">
      {/* Title */}
      <div className="leading-none px-2">
        <div className="text-white text-3xl md:text-5xl font-semibold uppercase">
          {firstLine}
        </div>
        {secondLine && (
          <div
            className="text-3xl md:text-5xl font-semibold uppercase"
            style={{ color: "#353334" }}
          >
            {secondLine}
          </div>
        )}
      </div>

      {/* Main Work Description */}
      <div className="space-y-5">
        {data &&
          data.map((item, index) => {
            return (
              /* FIX: Changed grid-cols-5 to grid-cols-1 on mobile.
                 This ensures the image and text stack vertically until the screen is wide enough.
              */
              <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 hover:bg-[#262626] p-4 rounded-2xl transition-colors">
                
                {/* Image Container */}
                <div className="md:col-span-1 h-32 md:h-28 overflow-hidden w-full flex  items-center">
                  <img
                    className="w-full max-w-[120px] md:max-w-full object-contain h-28 rounded-lg bg-neutral-900 p-3"
                    src={item.icon ?? "https://via.placeholder.com/150"}
                    alt={item.title}
                  />
                </div>

                {/* Content Container */}
                <div className="md:col-span-4 w-full space-y-3 px-0 md:px-3 pb-5 pt-2">
                  <a
                    href={item.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-start sm:items-center group justify-between w-full gap-2"
                  >
                    <div className="space-y-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {item.title}
                      </h2>
                      <h3 className="text-xl italic font-bold text-white/80">
                        {item.designation ?? ""}
                      </h3>
                    </div>
                    
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                      <GoArrowUpRight
                        size={20}
                        className="text-[#FFC107] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                      <div className="text-sm text-gray-400">
                        {item.startDate ?? ""}
                        {item.endDate && ` - ${item.endDate}`}
                      </div>
                    </div>
                  </a>

                  <div className="text-white/70 text-sm">
                    {(() => {
                      const bullets = getBullets(item.description ?? "");
                      const isExpanded = expandedIndex === index;
                      const visibleBullets = isExpanded ? bullets : bullets.slice(0, 2);

                      return (
                        <>
                          <ul className="space-y-1 list-disc pl-4">
                            {renderBullets(visibleBullets)}
                          </ul>
                          {bullets.length > 2 && (
                            <button
                              onClick={() => setExpandedIndex(isExpanded ? null : index)}
                              className="mt-2 text-white underline underline-offset-2 hover:text-yellow-400 transition-colors"
                            >
                              {isExpanded ? "Read less" : "Read more"}
                            </button>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PresentationList;