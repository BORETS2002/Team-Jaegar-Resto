import { Link, Routes, Route, NavLink } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard.js";

import App from "../../App.js";
import {
  Logo,
  HomeSvg,
  Three,
  For,
  Five,
  Six,
  Seven,
  Eight,
} from "../../assets/icons/Icons.js";
import "./navbar.scss";
// import "../../assets/icons/icons.scss"
export function NavBar() {
  return (
    <>
      <div className='navbar__box'>
        <NavLink
          to='#'
          // className={({ isActive }) =>
          //   isActive ? "navbar-link navbar-link--active" : "navbar=link"
          // }
        >
          <Logo />
        </NavLink>
        <NavLink
          to='Home/*'
          className={({ isActive }) =>
            isActive ? "navbar-link navbar-link--active" : "navbar=link"
          }
        >
          <HomeSvg />
        </NavLink>
        <NavLink
          to='three/*'
          className={({ isActive }) =>
            isActive ? "navbar-link navbar-link--active" : "navbar=link"
          }
        >
          <Three />
        </NavLink>

        <NavLink
          to='Dashboard/*'
          className={({ isActive }) =>
            isActive ? "navbar-link navbar-link--active" : "navbar=link"
          }
        >
          <For />
        </NavLink>

        <NavLink
          to='Five/*'
          className={({ isActive }) =>
            isActive ? "navbar-link navbar-link--active" : "navbar=link"
          }
        >
          <Five />
        </NavLink>

        <NavLink
          to='Six/*'
          className={({ isActive }) =>
            isActive ? "navbar-link navbar-link--active" : "navbar=link"
          }
        >
          <Six />
        </NavLink>

        <NavLink
          to='Seven/*'
          className={({ isActive }) =>
            isActive ? "navbar-link navbar-link--active" : "navbar=link"
          }
        >
          <Seven />
        </NavLink>
        <NavLink
          to='Eight/*'
          className={({ isActive }) =>
            isActive ? "navbar-link navbar-link--active" : "navbar=link"
          }
        >
          <Eight />
        </NavLink>
      </div>
    </>
  );
}
