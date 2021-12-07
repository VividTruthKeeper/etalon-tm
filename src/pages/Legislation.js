// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

const Legislation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="legislation">
      <Breadcrumb path_1="Законодательная база" currentUrl="/legislation" />
      <div className="container">
        <div className="legislation-inner">
          <div className="tab-header">
            <h4 className="tab-header-text" id="tab-header-text">
              Законодательная база
            </h4>
            <div className="tab-header-line"></div>
          </div>
          <div className="law-card-wrapper">
            <div className="law-card">
              <p className="law-card-text">
                Утвержденный приказом Главной Государственной службы
                «Туркменстандартлары» 1/148 от 05.11.2015г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Порядка о проверке, калибровки и государственных
                метрологических испытаний средств измерений и стандартных
                образцов»
              </p>
            </div>
            <div className="law-card">
              <p className="law-card-text">
                Утвержденный приказом Главной Государственной службы
                «Туркменстандартлары» 1/153 от 16.11.2015г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Порядка проведения измерений и разработки
                методики проверки средств измерений и проведения испытаний»
              </p>
            </div>
            <div className="law-card">
              <p className="law-card-text">
                Утвержденный приказом Главной Государственной службы
                «Туркменстандартлары» 1/119 от 14.09.2015г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Порядка проведения измерений и разработки
                методики поверки средств измерений и проведения испытаний»
              </p>
            </div>
            <div className="law-card">
              <p className="law-card-text">
                Утвержденной приказом Главной Государственной службы
                «Туркменстандартлары» 1/60 от 27.03.2014г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Порядка сертификации продукции»
              </p>
            </div>
            <div className="law-card">
              <p className="law-card-text">
                Утвержденный приказом Главной Государственной службы
                «Туркменстандартлары» от 25.04.2013г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Перечня единиц величин, не входящих в
                международную систему, разрешенных к применению В Туркменистане»
              </p>
            </div>
            <div className="law-card">
              <p className="law-card-text">
                Постановление Президента от 01.02.2013г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Перечня единиц величин, разрешенных к применению
                в Туркменистане»
              </p>
            </div>
            <div className="law-card">
              <p className="law-card-text">
                Утвержденный приказом Главной Государственной службы
                «Туркменстандартлары» 1/108 от 13.08.2015г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Периода проверки и калибровки средств измерений,
                подлежащих калибровки и проверки.»
              </p>
            </div>
            <div className="law-card">
              <p className="law-card-text">
                Утвержденный приказом Главной Государственной службы
                «Туркменстандартлары» 1/231 от 25.11.2014г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Порядка проведения консервации резервуаров»
              </p>
            </div>
            <div className="law-card">
              <p className="law-card-text">
                Утвержденный приказом Главной Государственной службы
                «Туркменстандартлары» от 25.04.2013г.
              </p>
              <p className="law-card-bold">
                Об утверждении «Перечня единиц величин не входящих в
                международную систему разрешенных к применению В Туркменистане»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legislation;
