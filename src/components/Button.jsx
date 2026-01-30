import { tv } from "tailwind-variants";

export const Button = ({
  children,
  color = "primary",
  className,
  size = "small",
  ...rest
}) => {
  const button = tv({
    base: "font-poppins flex cursor-pointer justify-center gap-1 rounded-[5px] transition-opacity hover:opacity-75",
    variants: {
      color: {
        primary: "bg-brand-primary px-3 py-1 text-white",
        secondary: "bg-brand-lightGray text-brand-darkBlue",
        ghost: "bg-transparent px-3 py-1 text-brand-darkGray",
      },
      size: {
        large: "text-sm px-3 py-2 font-semibold",
        small: "text-xs px-3 py-1 font-semibold",
      },
    },
  });

  return (
    <button className={button({ color, size, className })} {...rest}>
      {children}
    </button>
  );
};
