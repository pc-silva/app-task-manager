import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

export const Button = ({
  children,
  color = "primary",
  className,
  size = "small",
  ...rest
}) => {
  const button = tv({
    base: "font-poppins flex cursor-pointer justify-center items-center gap-1 rounded-[5px] transition-opacity hover:opacity-75",
    variants: {
      color: {
        primary: "bg-brand-primary px-3 py-1 text-white",
        secondary: "bg-brand-lightGray text-brand-darkBlue",
        tertiary: "bg-brand-danger text-brand-white",
        ghost: "bg-transparent px-3 py-1 text-brand-darkGray",
      },
      size: {
        large: "text-sm px-3 py-2 font-semibold",
        small: "text-xs px-3 py-1 font-semibold",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed hover:opacity-50",
      },
    },
  });

  return (
    <button
      className={button({ color, size, disabled: rest.disabled, className })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "ghost", "tertiary"]),
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};
