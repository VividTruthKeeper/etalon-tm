// IMPORT MODULES
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

//    TAB_1
import RightArrowBlue from "../svg/rightArrowBlue.svg";
import TabIMG1 from "../img/tabImg_1.jpg";
import TabIMG2 from "../img/tabImg_2.jpg";
import TabIMG3 from "../img/tabImg_3.jpg";
import PrevButton from "../svg/buttonPrev.svg";
import NextButton from "../svg/buttonNext.svg";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // STATE
  const [pageIndex, setPageIndex] = useState(1);
  return (
    <section className="news">
      <Breadcrumb path_1="Новости" currentUrl="./news" />;
      <div className="container">
        <div className="news-inner">
          <div className="news-tab">
            <div className="tab-header">
              <h4 className="tab-header-text" id="tab-header-text">
                Новости
              </h4>
              <div className="tab-header-line"></div>
            </div>
            <div className="tab-wrapper">
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG1} alt="Turkmen carpets" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">30.05.2021</span>
                  <h2 className="tab-name">
                    Состоялись мероприятия, приуроченные к Празднику
                    туркменского ковра
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/1">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG2} alt="Turkmen students" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">25.05.2021</span>
                  <h2 className="tab-name">
                    Состоялись мероприятия, приуроченные к Празднику
                    туркменского ковра
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/2">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG3} alt="Turkmen mothers" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">25.05.2021</span>
                  <h2 className="tab-name">
                    Родителям первых детей, рождённых в день юбилея Ашхабада,
                    вручены подарки...
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/3">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG1} alt="Turkmen carpets" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">30.05.2021</span>
                  <h2 className="tab-name">
                    Состоялись мероприятия, приуроченные к Празднику
                    туркменского ковра
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/4">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG2} alt="Turkmen students" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">25.05.2021</span>
                  <h2 className="tab-name">
                    Состоялись мероприятия, приуроченные к Празднику
                    туркменского ковра
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/5">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG3} alt="Turkmen mothers" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">25.05.2021</span>
                  <h2 className="tab-name">
                    Родителям первых детей, рождённых в день юбилея Ашхабада,
                    вручены подарки...
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/6">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG1} alt="Turkmen carpets" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">30.05.2021</span>
                  <h2 className="tab-name">
                    Состоялись мероприятия, приуроченные к Празднику
                    туркменского ковра
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/7">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG2} alt="Turkmen students" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">25.05.2021</span>
                  <h2 className="tab-name">
                    Состоялись мероприятия, приуроченные к Празднику
                    туркменского ковра
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/8">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="tab-top">
                  <div>
                    <img src={TabIMG3} alt="Turkmen mothers" />
                  </div>
                </div>
                <div className="tab-bottom">
                  <span className="tab-date">25.05.2021</span>
                  <h2 className="tab-name">
                    Родителям первых детей, рождённых в день юбилея Ашхабада,
                    вручены подарки...
                  </h2>
                  <div className="tab-header-link tab-link">
                    <Link to="/news/novelty/9">
                      <span>Подробнее</span>
                      <div>
                        <img src={RightArrowBlue} alt="RIGHTARROW" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-page-control">
          <button
            className="prev-button"
            type="button"
            onClick={() => {
              if (pageIndex !== 1) {
                setPageIndex(pageIndex - 1);
              }
            }}
          >
            <img src={PrevButton} alt="Back" />
          </button>
          <span className="page-index">{pageIndex}</span>
          <button
            className="next-button"
            type="button"
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}
          >
            <img src={NextButton} alt="Forward" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
