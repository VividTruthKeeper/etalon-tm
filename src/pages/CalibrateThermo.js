// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

// IMPORT IMAGES
import Img from "../img/pricesImg_3-large.jpg";

const CalibrateThermo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="calibrate-thermo">
      <Breadcrumb
        path_1="Стоимость"
        path_2="Стоимость калибровки термометров сопротивления в калибровки в аккредитованной области"
        link_1="/prices"
        currentUrl="/prices/calibrate_thermo"
      />
      <div className="container">
        <div className="calibrate-thermo-inner">
          <div className="tab-header">
            <h4 className="tab-header-text" id="tab-header-text">
              Тарифы
            </h4>
            <div className="tab-header-line"></div>
          </div>
          <div className="calibrate-thermo-content">
            <div className="novelty-head">
              <div className="novelty-img">
                <img src={Img} alt="Calibration" />
              </div>
              <h4 className="novelty-title">
                Стоимость калибровки термометров сопротивления в калибровки в
                аккредитованной области
              </h4>
            </div>
            <div className="calibrate-thermo-table structure-employees">
              <table className="structure-table">
                <tbody>
                  <tr className="table-head">
                    <th>
                      <span className="name-head number-head">T№</span>
                    </th>
                    <th>
                      <span className="position-head description-head">
                        Наименование услуг
                      </span>
                    </th>
                    <th>
                      <span className="tel-head price-head">
                        Стоимость в манатах
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <span className="name number">1</span>
                    </td>
                    <td>
                      <span className="position description">
                        Проведение калибровки термометра сопротивления в
                        реперной точке -38,830C
                      </span>
                    </td>
                    <td>
                      <span className="tel price">506,00 TMT</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="name number">2</span>
                    </td>
                    <td>
                      <span className="position description">
                        Проведение калибровки термометра сопротивления в
                        реперной точке 0,010C
                      </span>
                    </td>
                    <td>
                      <span className="tel price">236,00 TMT</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="name number">3</span>
                    </td>
                    <td>
                      <span className="position description">
                        Проведение калибровки термометра сопротивления в
                        реперной точке 29,760C
                      </span>
                    </td>
                    <td>
                      <span className="tel price">236,00 TMT</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="name number">4</span>
                    </td>
                    <td>
                      <span className="position description">
                        Подготовка эталонного оборудования для проведения
                        калибровки
                      </span>
                    </td>
                    <td>
                      <span className="tel price">828,00 TMT</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalibrateThermo;
