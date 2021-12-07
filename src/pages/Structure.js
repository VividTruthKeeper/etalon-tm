// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";

// IMPORT IMAGES
import StructureImg from "../img/structureImg.jpg";

const Structure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="structure">
      <Breadcrumb
        path_1="Структура Государственного эталонного центра"
        currentUrl="/structure"
      />
      <div className="container">
        <div className="structure-inner">
          <div className="tab-header">
            <h4 className="tab-header-text" id="tab-header-text">
              Структура Государственного эталонного центра
            </h4>
            <div className="tab-header-line"></div>
          </div>
          <div className="structure-main-page">
            <img src={StructureImg} alt="Structure" />
          </div>
          <div className="structure-employees">
            <table className="structure-table">
              <tbody>
                <tr className="table-head">
                  <th>
                    <span className="name-head">Фамилия, имя, отчество</span>
                  </th>
                  <th>
                    <span className="position-head">Занимаемая должность</span>
                  </th>
                  <th>
                    <span className="tel-head">Рабочий телефон</span>
                  </th>
                </tr>
                <tr>
                  <td>
                    <span className="name">
                      Реджепов Мейлис Байраммурадович
                    </span>
                  </td>
                  <td>
                    <span className="position">
                      Врем. исп. обязанности наальника
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421330</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">
                      Нурмаммедов Ахмет Мамметниязович
                    </span>
                  </td>
                  <td>
                    <span className="position">Заместитель начальника</span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421330</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Черкезов Бегенч</span>
                  </td>
                  <td>
                    <span className="position">Главный инженер</span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421330</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Союнова Айна</span>
                  </td>
                  <td>
                    <span className="position">
                      Начальник Отдела научно-методического, маркетинга и
                      изучения международной практики
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421990</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Худайбердыева Гульджахан</span>
                  </td>
                  <td>
                    <span className="position">Начальник Отдела кадров</span>
                  </td>
                  <td>
                    <span className="tel">Teл: 422088</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Атабаева Гульджахан</span>
                  </td>
                  <td>
                    <span className="position">
                      Начальник Финансово-экономического отдела-главный
                      бухгалтер
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 422429</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Овезов Гуванч</span>
                  </td>
                  <td>
                    <span className="position">
                      Начальник отдела Геометрических и механических величин
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421856</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Оразбердыев Кемалмухаммет</span>
                  </td>
                  <td>
                    <span className="position">
                      Начальник отдела Расхода и количества вещества
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 422007</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Ходжамгулыев Марлен</span>
                  </td>
                  <td>
                    <span className="position">
                      Начальник отдела Тепло-технических величин
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421520</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Мурадов Атамырат </span>
                  </td>
                  <td>
                    <span className="position">
                      И.о. начальника отдела Физико-химических и оптических
                      измерений
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421511</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Гельдыалиев Арслан</span>
                  </td>
                  <td>
                    <span className="position">
                      Начальник отдела Электрических и радиоэлектронных
                      измерений
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421281</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Махтумгулыев Перхат</span>
                  </td>
                  <td>
                    <span className="position">
                      Начальник отдела Электрических и радиоэлектронных
                      измерений
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 421281</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="name">Поладов Тиркишмырат</span>
                  </td>
                  <td>
                    <span className="position">
                      Отдел поверки газовых и водяных счетчиков в п.Бикрова
                    </span>
                  </td>
                  <td>
                    <span className="tel">Teл: 371360</span>
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

export default Structure;
