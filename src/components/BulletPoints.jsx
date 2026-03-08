// components/BulletPoints.jsx
import React from "react";

const BulletPoints = ({ title, points = [] }) => {
  if (!points.length) return null;

  return (
  <div>
       {title && (
        <h3 className="text-xl font-bold mb-3 text-white/80  uppercase">
          {title}
        </h3>
      )}
      <ul className="list-disc pl-2 space-y-2 text-sm text-[#998F8F]">
      {points.map((point, index) => (
        <li key={index} className="leading-relaxed">
          {point}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default BulletPoints;
