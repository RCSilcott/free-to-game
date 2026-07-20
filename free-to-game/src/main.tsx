// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { BrowserRouter, RouterProvider } from "react-router-dom";
// import { router } from "./routes/router";
// import { Route, Router, Routes } from 'react-router';

// createRoot(document.getElementById('root')!).render(

//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<App />} />
//     </Routes>
//     </BrowserRouter>

// )



// RouterProvider({ router });

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);