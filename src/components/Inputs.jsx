import { InputLabel } from "./InputLabel";

export const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-[#ECECEC] px-4 py-3 placeholder:text-sm placeholder:text-[#9A9C9F] focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
        type="text"
        {...rest}
      />
    </div>
  );
};
