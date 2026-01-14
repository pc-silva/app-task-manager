export const SidebarButton = ({ children, variant }) => {
  function getVariantClass() {
    if (variant === "unselected") {
      return "text-[#35383E] bg-transparent";
    }
    if (variant === "selected") {
      return "text-[#00ADB5] bg-[#E6F7F8]";
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
