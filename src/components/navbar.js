import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./button";

import logo from "../assets/logo.png";
import logoWhite from "../assets/logo-white.png";

const NavItem = ({ to, nav, colorChange, navbarOpen, onClick }) => {
  return (
    <NavLink
      exact
      to={to}
      onClick={onClick}
      className={`no-underline my-2 sm:my-0 sm:mx-4 text-md w-full text-right sm:w-auto ${
        (colorChange || navbarOpen) && "text-rokSMA"
      }`}
      activeClassName={`font-bold ${colorChange || navbarOpen ? "text-rokSMP" : "text-rokSMA"}`}
    >
      {nav}
    </NavLink>
  );
};

export const ScrollNav = ({ nav, colorChange, navbarOpen, onClick }) => {
  return (
    <div
      className={`cursor-pointer my-2 sm:my-0 sm:mx-4 text-md w-full text-right sm:w-auto ${
        (colorChange || navbarOpen) && "text-rokSMA"
      }`}
      onClick={onClick}
    >
      {nav}
    </div>
  );
};

export default function Navbar({ homeRefs, scrollSmoothHandler }) {
  const [colorChange, setColorchange] = useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const changeNavbarColor = () => {
    if (window.pageYOffset > 0 && !colorChange) {
      setColorchange(true);
    } else if (window.pageYOffset === 0 && colorChange) {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div>
      {navbarOpen && (
        <div
          className="opacity-25 fixed inset-0 z-40 bg-matiLampu"
          onClick={() => setNavbarOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 w-full z-50  px-4 sm:px-12 py-2 flex items-center transition ease-in-out ${
          colorChange || navbarOpen ? "bg-white-cahaya shadow-lg" : "sm:pt-4"
        } ${navbarOpen && "flex-col"} sm:flex-row`}
      >
        <div className="w-full sm:w-auto flex-1 flex justify-between z-50">
          <Link to="/">
            <img
              src={colorChange || navbarOpen ? logo : logoWhite}
              alt="pharmasolindo"
              className="max-h-12"
            />
          </Link>
          <button
            className="block sm:hidden focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div
              className={`w-8 h-1 my-1.5 rounded-full ${
                navbarOpen || colorChange ? "bg-rokSMP" : "bg-white-cahaya"
              }`}
            />
            <div
              className={`w-8 h-1 my-1.5 rounded-full ${
                navbarOpen || colorChange ? "bg-rokSMP" : "bg-white-cahaya"
              }`}
            />
            <div
              className={`w-8 h-1 my-1.5 rounded-full ${
                navbarOpen || colorChange ? "bg-rokSMP" : "bg-white-cahaya"
              }`}
            />
          </button>
        </div>
        <div
          className={`flex w-full sm:w-max text-white-cahaya flex-col sm:flex-row sm:flex-nowrap items-end sm:items-center py-2 sm:py-0 sm:flex ${
            !navbarOpen && "hidden"
          }`}
        >
          <NavItem
            to="/"
            nav="Beranda"
            {...{ colorChange, navbarOpen }}
            onClick={() => setNavbarOpen(false)}
          />
          <NavItem
            to="/profil"
            nav="Profil"
            {...{ colorChange, navbarOpen }}
            onClick={() => setNavbarOpen(false)}
          />
          <ScrollNav
            onClick={() => {
              scrollSmoothHandler(homeRefs.productRef);
              setNavbarOpen(false);
            }}
            nav="Produk"
            {...{ colorChange, navbarOpen }}
          />
          <Button
            onClick={() => {
              scrollSmoothHandler(homeRefs.contactRef);
              setNavbarOpen(false);
            }}
            variant="primary"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  );
}
