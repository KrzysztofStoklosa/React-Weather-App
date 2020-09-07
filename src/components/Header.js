import React from "react";
import "../scss/Header.scss";
import { Checkbox } from "semantic-ui-react";
const Header = (props) => {
  return (
    <div className="header">
      <div className="header__text">
        <h1>React Weather</h1>
      </div>
      <div className="heder__icon">
        <Checkbox toggle checked={props.switch} onChange={props.switchChange} />
      </div>
    </div>
  );
};

export default Header;
