// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

//    TAB_1
import RightArrowBlue from "../../svg/rightArrowBlue.svg";
import TabIMG1 from "../../img/tabImg_1.jpg";
import TabIMG2 from "../../img/tabImg_2.jpg";
import TabIMG3 from "../../img/tabImg_3.jpg";

const NewsMain = () => {
  return (
    <div className="news-tab">
      <div className="tab-header">
        <h4 className="tab-header-text" id="tab-header-text">
          Новости
        </h4>
        <div className="tab-header-line"></div>
        <div className="tab-header-link">
          <Link to="/news">
            <span>Все новости</span>
            <div>
              <img src={RightArrowBlue} alt="RIGHTARROW" />
            </div>
          </Link>
        </div>
      </div>
      <div className="tab-wrapper">
        <div className="tab">
          <div className="tab-top">
            <div>
              <img src={TabIMG1} alt="Turkmen carpets" />
            </div>
          </div>
          <div className="tab-bottom">
            <span className="tab-date">30.05.2021</span>
            <h2 className="tab-name">
              Состоялись мероприятия, приуроченные к Празднику туркменского
              ковра
            </h2>
            <div className="tab-header-link tab-link">
              <Link to="/news/novelty">
                <span>Подробнее</span>
                <div>
                  <img src={RightArrowBlue} alt="RIGHTARROW" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="tab">
          <div className="tab-top">
            <div>
              <img src={TabIMG2} alt="Turkmen students" />
            </div>
          </div>
          <div className="tab-bottom">
            <span className="tab-date">25.05.2021</span>
            <h2 className="tab-name">
              Состоялись мероприятия, приуроченные к Празднику туркменского
              ковра
            </h2>
            <div className="tab-header-link tab-link">
              <Link to="/news/novelty">
                <span>Подробнее</span>
                <div>
                  <img src={RightArrowBlue} alt="RIGHTARROW" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="tab">
          <div className="tab-top">
            <div>
              <img src={TabIMG3} alt="Turkmen mothers" />
            </div>
          </div>
          <div className="tab-bottom">
            <span className="tab-date">25.05.2021</span>
            <h2 className="tab-name">
              Родителям первых детей, рождённых в день юбилея Ашхабада, вручены
              подарки...
            </h2>
            <div className="tab-header-link tab-link">
              <Link to="/news/novelty">
                <span>Подробнее</span>
                <div>
                  <img src={RightArrowBlue} alt="RIGHTARROW" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
