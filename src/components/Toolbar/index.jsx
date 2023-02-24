import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "./style.css";

const Toolbar = ({ showDropDown = false, value, onChange }) => {
  return (
    <div className="toolbar">
      <p className="toolbar-title">Ad Insights</p>
      <div className="toolbar-right-content">
        {showDropDown ? (
          <select value={value} onChange={onChange}>
            <option value="clicks">Clicks</option>
            <option value="cost">Cost</option>
            <option value="conversions">Conversions</option>
            <option value="revenue">Revenue</option>
          </select>
        ) : null}
        <HelpOutlineIcon color="disabled" />
      </div>
    </div>
  );
};

export default Toolbar;
