export const Button = ({ children, variant }) => {
  function getVariantButton() {
    if (variant === "primary") {
      return "bg-[#00ADB5] px-3 py-1 text-white";
    }
    return "bg-transparent px-3 py-1 text-[#818181]";
  }

  return (
    <button
      className={`flex cursor-pointer gap-1 rounded-[5px] transition-opacity hover:opacity-75 ${getVariantButton()}`}
    >
      {children}
    </button>
  );
};
