import PropTypes from "prop-types";

import { InputError } from "./InputError";
import { InputLabel } from "./InputLabel";

export const Input = ({ label, error, ...rest }) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="border-brand-lightGray placeholder:text-brand-textGray focus:ring-brand-primary rounded-lg border px-4 py-3 placeholder:text-sm focus:ring-2 focus:outline-none"
        type="text"
        {...rest}
      />
      {error && <InputError>{error}</InputError>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
};
