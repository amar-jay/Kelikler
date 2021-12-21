import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="default" className="header__icon" />
      </IconButton>

      <h1
        className="header__heading">
          Kelimler 
        </h1>
      
      <IconButton>
        <ForumIcon fontSize="default" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
