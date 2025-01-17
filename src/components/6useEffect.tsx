/*
 * @Author: zgj888 2369394195@qq.com
 * @Date: 2025-01-07 16:59:58
 * @LastEditors: zgj888 2369394195@qq.com
 * @LastEditTime: 2025-01-08 17:52:50
 * @FilePath: \testd:\shwork\work\react-project\src\components\6useEffect.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";

/*
 * React useEffect Hook 知识点：
 * 
 * 1. useEffect 基础用法： 相当于 componentDidMount 和 componentDidUpdate 的组合 当组件挂载时执行一次，当组件更新时也执行  第一个传参为函数  return为销毁前函数
 *   useEffect(() => {
  *     // 执行副作用操作
  }, [count]);
  当数组未传入时，每次渲染都会执行 当传入时，只有依赖项改变时才会执行 即此处的count改变时才会执行
 */

const UseEffectDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  // const [data, setData] = useState<string>("");

  // 1. 无依赖项的 useEffect
  useEffect(() => {
    console.log("组件每次渲染都会执行");
  });

  // 2. 空依赖数组的 useEffect
  useEffect(() => {
    console.log("组件只在挂载时执行一次");
  }, []);

  // 3. 有依赖项的 useEffect
  useEffect(() => {
    console.log("count 改变时执行");
    document.title = `点击了 ${count} 次`;
  }, [count]);

  // 4. 清理效果的 useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("定时器执行中...");
    }, 1000);

    // 清理函数
    return () => {
      clearInterval(timer);
      console.log("清理定时器");
    };
  }, []);

  // 5. 模拟数据获取
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://api.example.com/data");
    //     const result = await response.json();
    //     setData(result);
    //   } catch (error) {
    //     console.error("数据获取失败", error);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <div className="use-effect-demo">
      <h2>useEffect 使用示例</h2>

      <section>
        <h3>1. 基础计数器效果</h3>
        <p>当前计数: {count}</p>
        <button onClick={() => setCount(count + 1)}>增加</button>
      </section>

      <section>
        <h3>2. useEffect 使用要点</h3>
        <ol>
          <li>不同依赖项的使用场景</li>
          <li>清理函数的重要性</li>
          <li>异步操作处理</li>
          <li>避免无限循环</li>
          <li>依赖项的正确使用</li>
          {/* <li>{data}</li> */}
        </ol>
      </section>
    </div>
  );
};

export default UseEffectDemo;
