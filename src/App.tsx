import React, { Suspense } from 'react';
import "./index.scss";
import {MainPageLazy} from "./Pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./Pages/AboutPage/AboutPage.lazy";
import {Link, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to={'/'} >Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy /> }/>
          <Route path={'/about'} element={<AboutPageLazy />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;