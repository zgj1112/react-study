/*
 * @Author: zgj888 2369394195@qq.com
 * @Date: 2025-01-03 17:04:32
 * @LastEditors: zgj888 2369394195@qq.com
 * @LastEditTime: 2025-01-06 17:41:07
 * @FilePath: \testd:\shwork\work\react-project\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { useRef } from "react";
import "../App.css";

function StyleDemo() {
  const name = "Hello Word";
  const ID = "id111";

  const divStyle: React.CSSProperties = {
    color: "red",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <>
      {/* 样式写法1 */}
      <span style={{ color: "red", fontSize: "55px" }}>{name}</span>
      {/* 样式写法2 */}
      <span style={divStyle}>{name}</span>
      {/* 样式写法3 className1引入css*/}
      <div className="logo " id={ID}>
        <span style={{ color: "red", fontSize: "55px" }}>{name}</span>
      </div>
    </>
  );
}

export default StyleDemo;
