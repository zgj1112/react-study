import React, { lazy, Suspense } from "react";
import {  Spin } from "antd";
// 异步引入组件
const MyComponent = lazy(() => import("./15axiosDemo"));

export default function App() {
  return (
    <div>
      {/* 异步加载前的插入 */}
      <Suspense fallback={<Spin></Spin>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}
