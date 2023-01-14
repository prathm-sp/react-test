import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckBox from "../../components/Checkbox";
import "./style.css";

function SelectAd() {
  const [activeCard, setActiveCard] = useState("");

  const onChangeTextAd = () => {
    setActiveCard("text");
  };

  const onChangeMediaAd = () => {
    setActiveCard("media");
  };

  return (
    <div className="select-ad-root">
      <div className="select-ad-container">
        <p>Create Ads</p>
        <div className="select-ad-sub-container">
          <CheckBox
            onChange={onChangeTextAd}
            checked={activeCard === "text"}
            label="Text Ad"
            imgSrc="text-ad.jpg"
          />
          <CheckBox
            onChange={onChangeMediaAd}
            checked={activeCard === "media"}
            label="Media Ad"
            imgSrc="media-ad.jpg"
          />
        </div>
        <Link to={`/create-ad?text-ad=${activeCard === "text"}`}>
          <Button className="next-button" variant="contained">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectAd;
