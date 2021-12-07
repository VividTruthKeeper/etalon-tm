// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Global/Breadcrumb";
import EtalonsCard from "../components/Etalons/EtalonsCard";

// IMPORT IMAGES
import Img_1 from "../img/etalonsImg_1.jpg";
import Img_2 from "../img/etalonsImg_2.jpg";
import Img_3 from "../img/etalonsImg_3.jpg";
import Img_4 from "../img/etalonsImg_4.jpg";
import Img_5 from "../img/etalonsImg_5.jpg";
import Img_6 from "../img/etalonsImg_6.jpg";
import Img_7 from "../img/etalonsImg_7.jpg";
import Img_8 from "../img/etalonsImg_8.jpg";
import Img_9 from "../img/etalonsImg_9.jpg";
import Img_10 from "../img/etalonsImg_10.jpg";
import Img_11 from "../img/etalonsImg_11.jpg";
import Img_12 from "../img/etalonsImg_12.jpg";
import Img_13 from "../img/etalonsImg_13.jpg";
import Img_14 from "../img/etalonsImg_14.jpg";
import Img_15 from "../img/etalonsImg_15.jpg";
import Img_16 from "../img/etalonsImg_16.jpg";
import Img_17 from "../img/etalonsImg_17.jpg";

const Etalons = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="etalons">
      <Breadcrumb path_1="Государственные эталоны" currentUrl="../etalons" />
      <div className="container">
        <div className="etalons-inner">
          <div className="tab-header">
            <h4 className="tab-header-text" id="tab-header-text">
              Государственные эталоны
            </h4>
            <div className="tab-header-line"></div>
          </div>
          <div className="depts-wrapper">
            <EtalonsCard
              key={1}
              img={Img_1}
              title="Государственный эталон единицы массы"
              link="../etalons/1"
            />
            <EtalonsCard
              key={2}
              img={Img_2}
              title="Государственный эталон единицы длины в диапазоне..."
              link="../etalons/2"
            />
            <EtalonsCard
              key={3}
              img={Img_3}
              title="Государственный эталон единицы силы"
              link="../etalons/3"
            />
            <EtalonsCard
              key={4}
              img={Img_4}
              title="Государственный эталон единицы давления"
              link="../etalons/4"
            />
            <EtalonsCard
              key={5}
              img={Img_5}
              title="Государственный эталон единицы температуры"
              link="../etalons/5"
            />
            <EtalonsCard
              key={6}
              img={Img_6}
              title="Государственный эталон единицы влажности"
              link="../etalons/6"
            />
            <EtalonsCard
              key={7}
              img={Img_7}
              title="Государственный эталон малого объема"
              link="../etalons/7"
            />
            <EtalonsCard
              key={8}
              img={Img_8}
              title="Государственный эталон плотности жидкости"
              link="../etalons/8"
            />
            <EtalonsCard
              key={9}
              img={Img_9}
              title="Государственный эталон шкалы PH жидкости"
              link="../etalons/9"
            />
            <EtalonsCard
              key={10}
              img={Img_10}
              title="Государственный эталон вязкости жидкости"
              link="../etalons/10"
            />
            <EtalonsCard
              key={11}
              img={Img_11}
              title="Государственный эталон удельной электролитической..."
              link="../etalons/11"
            />
            <EtalonsCard
              key={12}
              img={Img_12}
              title="Государственный эталон влажности зерна и зернопро..."
              link="../etalons/12"
            />
            <EtalonsCard
              key={13}
              img={Img_13}
              title="Государственный эталон электрического напряжения"
              link="../etalons/13"
            />
            <EtalonsCard
              key={14}
              img={Img_14}
              title="Государственный эталон электрического сопротивления"
              link="../etalons/15"
            />
            <EtalonsCard
              key={15}
              img={Img_15}
              title="Государственный эталон силы 
              тока"
              link="../etalons/15"
            />
            <EtalonsCard
              key={16}
              img={Img_16}
              title="Государственный эталон единицы времени и чистоты"
              link="../etalons/16"
            />
            <EtalonsCard
              key={17}
              img={Img_17}
              title="Государственный эталон единицы количества и расхо..."
              link="../etalons/17"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etalons;
