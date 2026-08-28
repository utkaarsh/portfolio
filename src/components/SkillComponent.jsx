import React from "react";

const SkillComponent = ({ skills = [], title = "Skills" }) => {
  return (
    <section className="w-full min-h-72 space-y-8 rounded-2xl p-2 md:p-5">
      <h1 className="text-4xl font-extrabold uppercase text-white md:text-5xl">
        {title}
      </h1>
      <div className="grid grid-cols-2 gap-8 md:gap-10 lg:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center rounded-lg bg-neutral-800 p-3"
          >
            <h2 className="text-center text-md  text-gray-300 transition-colors hover:text-yellow-400">
              {skill}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SkillComponent;
