// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import rightArrow from "../../svg/rightArrow.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <ul className="footer-links">
              <li className="footer-link">
                <div className="footer-link-wrapper">
                  <h4 className="footer-link-title">О центре</h4>
                  <ul className="footer-link-inner">
                    <li>
                      <div className="footer-link-img">
                        <img src={rightArrow} alt="ARROW" />
                      </div>
                      <Link to="/etalons" className="footer-link-text">
                        Эталоны
                      </Link>
                    </li>
                    <li>
                      <div className="footer-link-img">
                        <img src={rightArrow} alt="ARROW" />
                      </div>
                      <Link to="/news" className="footer-link-text">
                        Новости
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="footer-link">
                <div className="footer-link-wrapper">
                  <h4 className="footer-link-title">Услуги</h4>
                  <ul className="footer-link-inner">
                    <li>
                      <div className="footer-link-img">
                        <img src={rightArrow} alt="ARROW" />
                      </div>
                      <Link to="/service" className="footer-link-text">
                        Информация
                      </Link>
                    </li>
                    <li>
                      <div className="footer-link-img">
                        <img src={rightArrow} alt="ARROW" />
                      </div>
                      <Link to="/prices" className="footer-link-text">
                        Стоимость
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="footer-link">
                <div className="footer-link-wrapper">
                  <h4 className="footer-link-title">Нормативная база</h4>
                  <ul className="footer-link-inner">
                    <li>
                      <div className="footer-link-img">
                        <img src={rightArrow} alt="ARROW" />
                      </div>
                      <Link to="/legislation" className="footer-link-text">
                        Законодательная база
                      </Link>
                    </li>
                    <li>
                      <div className="footer-link-img">
                        <img src={rightArrow} alt="ARROW" />
                      </div>
                      <Link
                        to="/measuring_register"
                        className="footer-link-text"
                      >
                        Государственный реестр средств измерений
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="footer-link">
                <div className="footer-link-wrapper">
                  <h4 className="footer-link-title">Контакты:</h4>
                  <ul className="footer-link-inner">
                    <li>
                      <h6 className="footer-link-text">Тел.: +993 12 422304</h6>
                    </li>
                    <li>
                      <h6 className="footer-link-text">
                        E-mail: dem-turkm@online.tm
                      </h6>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="footer-link">
                <div className="footer-link-wrapper">
                  <h4 className="footer-link-title">Наш адрес:</h4>
                  <ul className="footer-link-inner">
                    <li>
                      <h6 className="footer-link-text">
                        Туркменистан, г. Ашхабад
                      </h6>
                    </li>
                    <li>
                      <h6 className="footer-link-text">
                        ул.1953, д.76 (Молодежная)
                      </h6>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-middle">
            <a
              href="https://turkmenstandartlary.gov.tm/"
              className="footer-middle-link"
            >
              Главная государственная служба "Туркменстандартлары"
            </a>
          </div>
          <div className="footer-bottom">
            <h4>© 2019 Государственный эталонный центр</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
