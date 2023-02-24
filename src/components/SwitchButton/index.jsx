import React from "react";
import "./style.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";

function SwitchButton({ pieChartView, onClick }) {
  return (
    <div className="sb-button" onClick={onClick}>
      <div className={`${pieChartView ? "activeIcon" : ""} chart-icon`}>
        <DonutLargeIcon />
      </div>
      <div className={`${!pieChartView ? "activeIcon" : ""} table-icon`}>
        <TableChartOutlinedIcon />
      </div>
    </div>
  );
}

export default SwitchButton;
