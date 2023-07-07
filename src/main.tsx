import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Pages/About.tsx';
import App from './App.tsx';
import { ThemeProvider } from "@material-tailwind/react";
import NotFound from './Pages/NotFound.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
