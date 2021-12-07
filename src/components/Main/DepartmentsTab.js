// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

//    TAB_2
import RightArrow_2 from "../../svg/rightArrow_2.svg";
import SecondTabIMG_1 from "../../img/tabImgSecond_1.jpg";
import SecondTabIMG_2 from "../../img/tabImgSecond_2.jpg";
import SecondTabIMG_3 from "../../img/tabImgSecond_3.jpg";
import SecondTabIMG_4 from "../../img/tabImgSecond_4.jpg";
import SecondTabIMG_5 from "../../img/tabImgSecond_5.jpg";
import SecondTabIMG_6 from "../../img/tabImgSecond_6.jpg";

const DepartmentsMain = () => {
  return (
    <div className="depts-tab">
      <div className="tab-header">
        <h4 className="tab-header-text" id="tab-header-text">
          Отделы
        </h4>
        <div className="tab-header-line"></div>
      </div>
      <div className="depts-wrapper">
        <Link to="/department_geometric" className="dept">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={SecondTabIMG_1} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom">
            <h4>Отдел измерений геометрических и механических величин</h4>
          </div>
        </Link>
        <Link to="/department_heat" className="dept">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={SecondTabIMG_2} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom">
            <h4>Отдел измерения теплотехнических величин</h4>
          </div>
        </Link>
        <Link to="/department_volume" className="dept">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={SecondTabIMG_3} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom">
            <h4>Отдел по измерению объема и расхода веществ</h4>
          </div>
        </Link>
        <Link to="/department_physics" className="dept">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={SecondTabIMG_4} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom">
            <h4>Отдел физико-химических и оптических измерений </h4>
          </div>
        </Link>
        <Link to="/department_electricity" className="dept">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={SecondTabIMG_5} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom">
            <h4>Отдел электрических и радиоэлектронных измерений </h4>
          </div>
        </Link>
        <Link to="department_maintenance" className="dept">
          <div className="dept-top">
            <div className="dept-absolute">
              <img src={RightArrow_2} alt="ARROW" />
            </div>
            <div className="dept-img">
              <img src={SecondTabIMG_6} alt="MEASUREMENT" />
            </div>
          </div>
          <div className="dept-bottom">
            <h4>Отдел технического обслуживания средств измерения</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentsMain;
