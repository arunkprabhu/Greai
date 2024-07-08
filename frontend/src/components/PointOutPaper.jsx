import PropTypes from "prop-types";
import "../styles/component/PointoutPper.scss";

const PointOutPaper = ({ children }) => {
  return (
    <div className="pointout-paper">
      <div className="pointer" />
      {children}
    </div>
  );
};

PointOutPaper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PointOutPaper;
