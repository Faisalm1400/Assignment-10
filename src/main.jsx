import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {RouterProvider} from "react-router-dom";
import Routes from './routers/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <RouterProvider router={Routes} />
  </StrictMode>,
)
