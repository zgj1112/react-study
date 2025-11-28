import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // 原生导入
import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css"; // 如果未在 main.jsx 导入，这里添加
// import chineseTmsProviders from "../../leaflet.ChineseTmsProviders";

const LeafletMap: React.FC = () => {
  const [position] = useState<LatLngTuple>([51.505, -0.09]); // 示例位置：伦敦
  const mapRef = useRef(null); // ref 获取地图容器
  const mapInstance = useRef(null); // ref 保存地图实例（可选，便于后续操作）

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // 初始化地图
      mapInstance.current = L.map(mapRef.current).setView(
        [39.9042, 116.4074],
        13
      ); // 北京示例，zoom=13

      // 添加 TileLayer（OpenStreetMap）
      //   console.log(chineseTmsProviders);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);
      // 加载某服务商街道图
      //   L.tileLayer
      //     .chinaProvider("Baidu.Normal.Map", {
      //       maxZoom: 18,
      //       minZoom: 5,
      //     })
      //     .addTo(mapInstance.current);

      // 使用包配置的天地图矢量层（中文标签，无需密钥）
      //   L.tileLayer(chineseTmsProviders.tianDiTu.Normal.Map, {
      //     maxZoom: 18,
      //   }).addTo(mapInstance.current);

      // 添加标记和弹出框
      const marker = L.marker([39.9042, 116.4074]).addTo(mapInstance.current);
      marker.bindPopup("原生 Leaflet 在 React 中的示例！").openPopup();
    }

    // 清理函数：组件卸载时移除地图
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []); // 空依赖：仅初始化一次

  return (
    <div>
      {/* <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            一个弹出窗口示例！
            <br />
            这是 Leaflet 在 React 中的基本使用。
          </Popup>
        </Marker>
      </MapContainer> */}
      <div style={{ height: "100vh", width: "100%" }}>
        {/* 确保容器有尺寸 */}
        <div ref={mapRef} style={{ height: "100%", width: "100%" }} />{" "}
        {/* 地图容器 */}
      </div>
    </div>
  );
};

export default LeafletMap;
