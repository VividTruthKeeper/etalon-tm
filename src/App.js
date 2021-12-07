// IMPORT MODULES
import React from "react";
import { Switch, Route } from "react-router-dom";

// IMPORT PERMANENT COMPONENTS
import Nav from "./components/Global/Nav";
import Footer from "./components/Global/Footer";

// IMPORT PAGES
import Main from "./pages/Main";
import News from "./pages/News";
import Novelty from "./pages/Novelty";
import Etalons from "./pages/Etalons";
import Etalon from "./pages/Etalon";
import Legislation from "./pages/Legislation";
import History from "./pages/History";
import Structure from "./pages/Structure";
import Prices from "./pages/Prices";
import MeasuringRegister from "./pages/MeasuringRegister";
import Meteorology from "./pages/Meteorology";
import CalibrateInstruments from "./pages/CalibrateInstruments";
import CalibrateThermo from "./pages/CalibrateThermo";
import Regulations from "./pages/Regulations";
import Service from "./pages/Service";

// IMPORT STYLES
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/news" exact>
          <News />
        </Route>
        <Route path="/news/novelty/1" exact>
          <Novelty />
        </Route>
        <Route path="/etalons" exact>
          <Etalons />
        </Route>
        <Route path="/etalons/1">
          <Etalon />
        </Route>
        <Route path="/legislation">
          <Legislation />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/structure">
          <Structure />
        </Route>
        <Route path="/prices" exact>
          <Prices />
        </Route>
        <Route path="/prices/meteorology" exact>
          <Meteorology />
        </Route>
        <Route path="/prices/calibrate_instruments" exact>
          <CalibrateInstruments />
        </Route>
        <Route path="/prices/calibrate_thermo">
          <CalibrateThermo />
        </Route>
        <Route path="/measuring_register">
          <MeasuringRegister />
        </Route>
        <Route path="/measuring_regulations">
          <Regulations />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
