import React, { useSyncExternalStore, useEffect } from "react";

// 1. 定义订阅函数（当窗口大小变化时，通知组件更新）
function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

// 2. 获取当前的快照（即当前状态）
function getSnapshot() {
  return window.innerWidth;
}

// 3. 可选：服务端渲染时的默认值
function getServerSnapshot() {
  return 1024; // 假设服务端用的是 1024
}

const UseSyncExternalStoreDemo: React.FC = () => {
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // 每当 width 改变，更新 URL 参数
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("width", width.toString());
    window.history.replaceState({}, "", url.toString());
  }, [width]);

  return <div>当前窗口宽度：{width}px</div>;
};

export default UseSyncExternalStoreDemo;
