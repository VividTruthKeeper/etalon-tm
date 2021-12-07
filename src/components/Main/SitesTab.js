// IMPORT MODULES
import React from "react";

//    TAB_3
import RightArrow_2 from "../../svg/rightArrow_2.svg";
import HalkbankIMG from "../../img/halkbank.jpg";
import TdhIMG from "../../img/tdh.jpg";
import TurkmenTvIMG from "../../img/turkmenTv.jpg";
import AirportIMG from "../../img/airport.jpg";

const Sites = () => {
  return (
    <div className="depts-tab">
      <div className="tab-header sites-header">
        <h4 className="tab-header-text" id="tab-header-text">
          Полезные сайты
        </h4>
        <div className="tab-header-line"></div>
      </div>
      <div className="depts-wrapper sites-wrapper">
        <a href="https://halkbank.gov.tm/" className="dept site">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={HalkbankIMG} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom sites-bottom">
            <h4>АКБ "Халкбанк"</h4>
          </div>
        </a>
        <a href="https://tdh.gov.tm/" className="dept site">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={TdhIMG} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom sites-bottom">
            <h4>Государственное информационное агентство Туркменистана</h4>
          </div>
        </a>
        <a href="https://turkmentv.gov.tm/" className="dept site">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={TurkmenTvIMG} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom sites-bottom">
            <h4>Государственного комитета Туркменистана по телевидению,...</h4>
          </div>
        </a>
        <a href="https://ashgabatairport.gov.tm/" className="dept site">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={AirportIMG} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom sites-bottom">
            <h4>Международный аэропорт Ашхабад</h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sites;
