import PropTypes from "prop-types";

import { InputError } from "./InputError.jsx";
import { InputLabel } from "./InputLabel.jsx";

export const TimeSelect = (props) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>

      <select
        {...props}
        id="time"
        className="border-brand-lightGray placeholder:text-brand-textGray focus:ring-brand-primary rounded-lg border px-4 py-3 placeholder:text-sm focus:ring-2 focus:outline-none"
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
      {props.error && <InputError>{props.error}</InputError>}
    </div>
  );
};

TimeSelect.propTypes = {
  error: PropTypes.string,
};
