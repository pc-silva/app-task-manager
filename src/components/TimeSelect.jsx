import { InputLabel } from "./InputLabel.jsx";

export const TimeSelect = (props) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>

      <select
        {...props}
        id="time"
        className="rounded-lg border border-[#ECECEC] px-4 py-3 placeholder:text-sm placeholder:text-[#9A9C9F] focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
      {props.error && (
        <span className="text-left text-xs text-red-500">{props.error}</span>
      )}
    </div>
  );
};
