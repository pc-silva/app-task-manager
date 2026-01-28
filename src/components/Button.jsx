export const Button = ({
  children,
  variant = "primary",
  className,
  size = "small",
  ...rest
}) => {
  function getVariantButton() {
    if (variant === "primary") {
      return "bg-brand-primary px-3 py-1 text-white";
    }
    if (variant === "secondary") {
      return "bg-brand-lightGray text-brand-darkBlue";
    }
    if (variant === "ghost") {
      return "bg-transparent px-3 py-1 text-brand-darkGray";
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
