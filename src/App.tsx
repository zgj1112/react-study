/*
 * @Author: zgj888 2369394195@qq.com
 * @Date: 2025-01-03 17:04:32
 * @LastEditors: zgj888 2369394195@qq.com
 * @LastEditTime: 2025-01-06 17:41:07
 * @FilePath: \testd:\shwork\work\react-project\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { useRef } from "react";
import "./App.css";
import StyleDemo from "./components/1styledemo";
import RefDemo from "./components/2refdemo";

function App() {
  return (
    <>
      {/* 引入样式示例组件 */}
      <StyleDemo />
      {/* 引入 Ref 示例组件 */}
      <RefDemo />
    </>
  );
}

export default App;
