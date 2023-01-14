import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import "./style.css";

const CheckboxIcon = () => (
  <img
    alt=""
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO2ZTU5DMQyEs+oxCmcphSPyczlKYfGkGSsqrCsFWQVkIXWRF15SpPmkbB2PPdlMUhJCiItmmqZrkk8A3gAcSZYlD4Dj112POeerpubN7A7Ax9JN87yYdzPbzp78yOYZROSc19UC3Dah0DPJTSlllRamlLIieUNyF0Q8VBdyHwYBm9QZnkR8C9hXF4gPtsfkz2zi52GnWqIP0yDY0oME/AHUBqg30ARlIcpCTVAWoizUBGUhykJNUBaiLNQEZSHKQk1QFqIsNM5C+O/BFoDXkdGimW2DgJfqAp7PBwE7L9gr3DWz21/h7n11If9c8Gj7AuL1w6x43fGpjxQB4OAp9azmwybWvkKPuDt+Me39ztmTF0KI1ItPtAzQPq/C5OkAAAAASUVORK5CYII="
  />
);

const CheckboxLabel = ({ label, imgSrc }) => (
  <div className="checkbox-label">
    <img src={imgSrc} alt="select-ad" width="40px" height="auto" />
    <div className="label">
      <p>Create</p> <b>{label}</b>
    </div>
  </div>
);

function CheckBox({ label, imgSrc, checked, onChange }) {
  return (
    <div className="checkbox-container">
      <FormControlLabel
        style={{ margin: "0px" }}
        control={
          <Checkbox
            classes={{ root: "checkbox-root" }}
            icon={<CheckboxIcon />}
            className="checkbox"
            checked={checked}
            onChange={onChange}
          />
        }
        label={<CheckboxLabel label={label} imgSrc={imgSrc} />}
      />
    </div>
  );
}

export default CheckBox;
