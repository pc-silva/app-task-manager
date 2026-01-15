export const TaskSeparator = ({ title, icon }) => {
  return (
    <div className="flex gap-1.5 border-b border-solid border-[#F4F4F5] pb-1.25 text-sm font-semibold text-[#9A9C9F]">
      {icon}
      {title}
    </div>
  );
};
