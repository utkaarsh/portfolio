import { MdFiberManualRecord } from "react-icons/md";

export const getBullets = (text = "") =>
  typeof text === "string"
    ? text
        .split(".")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

export const renderBullets = (bullets = []) => {
  return bullets.map((sentence, i) => (
    <li key={i} className="flex items-start gap-2 text-[#998F8F]">
      <div className="w-3">
        <MdFiberManualRecord size={10} className="mt-2 text-white/60" />
      </div>
      <span className="text-base">{sentence}.</span>
    </li>
  ));
};

export const ImageIconComponent = ({ src }) => {
  return (
    <img
      src={src}
      alt="image-icon"
      className="w-full object-contain h-28 rounded-lg overflow-hidden  p-2"
    />
  );
};
