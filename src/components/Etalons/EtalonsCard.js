// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import RightArrow_2 from "../../svg/rightArrow_2.svg";

const EtalonsCard = (cardData) => {
  return (
    <Link to={cardData.link} className="dept">
      <div className="dept-top">
        <div className="dept-absolute">
          <img src={RightArrow_2} alt="ARROW" />
        </div>
        <div className="dept-img">
          <img src={cardData.img} alt="MEASUREMENT" />
        </div>
      </div>
      <div className="dept-bottom">
        <h4>{cardData.title}</h4>
      </div>
    </Link>
  );
};

export default EtalonsCard;
