// IMPORT MODULES
import React, { useEffect, useRef } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

// IMPORT IMAGES
import Print from "../svg/print.svg";
import Img1 from "../img/serviceRequest_1.jpg";
import Img2 from "../img/serviceRequest_2.jpg";
import Img3 from "../img/serviceRequest_3.jpg";
import Img4 from "../img/serviceRequest_4.jpg";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // DEFINE IMAGE SOURCES
  const img_1 = useRef();
  const img_2 = useRef();
  const img_3 = useRef();
  const img_4 = useRef();

  return (
    <section className="service">
      <Breadcrumb path_1="Информация об услугах" currentUrl="/service" />
      <div className="container">
        <div className="service-inner">
          <div className="tab-header">
            <h4 className="tab-header-text" id="tab-header-text">
              Сведения об услугах проводимых Государственным эталонным центром
            </h4>
            <div className="tab-header-line"></div>
          </div>
          <div className="service-content">
            <div className="structure-employees">
              <table className="regulations-table structure-table">
                <tbody>
                  <tr className="table-head">
                    <th className="n head">№ пп</th>
                    <th className="number head">Вид деятельности</th>
                    <th className="replacedby head">
                      Документы необходимые для проведения работ
                    </th>
                    <th className="desc head">
                      Порядок, в соответствии с которым проводиться деятельность
                    </th>
                    <th className="date head">Стоимость работ</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Калибровка средств измерений</td>
                    <td>
                      Заявка на проведение работ Техническая документация на
                      средство измерения Сертификат последней калибровки
                      средства измерения Документ об оплате
                    </td>
                    <td>
                      «Порядок проведения Государственных метрологических
                      испытаний, государственной поверки, калибровки и поверки
                      стандартных образцов средств измерений» Утвержденный
                      приказом Главной государственной службы
                      «Туркменстадартлары» № 1/148 от 5 ноября 2015 года
                    </td>
                    <td>
                      Тарифы проводимых работ по метрологии подразделениями
                      Главной государственной службы «Туркменстадартлары»
                      Утвержденные 15 марта 2018 года
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Поверка средств измерений</td>
                    <td>
                      Заявка на проведение работ Техническая документация на
                      средство измерения Документ об оплате
                    </td>
                    <td>
                      «Порядок проведения Государственных метрологических
                      испытаний, государственной поверки, калибровки и поверки
                      стандартных образцов средств измерений» Утвержденный
                      приказом Главной государственной службы
                      “Туркменстандартлары” № 1/148 от 5 ноября 2015 года
                    </td>
                    <td>
                      Тарифы проводимых работ по метрологии подразделениями
                      Главной государственной службы "Туркменстандартлары"
                      Утвержденные 03 марта 2018 года
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Государственные метрологические испытания средств
                      измерений с целью внесения в Государственный Реестр
                      Туркменистана
                    </td>
                    <td>
                      Заявка на проведение работ Техническая документация на
                      средство измерения Документ об оплате
                    </td>
                    <td>
                      «Порядок проведения Государственных метрологических
                      испытаний, государственной поверки, калибровки и поверки
                      стандартных образцов средств измерений» Утвержденный
                      приказом Главной государственной службы
                      “Туркменстандартлары” № 1/148 от 5 ноября 2015 года
                    </td>
                    <td>
                      Тарифы проводимых работ по метрологии подразделениями
                      Главной государственной службы "Туркменстандартлары"
                      Утвержденные 03 марта 2018 года
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Сертификационные испытания средств измерений</td>
                    <td>
                      Акт отбора образцов Техническая документация на средство
                      измерения Документ об оплате
                    </td>
                    <td>
                      «Порядок сертификации продукции» Утвержденный приказом
                      Главной государственной службы “Туркменстандартлары” №
                      1/60 от 27 марта 2014 года
                    </td>
                    <td>
                      Тарифы проводимых работ по метрологии подразделениями
                      Главной государственной службы "Туркменстандартлары"
                      Утвержденные 03 марта 2018 года
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      Метрологические услуги: (Проведение испытаний средств
                      измерений и стандартных образцов и утверждения их типа)
                    </td>
                    <td>
                      Заявка на проведение работ Техническая документация на
                      средство измерения Документ об оплате
                    </td>
                    <td>
                      «Порядок проведения испытаний стандартных образцов и
                      средств измерений и утверждения их типа» Утвержденный
                      приказом Главной государственной службы
                      «Туркменстадартлары» № 1/119 от 14 сентября 2015 года
                    </td>
                    <td>
                      «Тарифы проводимых работ по метрологии подразделениями
                      Главной государственной службы "Туркменстандартлары»
                      Утвержденные 03 марта 2018 года
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Ремонт средств измерений</td>
                    <td>
                      Заявка на проведение работ Техническая документация на
                      средство измерения Документ об оплате
                    </td>
                    <td>В соответствии с выявленной неисправностью</td>
                    <td>
                      «Тарифы на проведение работ по ремонту средств измерений и
                      механизмов отделом ремонта средств измерений
                      Государственного эталонного центра» Утверждены 11 июня
                      2018 года
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      Разработка нормативной документации группой Технического
                      комитета по метрологи TK TM 02
                    </td>
                    <td>
                      Заявка на разработку документа Техническое задание
                      Документ об оплате
                    </td>
                    <td>
                      “Порядок создания национальных технических комитетов
                      Туркменистана по стандартизации и организации их работы”
                      Утвержденный приказом Главной государственной службы
                      “Туркменстандартлары” № 1/1 от 04.01.2016г. и
                      зарегистрированным в Министерстве Адалат Туркменистана №
                      944 14.01.2016 года
                    </td>
                    <td>
                      Стоимость разработки нормативного документа определяеться
                      по фактическим затратам
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="service-bottom">
            <div className="tab-header">
              <h4 className="tab-header-text" id="tab-header-text">
                Виды заявок
              </h4>
              <div className="tab-header-line"></div>
            </div>
            <div className="service-cards-wrapper">
              <div
                className="service-card"
                onClick={() => {
                  window.open(img_1.current.src);
                }}
              >
                <div className="service-abs">
                  <div>
                    <img src={Print} alt="Print" />
                  </div>
                </div>
                <div className="service-card-top">
                  <div className="service-img-wrapper">
                    <img src={Img1} alt="Request1" ref={img_1} />
                  </div>
                </div>
                <div className="service-card-bottom">
                  <h4 className="service-card-title">Заявка на поверку</h4>
                </div>
              </div>
              <div
                className="service-card"
                onClick={() => {
                  window.open(img_2.current.src);
                }}
              >
                <div className="service-abs">
                  <div>
                    <img src={Print} alt="Print" />
                  </div>
                </div>
                <div className="service-card-top">
                  <div className="service-img-wrapper">
                    <img src={Img2} alt="Request2" ref={img_2} />
                  </div>
                </div>
                <div className="service-card-bottom">
                  <h4 className="service-card-title">Заявка на поверку</h4>
                </div>
              </div>
              <div
                className="service-card"
                onClick={() => {
                  window.open(img_3.current.src);
                }}
              >
                <div className="service-abs">
                  <div>
                    <img src={Print} alt="Print" />
                  </div>
                </div>
                <div className="service-card-top">
                  <div className="service-img-wrapper">
                    <img src={Img3} alt="Request3" ref={img_3} />
                  </div>
                </div>
                <div className="service-card-bottom">
                  <h4 className="service-card-title">Заявка на поверку</h4>
                </div>
              </div>
              <div
                className="service-card"
                onClick={() => {
                  window.open(img_4.current.src);
                }}
              >
                <div className="service-abs">
                  <div>
                    <img src={Print} alt="Print" />
                  </div>
                </div>
                <div className="service-card-top">
                  <div className="service-img-wrapper">
                    <img src={Img4} alt="Request4" ref={img_4} />
                  </div>
                </div>
                <div className="service-card-bottom">
                  <h4 className="service-card-title">Заявка на поверку</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
