import React from "react";
import PropTypes from "prop-types";

const UIinput = React.forwardRef((props, ref) => {
  const { placeholder, value, name, size } = props;
  return (
    <input
      className={`common-input ${size}`}
      placeholder={placeholder}
      name={name}
      value={value}
      ref={ref}
    />
  );
});

UIinput.displayName = "UIinput";

UIinput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "lg", "md", "xl"]),
};

export default UIinput;
