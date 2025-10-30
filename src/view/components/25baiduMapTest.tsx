import React, { useEffect, useRef } from "react";
import {
  Map,
  Marker,
  Polygon,
  Polyline,
  NavigationControl,
  InfoWindow,
} from "react-bmapgl";

const BaiduTest: React.FC = () => {
  const mapRef = useRef<InstanceType<typeof Map> | null>(null);

  return (
    <div>
      <Map
        style={{ height: "100vh" }}
        center={new BMapGL.Point(116.402544, 39.928216)}
        zoom={12}
        heading={0}
        tilt={40}
        ref={mapRef}
        onClick={(e) => console.log(e)}
        enableScrollWheelZoom
        enableRotate
        enableTilt
      >
        {/* 3d控件 */}
        <NavigationControl />

        {/* 点 */}
        <Marker
          icon={"loc_blue"}
          position={new BMapGL.Point(116.402544, 39.928216)} // 经纬度：lng, lat
          rotation={0}
          onClick={(e) => {
            console.log("标记点击:", e); // 标记点击事件
            // 这里可以打开 InfoWindow（见下面示例）
          }}
        />

        {/* 线 */}
        <Polyline
          path={[
            new BMapGL.Point(116.45, 39.88),
            new BMapGL.Point(116.5, 39.92),
            new BMapGL.Point(116.23, 40.01),
          ]}
          strokeColor="#f00"
          strokeWeight={10}
        />

        {/* 面 */}
        <Polygon
          path={[
            new BMapGL.Point(116.35, 39.88),
            new BMapGL.Point(116.4, 39.92),
            new BMapGL.Point(116.33, 40.01),
          ]}
          strokeColor="#f00"
          strokeWeight={2}
          fillColor="#ff0"
          fillOpacity={0.3}
          onMouseover={(e) => {
            console.log(e);
          }}
        />
      </Map>
    </div>
  );
};

export default BaiduTest;
