// src/ProgressBar.js
import React from "react";
import "../styles/component/ProgressBar.scss";
import PropTypes from "prop-types";
import PointOutPaper from "./PointOutPaper";
import { Popover } from "antd";

const ProgressBar = ({ progressData }) => {
  const [activeId, setActiveId] = React.useState(0);
  const onHandleClick = (id) => {
    console.log("hi", id);
    setActiveId(id);
  };
  return (
    <div className="progress-bar">
      {progressData?.map(({ id, name, icon, label, activeIcon }) => (
        <>
          <div key={id} className="progress-bar-container">
            <Popover
              placement="bottomRight"
              content={<PointOutPaper />}
              trigger="click"
            >
              <div
                onClick={() => onHandleClick(id)}
                className={`progress-round ${activeId === id && "isAcitive"} `}
              >
                <div className="progress-icon">
                  <img alt={name} src={activeId === id ? activeIcon : icon} />
                </div>
                <span className="left-line" />
                <span className="right-line" />
                <div className="label-containaer">
                  <label>{label}</label>
                </div>
              </div>
            </Popover>
          </div>
        </>
      ))}
    </div>
  );
};

ProgressBar.propTypes = {
  progressData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProgressBar;
