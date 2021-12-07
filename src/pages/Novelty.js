// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

// IMPORT IMAGES
import NoveltyIMG from "../img/noveltyImg.jpg";

const Novelty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="novelty">
      <Breadcrumb
        path_1="Новости"
        link_1="/news"
        path_2="Очередная видеовстреча с зарубежными партнёрами"
        currentUrl="../news/novelty"
      />
      <div className="container">
        <div className="novelty-inner">
          <div className="novelty-head">
            <div className="novelty-img">
              <img src={NoveltyIMG} alt="Novelty" />
            </div>
            <h4 className="novelty-title">
              Очередная видеовстреча с зарубежными партнёрами
            </h4>
          </div>
          <div className="novelty-text">
            <span>
              <span className="pgraph">
                Поддержка женского предпринимательства, обеспечение гендерного
                баланса и создание равных условий труда стали главной темой
                обсуждения Международного онлайн-форума «Расширение
                экономических прав и возможностей женщин для устойчивого
                развития в Центральной Азии и Афганистане», организованного
                сегодня Олий Мажлисом Республики Узбекистан и Программой
                развития ООН.
              </span>
              <span className="pgraph">
                В многосторонней встрече, проходящей под эгидой Диалога
                женщин-лидеров Центральной Азии, с туркменской стороны приняли
                участие председатель Меджлиса Милли Генгеша и представители
                Союза промышленников и предпринимателей.
              </span>
              <span className="pgraph">
                Начало форума предварил видеообзор выставки продукции
                женщин-предпринимателей Центральной Азии, проведённой в столице
                каждой из стран-участниц.
              </span>
              <span className="pgraph">
                Выражая поддержку усилиям правительств государств региона в
                вопросах обеспечения гендерного равенства и повышения роли
                женщин в достижении Целей устойчивого развития, участники
                видеоконференции подчеркнули необходимость более полной
                реализации предпринимательского потенциала женщин, дальнейшего
                совершенствования законодательной базы и экономической политики
                в целях расширения их присутствия на рынке труда и активного
                продвижения в государственном и частном секторах.
              </span>
              <span className="pgraph">
                В рамках форума была согласована и принята «Дорожная карта» по
                развитию сотрудничества в сфере устойчивого развития между
                женщинами-предпринимателями Центральной Азии и Афганистана, а
                также принят Итоговый документ – Сов­местное заявление, в
                котором участники форума выразили уверенность, что практическая
                реализация запланированных мероприятий будет способствовать
                развитию женского предпринимательства, дальнейшему укреплению
                взаимовыгодного сотрудничества и делового партнёрства между
                женщинами-предпринимателями региона.
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Novelty;