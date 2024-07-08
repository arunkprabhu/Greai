// src/ProgressBar.js
import React from "react";
import "../styles/component/ProgressBar.scss";
import PropTypes from "prop-types";
import PointOutPaper from "./PointOutPaper";
import { EYE_ICON, EYE_LOCK_ICON, PROFILE_WHITE } from "../utils/Images";
import Chatbot from "./common/Chatbot";
import { chatData } from "../services/data/progressData";
import UIbutton from "./common/UI/UIbutton";
import { useDispatch, useSelector } from "react-redux";
import { updateTranscriptionDetailOpen } from "../services/redux/slices/GreaiReducer";
import Rating from "./common/Rating";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const ProgressBar = ({ progressData }) => {
  const dispatch = useDispatch();
  const { isTranscriptionDetailOpen } = useSelector((state) => state.greai);
  const [activeId, setActiveId] = React.useState(0);
  const [opinion, setOpinion] = React.useState({
    like: true,
    dislike: false,
  });

  // used to set the active step
  const onHandleClick = (id) => {
    console.log("hi", id);
    setActiveId(id);
  };

  // used to open and close the transcription details
  const onShowTranscriptionDetails = () => {
    dispatch(updateTranscriptionDetailOpen(!isTranscriptionDetailOpen));
  };
  // used to open and close the transcription details
  const handleLike = (type) => {
    if (type === "like") {
      setOpinion({
        like: true,
        dislike: false,
      });
    } else if (type === "dislike") {
      setOpinion({
        like: false,
        dislike: true,
      });
    }
  };
  return (
    <div className="progress-bar">
      {progressData?.map(({ id, name, icon, label, activeIcon, loading }) => (
        <>
          <div key={id} className="progress-bar-container">
            <div
              onClick={() => onHandleClick(id)}
              className={`progress-round ${activeId === id && "isAcitive"} ${
                loading && "loading"
              } `}
            >
              {activeId === id && (
                <div
                  style={{
                    position: "absolute",
                    zIndex: 50000,
                    bottom: -11,
                    left: 30,
                  }}
                >
                  <IoCheckmarkDoneCircleSharp
                    style={{ stroke: "white", color: "#43cd09", fontSize: 25 }}
                  />
                </div>
              )}
              <div className="progress-icon">
                <img alt={name} src={activeId === id ? activeIcon : icon} />
              </div>
              <span className={`left-line ${loading && "loading"}`} />
              <span className={`right-line  ${loading && "loading"}`} />
              <div className="label-containaer">
                <label>{label}</label>
              </div>
              {activeId === id && (
                <PointOutPaper>
                  <div className="wrapper">
                    <div className="subContainer">
                      <div className="fluid" id="scroll">
                        <div className="detail-container">
                          <h5>Resume of transaction</h5>
                          <p className="paragraph">
                            The customer said his{" "}
                            <b
                              style={{
                                color: "blue",
                                textDecoration: "underline",
                                fontWeight: 800,
                                marginRight: 2,
                              }}
                            >
                              signal was lost this afternoon
                            </b>
                            and request as support through technical visit. He
                            confirmed that{" "}
                            <b
                              style={{
                                color: "blue",
                                textDecoration: "underline",
                                fontWeight: 800,
                                marginRight: 2,
                              }}
                            >
                              {" "}
                              made all steps to reset the equioment
                            </b>
                            but the problem keep happening,Was suggest to wait
                            some couple hours to restore the signal into the
                            area,but the customer was impatient
                          </p>
                          <div className="checkbox-container">
                            <input defaultChecked type="checkbox" />
                            <label>Click to shift to</label>
                          </div>
                        </div>
                        <div className="transcription-container">
                          <div className="transcription">
                            <h5>Transcription detailed</h5>
                            <img
                              onClick={onShowTranscriptionDetails}
                              alt="eye"
                              src={
                                !isTranscriptionDetailOpen
                                  ? EYE_LOCK_ICON
                                  : EYE_ICON
                              }
                            />
                          </div>
                          <h6>
                            Click to{" "}
                            {isTranscriptionDetailOpen ? "close" : "open"}
                          </h6>
                        </div>
                        {isTranscriptionDetailOpen && (
                          <div className="transcription-sub">
                            <div className="chat-container">
                              <Chatbot chatData={chatData} />
                            </div>
                            <div className="option-container">
                              <UIbutton
                                size={"sm"}
                                title={"1. Technical problem"}
                              />
                              <UIbutton
                                size={"sm"}
                                title={"1. Change your plan"}
                              />
                              <UIbutton
                                size={"sm"}
                                title={"1. Change your plan"}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="client-container">
                        <div className="rating-container">
                          <h5>Client's emotion</h5>
                          <div
                            style={{
                              display: "flex",
                              height: 50,
                              justifyContent: "center",
                            }}
                          >
                            <Rating />
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div className="client-icon">
                              <img alt="profile" src={PROFILE_WHITE} />
                            </div>
                            <h5 style={{ marginLeft: "10px", color: "black" }}>
                              Augusta Coimbre
                            </h5>
                          </div>
                        </div>
                        <div className="feedback-container">
                          <div>
                            <h5 style={{ color: "gray" }}>Tips from GreAi</h5>
                            <p
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#00000098",
                                padding: 10,
                              }}
                            >
                              show confidence; <br /> Maybe telling him that you
                              will resolve the issue soon woud be good.
                            </p>
                            <div style={{ fontSize: 20, marginLeft: 10 }}>
                              <MdThumbUp
                                onClick={() => handleLike("like")}
                                style={{
                                  marginInline: 5,
                                  color: opinion.like ? "#379bdd" : "#cccccc",
                                }}
                              />
                              <MdThumbDown
                                onClick={() => handleLike("dislike")}
                                style={{
                                  marginInline: 5,
                                  color: opinion.dislike
                                    ? "#379bdd"
                                    : "#cccccc",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PointOutPaper>
              )}
            </div>
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
