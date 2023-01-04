import "./App.css";
import { Header } from "./pages/header/Header";

import { NavBar } from "./pages/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import { HomeReact } from "./pages/home/home";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className='App'>
      <div className='d-flex'>
        <NavBar />

        <div className='Big-boss-container'>
          <Routes>
            <Route path='/Home/*' element={<HomeReact />} />
            <Route path='Dashboard/*' element={<Dashboard />} />
          </Routes>
        </div>
        <div className='Azamat-page'>
          <h2 className='text-white'>azamat page</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
