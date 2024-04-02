import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReduxProvider from "./redux/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <ReduxProvider>
            <App />
         </ReduxProvider>
      </BrowserRouter>
   </React.StrictMode>
);
