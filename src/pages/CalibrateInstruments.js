// IMPORT MODULES
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

const CalibrateInstruments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="calibrate-inst">
      <Breadcrumb
        path_1="Стоимость"
        path_2="Тарифы на проведение проверки или калибровки средств измерений"
        link_1="/prices"
        currentUrl="/prices/calibrate_instruments"
      />
      <div className="container">
        <div className="calibrate-inst-inner">
          <div className="tab-header">
            <h4 className="tab-header-text" id="tab-header-text">
              Тарифы на проведение проверки или калибровки средств измерений
            </h4>
            <div className="tab-header-line"></div>
          </div>
          <div className="plans-content">
            <div className="plans-card-wrapper">
              <Link to="/prices/calibrate_instruments/1" className="planscard">
                <h4>Измерения геометрических величин</h4>
              </Link>
              <Link to="/prices/calibrate_instruments/2" className="planscard">
                <h4>Измерения механических величин</h4>
              </Link>
              <Link to="/prices/calibrate_instruments/3" className="planscard">
                <h4>Измерения давления и вакуума</h4>
              </Link>
              <Link to="/prices/calibrate_instruments/4" className="planscard">
                <h4>Измерения уровня расхода, воды и...</h4>
              </Link>
              <Link to="/prices/calibrate_instruments/5" className="planscard">
                <h4>Измерения физико-химических и оп...</h4>
              </Link>
              <Link to="/prices/calibrate_instruments/6" className="planscard">
                <h4>Тепло-физичекие и температурные...</h4>
              </Link>
              <Link to="/prices/calibrate_instruments/7" className="planscard">
                <h4>Измерение времени и частоты</h4>
              </Link>
              <Link to="/prices/calibrate_instruments/8" className="planscard">
                <h4>Измерения электрических и магнит...</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalibrateInstruments;
