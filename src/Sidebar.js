import { Add } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Azat Seyrek</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
          <div className="sidebar__channelsHeader">
              <div className="sidebar__header">
              <ExpandMoreIcon />
              <h4>Text Channels</h4>
              </div>

              <Add className='sidebar__addChannel'/>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
