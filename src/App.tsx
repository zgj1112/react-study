/*
 * @Author: zgj888 2369394195@qq.com
 * @Date: 2025-01-03 17:04:32
 * @LastEditors: zgj888 2369394195@qq.com
 * @LastEditTime: 2025-01-07 17:00:51
 * @FilePath: \testd:\shwork\work\react-project\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { useRef } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { store } from "./store/store";
import "./App.css";

// 基础组件
import HomePage from "./components/HomePage";
import StyleDemo from "./components/1style";
import RefDemo from "./components/2ref";
import PropsDemo from "./components/3props";
import ComponentsDemo from "./components/4components";

// Hooks相关组件
import UseStateDemo from "./components/5useState";
import UseEffectDemo from "./components/6useEffect";
import CustomHooksDemo from "./components/10customHooks";
import UseReducerDemo from "./components/16useReducer";

// 生命周期与渲染
import EventsDemo from "./components/7events";
import LifecycleDemo from "./components/8lifecycle";
import RenderingDemo from "./components/9rendering";

// 高级特性
import ContextDemo from "./components/11contextDemo";
import PerformanceDemo from "./components/12performance";
import ReduxDemo from "./components/13reduxDemo";
// import RouterDemo from "./components/14routerDemo";
import AxiosDemo from "./components/15axiosDemo";

import UseImmerDemo from "./components/17useImmer";
import UseSyncExternalStoreDemo from "./components/18useSyncExternalStore";
import UseLayoutEffectDemo from "./components/19useLayoutEffect";

/**
 * 应用主组件
 * 配置路由和Redux状态管理
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* 主页路由 */}
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />

            {/* 基础特性路由 */}
            <Route path="/style" element={<StyleDemo />} />
            <Route path="/ref" element={<RefDemo />} />
            <Route path="/props" element={<PropsDemo />} />
            <Route path="/components" element={<ComponentsDemo />} />

            {/* Hooks相关路由 */}
            <Route path="/usestate" element={<UseStateDemo />} />
            <Route path="/useeffect" element={<UseEffectDemo />} />
            <Route path="/customhooks" element={<CustomHooksDemo />} />

            {/* 生命周期与渲染路由 */}
            <Route path="/events" element={<EventsDemo />} />
            <Route path="/lifecycle" element={<LifecycleDemo />} />
            <Route path="/rendering" element={<RenderingDemo />} />

            {/* 高级特性路由 */}
            <Route path="/context" element={<ContextDemo />} />
            <Route path="/performance" element={<PerformanceDemo />} />
            <Route path="/redux" element={<ReduxDemo />} />
            {/* <Route path="/router" element={<RouterDemo />} /> */}
            <Route path="/axios" element={<AxiosDemo />} />
            {/* <Route path="/axios" element={<useReducerDemo />} /> */}
            <Route path="/useReducer" element={<UseReducerDemo />} />
            <Route path="/useImmer" element={<UseImmerDemo />} />
            <Route
              path="/useSyncExternalStore"
              element={<UseSyncExternalStoreDemo />}
            />
            <Route path="/useLayoutEffect" element={<UseLayoutEffectDemo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
