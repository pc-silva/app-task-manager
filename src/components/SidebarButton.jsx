export const SidebarButton = ({ children, variant }) => {
  function getVariantClass() {
    if (variant === "unselected") {
      return "text-brand-darkBlue bg-transparent";
    }
    if (variant === "selected") {
      return "text-brand-primary bg-brand-primary/10";
    }
  }

  return (
    <a
      href="#"
      className={`font-nunito flex items-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold ${getVariantClass()}`}
    >
      {children}
    </a>
  );
};
