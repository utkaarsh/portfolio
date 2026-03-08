import React from "react";

const SkillComponent = ({
  skills = [],
  title,
}) => {
  return (
    // Changed w-11/12 to w-full for better mobile fitting
    <div className="w-full space-y-8 p-2 md:p-5 min-h-72 rounded-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase">
        {title ?? "Skills"}
      </h1>

      {/* Outer Grid: 
         - 1 column on mobile (grid-cols-1)
         - 2 columns on tablets (sm:grid-cols-2)
         - 3 columns on desktop (lg:grid-cols-3)
      */}
      <div className="grid  grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {skills.map((item, index) => {
          return (
            /* Inner Layout: Using flex instead of a nested 4-column grid 
               to let the text wrap naturally without pushing the page width. */
            <div key={index} className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-lg overflow-hidden p-2">
                <img
                  className="h-full w-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  src={item.skillIcon ?? "https://via.placeholder.com/50"}
                  alt={item.title}
                />
              </div>
              
              <div className="flex-1 min-w-0"> {/* min-w-0 is vital to let text truncate/wrap */}
                <h2 className="text-lg font-bold text-white truncate group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs font-medium text-[#998F8F] leading-tight">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillComponent;