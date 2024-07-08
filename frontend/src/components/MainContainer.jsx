import React from "react";
import PropTypes from "prop-types";
import Header from "./common/Header";
import ContentPage from "../pages/ContentPage";
import Footer from "./common/Footer";

const MainContainer = (props) => {
  return (
    <div className="maincontainer">
      <Header />
      <ContentPage />
      <Footer />
    </div>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
