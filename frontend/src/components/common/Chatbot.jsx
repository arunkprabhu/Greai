import React from "react";
import PropTypes from "prop-types";
import { FaRobot } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Chatbot = ({ chatData }) => {
  return (
    <div style={{ width: "95%", marginInline: "auto", paddingBlock: 10 }}>
      {chatData?.map(({ id, message, isUser }) => {
        return (
          <div
            key={id}
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              marginBlock: 20,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                background: "#00b0f0",
                borderRadius: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 0.2,
                fontSize: 20,
                color: "#ffffff",
              }}
            >
              {isUser ? <CgProfile /> : <FaRobot />}
            </div>
            {message?.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    background: "#f3f3f2",
                    flex: 0.8,
                    height: 40,
                    marginLeft: 5,
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    padding: 10,
                    color: "grey",
                  }}
                >
                  <h6>{item}</h6>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

Chatbot.propTypes = {
  chatData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Chatbot;
