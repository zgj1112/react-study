/*
 * @Author: zgj888 2369394195@qq.com
 * @Date: 2025-01-03 17:04:32
 * @LastEditors: zgj888 2369394195@qq.com
 * @LastEditTime: 2025-01-07 17:00:51
 * @FilePath: \testd:\shwork\work\react-project\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { useRef } from "react";
import "./App.css";
import StyleDemo from "./components/1style";
import RefDemo from "./components/2ref";
import PropsDemo from "./components/3props";
import ComponentsDemo from "./components/4components";
import UseStateDemo from "./components/5useState";
import UseEffectDemo from "./components/6useEffect";
import EventsDemo from "./components/7events";
import LifecycleDemo from "./components/8lifecycle";
import RenderingDemo from "./components/9rendering";

function App() {
  return (
    <div className="App">
      {/* 引入样式示例组件 */}
      <StyleDemo />
      {/* 引入 Ref 示例组件 */}
      <RefDemo />
      {/* 引入 props 示例组件 */}
      <PropsDemo />
      {/* 引入 组件 示例组件 */}
      <ComponentsDemo />
      {/* 引入 state 示例组件 */}
      <UseStateDemo />
      {/* 引入 UseEffect 示例组件 */}
      <UseEffectDemo />
      {/* 引入事件处理示例组件 */}
      <EventsDemo />
      {/* 引入生命周期示例组件 */}
      <LifecycleDemo />
      {/* 引入渲染示例组件 */}
      <RenderingDemo />
    </div>
  );
}

export default App;
