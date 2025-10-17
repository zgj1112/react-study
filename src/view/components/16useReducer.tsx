import React, { useReducer } from "react";

// 定义 state 的类型
interface CounterState {
  count: number;
}

// 定义所有可能的 action 类型
type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };

// reducer 函数，接收当前 state 和一个 action，返回新的 state
function counterReducer(state: CounterState, action: Action): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state; // 类型系统已经覆盖所有情况，这里只是兜底
  }
}

// 可选：init 函数，只在初始化时执行一次，用于惰性初始化
function init(initialCount: number): CounterState {
  return { count: initialCount };
}

// 主组件
const UseReducerDemo: React.FC = () => {
  // useReducer 接收 3 个参数：
  // 1. reducer 函数
  // 2. 初始值（用于传给 init）
  // 3. 可选的 init 函数（用于惰性初始化）
  const [state, dispatch] = useReducer(counterReducer, 10, init);

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducerDemo;
