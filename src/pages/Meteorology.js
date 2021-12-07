// // IMPORT MODULES
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

const Meteorology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="plans">
      <Breadcrumb
        path_1="Стоимость"
        link_1="/prices"
        path_2="Тарифы на проведение работ по метрологии 
        подразделениями 'Туркменстандартлары'"
        currentUrl={"/prices/meteorology"}
      />
      <div className="container">
        <div className="plans-inner">
          <div className="tab-header">
            <h4 className="tab-header-text" id="tab-header-text">
              Тарифы на проведение работ по метрологии подразделениями
              "Туркменстандартлары"
            </h4>
            <div className="tab-header-line"></div>
          </div>
          <div className="plans-content">
            <div className="plans-card-wrapper">
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Измерения геометрических величин</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Измерения механических величин</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Измерения давления и вакуума</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Измерения расхода уровня и объем...</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Физико - химические измерения</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Оптико - физические измерения</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Теплофизические и температурные...</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Измерения времени и частоты</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Радиоэлектронные измерения</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Измерения электрических и магнит...</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Метрологические услуги</h4>
              </Link>
              <Link to="/prices/meteorology/1" className="planscard">
                <h4>Калибровка резервуаров</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meteorology;
