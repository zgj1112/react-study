// src/components/Counter.tsx
import React from "react";
import useCounterStore from "src/store";

const Counter: React.FC = () => {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🧮 当前计数：{count}</h2>
      <button onClick={increase}>➕ 增加</button>
      <button onClick={decrease} style={{ margin: "0 10px" }}>
        ➖ 减少
      </button>
      <button onClick={reset}>🔄 重置</button>
    </div>
  );
};

export default Counter;
