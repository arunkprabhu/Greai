import PropTypes from "prop-types";
import { EYE_ICON, EYE_LOCK_ICON } from "../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import { updateIsProgressOpen } from "../services/redux/slices/GreaiReducer";
import UIinput from "./common/UI/UIinput";

const Toolbar = () => {
  const dispatch = useDispatch();
  const { isProgressOpen } = useSelector((state) => state.greai);
  const onOpenProgressWindow = () => {
    dispatch(updateIsProgressOpen(!isProgressOpen));
  };
  return (
    <div className="toolbar">
      <div className="eye-icon-container" onClick={onOpenProgressWindow}>
        <img src={isProgressOpen ? EYE_LOCK_ICON : EYE_ICON} />
      </div>
      <div className="search-container">
        <div className="searchbox">
          <h5>
            <b>Ask me</b> - e.g: GreAI/ What the best way to looks like
            symphatic?
          </h5>
          <UIinput size={"xl"} placeholder={"GreAI/"} />
        </div>
      </div>
    </div>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
