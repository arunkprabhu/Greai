import "../styles/component/content.scss";
import ProgressBar from "../components/ProgressBar";
import { progressData } from "../services/data/progressData";
import Toolbar from "../components/Toolbar";
import { useSelector } from "react-redux";

const ContentPage = () => {
  const { isProgressOpen } = useSelector((state) => state.greai);
  return (
    <div className="content">
      <div className="sub-content">
        <Toolbar />
        {!isProgressOpen && <ProgressBar progressData={progressData} />}
      </div>
    </div>
  );
};

ContentPage.propTypes = {};

export default ContentPage;
