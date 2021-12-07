// IMPORT MODULES
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import MainLogo from "../../svg/mainLogo.svg";
import Emblem from "../../svg/emblemLogo.svg";
import downArrow from "../../svg/downArrow.svg";
import flagOfRussia from "../../svg/flagOfRussia.svg";
import flagOfUK from "../../svg/flagOfUK.svg";
import flagOfTkm from "../../svg/flagOfTkm.svg";

const Nav = () => {
  // REF
  const navBtn = useRef();
  const mobileNavExpanded = useRef();
  const stripe_1 = useRef();
  const stripe_2 = useRef();
  const stripe_3 = useRef();
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="nav-left">
            <div className="main-logo">
              <img src={MainLogo} alt="LOGO" />
            </div>
            <div className="emblem">
              <img src={Emblem} alt="Emblem" />
            </div>
          </Link>
          <div className="nav-right">
            <ul className="nav-link">
              <li className="nav-link">
                <Link to="/news">Новости</Link>
              </li>
              <li className="nav-link">
                <Link to="/etalons">Эталоны</Link>
              </li>
              <li className="nav-link nav-select">
                <div className="nav-dropdown">
                  <ul className="nav-dropdown-content">
                    <li className="dropdown-content">
                      <Link to="/service">Информация об услугах</Link>
                    </li>
                    <li className="dropdown-content">
                      <Link to="/prices">Стоимость</Link>
                    </li>
                  </ul>
                </div>
                <h3>Услуги</h3>
                <img
                  className="nav-downarrow"
                  src={downArrow}
                  alt="DOWNARROW"
                />
              </li>
              <li className="nav-link nav-select">
                <div className="nav-dropdown">
                  <ul className="nav-dropdown-content">
                    <li className="dropdown-content">
                      <Link to="/legislation">Законодательная база</Link>
                    </li>
                  </ul>
                </div>
                <h3>Нормативная база</h3>
                <img
                  className="nav-downarrow"
                  src={downArrow}
                  alt="DOWNARROW"
                />
              </li>
              <li className="nav-link nav-select">
                <div className="nav-dropdown">
                  <ul className="nav-dropdown-content">
                    <li className="dropdown-content">
                      <Link to="/measuring_register">
                        Гос. реестр средств измерений
                      </Link>
                    </li>
                    <li className="dropdown-content">
                      <Link to="/measuring_regulations">
                        Реестр нормативной документации
                      </Link>
                    </li>
                  </ul>
                </div>
                <h3>Реестры</h3>
                <img
                  className="nav-downarrow"
                  src={downArrow}
                  alt="DOWNARROW"
                />
              </li>
              <li className="nav-link nav-select">
                <div className="nav-dropdown">
                  <ul className="nav-dropdown-content">
                    <li className="dropdown-content">
                      <Link to="/history">История центра</Link>
                    </li>
                    <li className="dropdown-content">
                      <Link to="/structure">Структура центра</Link>
                    </li>
                  </ul>
                </div>
                <h3>О центре</h3>
                <img
                  className="nav-downarrow"
                  src={downArrow}
                  alt="DOWNARROW"
                />
              </li>
              <li className="nav-link nav-select nav-lang">
                <div className="nav-dropdown nav-dropdown-shifted">
                  <ul className="nav-dropdown-content">
                    <li className="dropdown-content">
                      <h4>Русский</h4>
                      <div className="flag-wrapper">
                        <img src={flagOfRussia} alt="RUSSIAN" />
                      </div>
                    </li>
                    <li className="dropdown-content">
                      <h4>Türkmençe</h4>
                      <div className="flag-wrapper">
                        <img src={flagOfTkm} alt="TURKMEN" />
                      </div>
                    </li>
                    <li className="dropdown-content">
                      <h4>English</h4>
                      <div className="flag-wrapper">
                        <img src={flagOfUK} alt="ENGLISH" />
                      </div>
                    </li>
                  </ul>
                </div>
                <img src={flagOfRussia} alt="DOWNARROW" />
              </li>
            </ul>
            <div className="nav-links-mobile-button">
              <button
                type="button"
                className="mobile-button"
                onClick={(e) => {
                  mobileNavExpanded.current.classList.toggle("active");
                  stripe_1.current.classList.toggle("active");
                  stripe_2.current.classList.toggle("active");
                  stripe_3.current.classList.toggle("active");
                }}
                ref={navBtn}
              >
                <div className="stripe-wrapper">
                  <div className="stripe stripe-1" ref={stripe_1}></div>
                  <div className="stripe stripe-2" ref={stripe_2}></div>
                  <div className="stripe stripe-3" ref={stripe_3}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="nav-mobile" ref={mobileNavExpanded}>
          <ul className="nav-mobile-links">
            <li
              className="nav-mobile-link"
              onClick={() => {
                mobileNavExpanded.current.classList.remove("active");
                stripe_1.current.classList.remove("active");
                stripe_2.current.classList.remove("active");
                stripe_3.current.classList.remove("active");
              }}
            >
              <Link to="/news">Новости</Link>
            </li>
            <li
              className="nav-mobile-link"
              onClick={() => {
                mobileNavExpanded.current.classList.remove("active");
                stripe_1.current.classList.remove("active");
                stripe_2.current.classList.remove("active");
                stripe_3.current.classList.remove("active");
              }}
            >
              <Link to="/etalons">Эталоны</Link>
            </li>
            <li className="nav-mobile-link">
              <div className="nav-mobile-link-content">
                <h3>Услуги</h3>
                <div>
                  <img
                    src={downArrow}
                    alt="downArrow"
                    className="nav-mobile-downarrow"
                  />
                </div>
              </div>
              <div
                className="nav-mobile-link-dropdown"
                onClick={() => {
                  mobileNavExpanded.current.classList.remove("active");
                  stripe_1.current.classList.remove("active");
                  stripe_2.current.classList.remove("active");
                  stripe_3.current.classList.remove("active");
                }}
              >
                <ul>
                  <li className="mobile-dropdown-link">
                    <Link to="/service">Информация об услугах</Link>
                  </li>
                  <li className="mobile-dropdown-link">
                    <Link to="/prices">Стоимость</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mobile-link">
              <div className="nav-mobile-link-content">
                <h3>Нормативная база</h3>
                <div>
                  <img
                    src={downArrow}
                    alt="downArrow"
                    className="nav-mobile-downarrow"
                  />
                </div>
              </div>
              <div
                className="nav-mobile-link-dropdown"
                onClick={() => {
                  mobileNavExpanded.current.classList.remove("active");
                  stripe_1.current.classList.remove("active");
                  stripe_2.current.classList.remove("active");
                  stripe_3.current.classList.remove("active");
                }}
              >
                <ul>
                  <li className="mobile-dropdown-link">
                    <Link to="/legislation">Законодательная база</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mobile-link">
              <div className="nav-mobile-link-content">
                <h3>Реестры</h3>
                <div>
                  <img
                    src={downArrow}
                    alt="downArrow"
                    className="nav-mobile-downarrow"
                  />
                </div>
              </div>
              <div
                className="nav-mobile-link-dropdown"
                onClick={() => {
                  mobileNavExpanded.current.classList.remove("active");
                  stripe_1.current.classList.remove("active");
                  stripe_2.current.classList.remove("active");
                  stripe_3.current.classList.remove("active");
                }}
              >
                <ul>
                  <li className="mobile-dropdown-link">
                    <Link to="/measuring_register">
                      Гос. реестр средств измерений
                    </Link>
                  </li>
                  <li className="mobile-dropdown-link">
                    <Link to="/measuring_regulations">
                      Реестр нормативной документации
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mobile-link">
              <div className="nav-mobile-link-content">
                <h3>О центре</h3>
                <div>
                  <img
                    src={downArrow}
                    alt="downArrow"
                    className="nav-mobile-downarrow"
                  />
                </div>
              </div>
              <div
                className="nav-mobile-link-dropdown"
                onClick={() => {
                  mobileNavExpanded.current.classList.remove("active");
                  stripe_1.current.classList.remove("active");
                  stripe_2.current.classList.remove("active");
                  stripe_3.current.classList.remove("active");
                }}
              >
                <ul>
                  <li className="mobile-dropdown-link">
                    <Link to="/history">История центра</Link>
                  </li>
                  <li className="mobile-dropdown-link">
                    <Link to="/structure">Структура центра</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mobile-link">
              <div className="nav-mobile-link-content">
                <div className="flag">
                  <img src={flagOfRussia} alt="downArrow" />
                </div>
              </div>
              <div
                className="nav-mobile-link-dropdown"
                onClick={() => {
                  mobileNavExpanded.current.classList.remove("active");
                  stripe_1.current.classList.remove("active");
                  stripe_2.current.classList.remove("active");
                  stripe_3.current.classList.remove("active");
                }}
              >
                <ul>
                  <li className="mobile-dropdown-link flag-container">
                    <div className="flag">
                      <img src={flagOfRussia} alt="Russian" />
                    </div>
                    <h3>Russian</h3>
                  </li>
                  <li className="mobile-dropdown-link flag-container">
                    <div className="flag">
                      <img src={flagOfUK} alt="English" />
                    </div>
                    <h3>English</h3>
                  </li>
                  <li className="mobile-dropdown-link flag-container">
                    <div className="flag">
                      <img src={flagOfTkm} alt="Türkmençe" />
                    </div>
                    <h3>Türkmençe</h3>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
