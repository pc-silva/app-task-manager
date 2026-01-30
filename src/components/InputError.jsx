import PropTypes from "prop-types";

export const InputError = ({ children }) => {
  return (
    <span className="text-brand-danger text-left text-xs">{children}</span>
  );
};

InputError.propTypes = {
  children: PropTypes.node.isRequired,
};
