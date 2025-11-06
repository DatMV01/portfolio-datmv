import { IoCodeSlashOutline, IoCode } from "react-icons/io5";

const TextLogo = ({ className = "", iconSize = 18 }) => {
  return (
    <p
      className={`flex items-center justify-center gap-0.5 border-b text-xl ${className}`}
    >
      <IoCode size={iconSize} />
      <span>DatMai</span>
      <IoCodeSlashOutline size={iconSize} />
    </p>
  );
};

export default TextLogo;
