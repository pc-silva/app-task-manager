export const TaskSeparator = ({ title, icon }) => {
  return (
    <div className="border-brand-lightGray text-brand-textGray flex gap-1.5 border-b border-solid pb-1.25 text-sm font-semibold">
      {icon}
      {title}
    </div>
  );
};
