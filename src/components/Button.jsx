export const Button = ({
  children,
  variant = "primary",
  className,
  size = "small",
  ...rest
}) => {
  function getVariantButton() {
    if (variant === "primary") {
      return "bg-[#00ADB5] px-3 py-1 text-white";
    }
    if (variant === "secondary") {
      return "bg-[#EEEEEE] text-[#35383E]";
    }
    if (variant === "ghost") {
      return "bg-transparent px-3 py-1 text-[#818181]";
    }
  }

  function getSizeButton() {
    if (size === "medium") {
      return "text-sm px-3 py-2 font-semibold";
    }
    return;
  }

  return (
    <button
      className={`font-poppins flex cursor-pointer justify-center gap-1 rounded-[5px] transition-opacity hover:opacity-75 ${getVariantButton()} ${getSizeButton()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
