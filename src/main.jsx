import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import CreateAccount from "./Components/CreateAccount";

import SignInUser from "./Components/SignInUser";
import AllreadyUser from "./Components/AllreadyUser";


import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/signInUser" element={<SignInUser />} />
        <Route path="/already_user" element={<AllreadyUser />} />

      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);