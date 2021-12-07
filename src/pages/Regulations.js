// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

// IMPORT IMAGES
import Loop from "../svg/loupe.svg";
import Next from "../svg/next.svg";
import Prev from "../svg/prev.svg";

const Regulations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="regulations">
      <Breadcrumb
        path_1="Реестр нормативной документации"
        currentUrl="/measuring_regulations"
      />
      <div className="container">
        <div className="regulations-inner">
          <div className="regulations-head">
            <div className="regulations-head-left">
              <form className="search-form">
                <input type="text" placeholder="Поиск" />
                <button type="button">
                  <div>
                    <img src={Loop} alt="Loop" />
                  </div>
                </button>
              </form>
            </div>
            <div className="regulations-head-right">
              <form className="btn-form">
                <button type="button" className="button-prev regulations-btn">
                  <div>
                    <img src={Prev} alt="Previous" />
                  </div>
                </button>
                <button type="button" className="button-right regulations-btn">
                  <div>
                    <img src={Next} alt="Next" />
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="regulations-content">
            <div className="structure-employees">
              <table className="regulations-table structure-table">
                <tbody>
                  <tr className="table-head">
                    <th className="n head">Т/ь</th>
                    <th className="number head">
                      Номер нормативной документации
                    </th>
                    <th className="replacedby head">Взамен НТД</th>
                    <th className="desc head">
                      Номер нормативной документации
                    </th>
                    <th className="date head">Дата введения</th>
                    <th className="limit head">Срок действия</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>GR 16162325-87 -2017</td>
                    <td>Взамен РД 52.04.234-89 </td>
                    <td>
                      Методические указания Измеритель высоты нижней границы
                      облаков. Методика поверки
                    </td>
                    <td>01.07.2017</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>GR 16162325-88-2017</td>
                    <td>Введен впервые</td>
                    <td>
                      Барометры ртутные метрологические. Методические указания
                      по проведению поверки
                    </td>
                    <td>01.12.2017</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>GR 16162325-89-2017</td>
                    <td>Взамен МИ-1908-88</td>
                    <td>
                      Психрометры аспирационные Методические указания по
                      проведению поверки
                    </td>
                    <td>01.02.2018</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>GR 16162325-91-2017</td>
                    <td>Введен впервые</td>
                    <td>
                      Барографы метеорлогические анероидные. Методические
                      указания по проведению поверки
                    </td>
                    <td>20.01.2018</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>GR 16162325-90-2017</td>
                    <td>Взамен RD-52.04244-89</td>
                    <td>
                      Анеморумбометр М-63М-1 Методические указания по проведению
                      поверки
                    </td>
                    <td>20.01.2018</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>GR 16162325-93-2017</td>
                    <td>Введен впервые</td>
                    <td>
                      Барометры мембранные метеорологические Методические
                      указания по проведению поверки
                    </td>
                    <td>01.05.2018</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>GR 16162325-94-2017</td>
                    <td>Введен впервые</td>
                    <td>
                      Барометры образцовые переносные типа БОП-1. Методические
                      указания по проведению поверки
                    </td>
                    <td>01.05.2018</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>TDS-5533-2013</td>
                    <td>ГОСТ 5533-2013</td>
                    <td>Стекло узорчатое. Технические условия.</td>
                    <td>31.05.2018</td>
                    <td>31.05.2023</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>TDS-32361-2013</td>
                    <td>ГОСТ 32361-2013</td>
                    <td>
                      Стекло и изделия из него. Пороки. Термины и определения
                    </td>
                    <td>31.05.2018</td>
                    <td>31.05.2023</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>TDS-32529-2013</td>
                    <td>ГОСТ 32529-2013</td>
                    <td>Стекло и изделия из него. Правила приемки</td>
                    <td>31.05.2018</td>
                    <td>31.05.2023</td>
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

export default Regulations;
