import type { IconButtonProps } from "../helper/types";

function IconButton({ onClick, icon, alt }: IconButtonProps) {
  return (
    <button
      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A80] border border-[#FFFFFF66] text-white cursor-pointer"
      onClick={onClick}
      type="button"
    >
      <img src={icon} alt={alt} className="w-5 h-5" />
    </button>
  );
}

export default IconButton;
