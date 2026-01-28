export const InputLabel = (props) => {
  return (
    <label
      className="text-brand-darkBlue text-sm font-semibold"
      htmlFor={props.id}
    >
      {props.children}
    </label>
  );
};
