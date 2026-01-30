import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

export const SidebarButton = ({ children, color }) => {
  const sidebar = tv({
    base: "font-nunito flex items-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold",
    variants: {
      color: {
        unselected: "text-brand-darkBlue bg-transparent",
        selected: "text-brand-primary bg-brand-primary/10",
      },
    },
  });

  return (
    <a href="#" className={sidebar({ color })}>
      {children}
    </a>
  );
};

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["selected", "unselected"]).isRequired,
};
