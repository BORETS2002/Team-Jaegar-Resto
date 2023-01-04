import React from "react";
import { NavLink } from "react-router-dom";
import { SearchInput } from "../../components/poisk/poisk";
import "./header.scss";
import { Route, Routes } from "react-router-dom";
import { HomeReact } from "../home/home";
export function Header() {
  return (
    <>
      <div className='header pt-3 '>
        <div className=''>
          <h1 className='site-logo'>Jaegar Resto</h1>
          <span className='logo-span'>Tuesday, 2 Feb 2021</span>
        </div>
        <SearchInput />
      </div>

      <div className='navlink'>
        <ul className='list-unstyled navlink-list'>
          <li className='navlink__list'>
            <NavLink
              to={"/Home/*"}
              className={({ isActive }) =>
                isActive ? "isActiv-navlink asssa" : "Navlink-stils"
              }
            >
              Hot Dishes
            </NavLink>
          </li>

          <li className='navlink__list'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActiv-navlink asssa" : "Navlink-stils"
              }
              to={"cold"}
            >
              Cold Dishes
            </NavLink>
          </li>

          <li className='navlink__list'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActiv-navlink" : "Navlink-stils"
              }
              to={"soup"}
            >
              Soup
            </NavLink>
          </li>

          <li className='navlink__list'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActiv-navlink" : "Navlink-stils"
              }
              to={"grill"}
            >
              Grill
            </NavLink>
          </li>

          <li className='navlink__list'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActiv-navlink" : "Navlink-stils"
              }
              to={"appetizer"}
            >
              Appetizer
            </NavLink>
          </li>

          <li className='navlink__list'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActiv-navlink" : "Navlink-stils"
              }
              to={"dessert"}
            >
              Dessert
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route index element={<HomeReact />} />
          <Route path='cold' element={" "} />
          <Route path='soup' element={" "} />
          <Route path='user' element={" "} />
          <Route path='grill' element={" "} />
          <Route path='appetizer' element={" "} />
          <Route path='dessert' element={" "} />
        </Routes>
      </div>

      {/* {(() => {
        if (Bor) {
          console.log("Ishladi");
          <Routes>
            <Route index element={<HomeReact />} />
          </Routes>;
        }
      })()} */}
    </>
  );
}
