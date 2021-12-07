// // IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

const MeasuringRegister = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="measuring-register">
      <Breadcrumb
        path_1="Государственный реестр средств измерений"
        currentUrl="/measuring_register"
      />
      <div className="container">
        <div className="measuring-register-inner">
          <div className="tab-header">
            <h4 className="tab-header-text" id="tab-header-text">
              Утвержденные типы средств измерений, внесенные в Госреестр СИ
              Туркменистана на 07/11/2019
            </h4>
            <div className="tab-header-line"></div>
          </div>
        </div>
        <div className="mr-content">
          <div className="mr-table">
            <table className="structure-table">
              <tbody>
                <tr className="table-head">
                  <th>
                    <span>№ серт.</span>
                  </th>
                  <th>
                    <span>№ Рос-реестра</span>
                  </th>
                  <th>
                    <span>Наименования и тип СИ</span>
                  </th>
                  <th>
                    <span>Изготовитель</span>
                  </th>
                  <th>
                    <span>Срок действия</span>
                  </th>
                </tr>
                <tr>
                  <td>
                    <span>0001</span>
                  </td>
                  <td>
                    <span>001-97</span>
                  </td>
                  <td>
                    <span>Многофункциональный счетчикэлектроэнергии АЛЬФА</span>
                  </td>
                  <td>
                    <span>CП «АВВ ВЭИ» Метроникаг. Москва</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0002</span>
                  </td>
                  <td>
                    <span>002-97</span>
                  </td>
                  <td>
                    <span>Весы электронные D1-10 D1-20 Avengen</span>
                  </td>
                  <td>
                    <span>“Teraoka” Weight system PTE г . Сингапур</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0003</span>
                  </td>
                  <td>
                    <span>003-98</span>
                  </td>
                  <td>
                    <span>Счетчики горячей и холодной PICOFLUX</span>
                  </td>
                  <td>
                    <span>Фирма ABB Kent Messteсhnik СmbhГермания</span>
                  </td>
                  <td>
                    <span>01.05.2002 г.</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0004</span>
                  </td>
                  <td>
                    <span>004-98</span>
                  </td>
                  <td>
                    <span>Счетчики горячей и холодной MAM, MNR,MPR, MT-R</span>
                  </td>
                  <td>
                    <span>Фирма ABB Kent Messteсhnik СmbhГермания</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasuringRegister;
