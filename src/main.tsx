// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "src/routes";

// 引入css
import "mars3d-cesium/Build/Cesium/Widgets/widgets.css";
import "mars3d/mars3d.css"; // v3.8.6及之前版本使用 import "mars3d/dist/mars3d.css";
import 'leaflet/dist/leaflet.css';
import  "src/css/style.scss";
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
