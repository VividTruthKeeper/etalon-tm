// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";
import EtalonsCard from "../components/Etalons/EtalonsCard";

// IMPORT IMAGES
import Img_1 from "../img/pricesImg_1.jpg";
import Img_2 from "../img/pricesImg_2.jpg";
import Img_3 from "../img/pricesImg_3.jpg";

const Prices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="prices">
      <Breadcrumb path_1="Стоимость" currentUrl="/prices" />
      <div className="container">
        <div className="tab-header">
          <h4 className="tab-header-text" id="tab-header-text">
            Стоимость
          </h4>
          <div className="tab-header-line"></div>
        </div>
        <div className="price-content">
          <div className="depts-wrapper">
            <EtalonsCard
              key={1}
              img={Img_1}
              title="Тарифы на проведение работ по метрологии подразделениями..."
              link="../prices/meteorology"
            />
            <EtalonsCard
              key={2}
              img={Img_2}
              title="Тарифы на проведение проверки или калибровки средств..."
              link="../prices/calibrate_instruments"
            />
            <EtalonsCard
              key={3}
              img={Img_3}
              title="Стоимость калибровки термометров сопротивления в калибровки в..."
              link="../prices/calibrate_thermo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
