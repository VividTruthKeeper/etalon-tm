// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (path) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-inner">
          <Link to="/" className="breadcrumb-text-unfaded">
            Главная
          </Link>
          <span
            className="breadcrumb-slash"
            style={path.path_1 ? { display: "block" } : { display: "none" }}
          >
            /
          </span>
          <Link
            to={path.link_1 ? path.link_1 : path.currentUrl}
            className={
              path.path_2 ? "breadcrumb-text-unfaded" : "breadcrumb-text-faded"
            }
            style={path.path_1 ? { display: "block" } : { display: "none" }}
          >
            {path.path_1}
          </Link>
          <span
            className="breadcrumb-slash"
            style={path.path_2 ? { display: "block" } : { display: "none" }}
          >
            /
          </span>
          <Link
            to={path.link_2 ? path.link_2 : path.currentUrl}
            style={path.path_2 ? { display: "block" } : { display: "none" }}
            className={
              path.path_3 ? "breadcrumb-text-unfaded" : "breadcrumb-text-faded"
            }
          >
            {path.path_2}
          </Link>
          <span
            className="breadcrumb-slash"
            style={path.path_3 ? { display: "block" } : { display: "none" }}
          >
            /
          </span>
          <Link
            to={path.link_3 ? path.link_1 : path.currentUrl}
            className={
              path.path_4 ? "breadcrumb-text-unfaded" : "breadcrumb-text-faded"
            }
            style={path.path_3 ? { display: "block" } : { display: "none" }}
          >
            {path.path_3}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
