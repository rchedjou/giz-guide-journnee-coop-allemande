import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//import './i18n';
import "./i18n";


import Accueil from './Pages/Accueil';
import Agenda from './Pages/Agenda';
import Carte from './Pages/Carte';
import Presse from './Pages/Presse';
import Faq from './Pages/Faq';
import Apropos from './Pages/Apropos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App />} >
          <Route  path="accueil" element={<Accueil />} />
          <Route  path="agenda" element={<Agenda/>} />
          <Route  path="carte" element={<Carte/>} />
          <Route  path="presse" element={<Presse />} />
          <Route  path="faq" element={<Faq />} />
          <Route  path="apropos" element={<Apropos />} />
      </Route>
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
