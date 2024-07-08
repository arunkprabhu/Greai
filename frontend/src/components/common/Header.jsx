import "../../styles/component/header.scss";
import { LOGO } from "../../utils/Images";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <nav className="header">
      <div className="sub-header">
        <div className="logo-container">
          <img alt="logo" src={LOGO} />
        </div>
        <div>
          <MdMenu className="menu-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
