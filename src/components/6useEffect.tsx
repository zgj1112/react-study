/*
 * @Author: zgj888 2369394195@qq.com
 * @Date: 2025-01-07 16:59:58
 * @LastEditors: zgj888 2369394195@qq.com
 * @LastEditTime: 2025-01-07 17:07:16
 * @FilePath: \testd:\shwork\work\react-project\src\components\6useEffect.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";

/*
 * React useEffect Hook 知识点：
 * 
 * 1. useEffect 基础用法：
 *    - 无依赖项：每次渲染后执行
 *    - 空依赖数组：仅在挂载时执行
 *    - 有依赖项：依赖项变化时执行
 * 
 * 2. 清理函数：
 *    - 返回一个清理函数
 *    - 组件卸载时执行
 *    - 下一次 effect 执行前执行
 * 
 * 3. 常见用途：
 *    - 订阅外部数据源
 *    - 手动修改 DOM
 *    - 设置定时器
 *    - 网络请求
 * 
 * 4. 注意事项：
 *    - 避免无限循环
 *    - 正确设置依赖项
 *    - 及时清理副作用
 *    - 处理竞态条件
 * 
 * 5. 最佳实践：
 *    - 使用多个 useEffect 分离关注点
 *    - 合理使用依赖项
 *    - 在需要时使用清理函数
 *    - 使用 TypeScript 类型
 */

const UseEffectDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string>("");

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
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("数据获取失败",error);
      }
    };

    fetchData();
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
          <li>{data}</li>
        </ol>
      </section>
    </div>
  );
};

export default UseEffectDemo; 