import React from "react";
import PropTypes from "prop-types";

const UIbutton = React.forwardRef((props, ref) => {
  const { title, size } = props;
  return (
    <button className={`common-button ${size}`} ref={ref}>
      {title}
    </button>
  );
});

UIbutton.displayName = "UIbutton";

UIbutton.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "lg", "md", "xl"]),
};

export default UIbutton;
