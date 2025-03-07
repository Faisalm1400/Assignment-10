import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import { RouterProvider } from "react-router-dom";
import Routes from './routers/Routes.jsx';
import AuthContextProvider, { AuthContext } from './context/AuthContextProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Routes} />
    </AuthContextProvider>
  </StrictMode>,
)
