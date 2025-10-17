import React, { useState } from "react";

/*
 * React 事件处理知识点：
 * 1. 事件命名和处理：
 *    - 驼峰命名：onClick, onChange, onSubmit 等
 *    - 事件处理函数命名规范：handle + 事件名
 * 
 * 2. 事件对象（Event）：
 *    - TypeScript 中的事件类型：
 *      - React.MouseEvent
 *      - React.ChangeEvent
 *      - React.FormEvent
 *      - React.KeyboardEvent
 *    - 事件对象常用属性：
 *      - e.target: 触发事件的元素
 *      - e.currentTarget: 事件处理绑定的元素
 *      - e.preventDefault(): 阻止默认行为
 *      - e.stopPropagation(): 阻止事件冒泡
 * 
 * 3. 事件处理最佳实践：
 *    - 使用箭头函数避免 this 绑定问题
 *    - 在构造函数中绑定方法
 *    - 使用事件委托优化性能
 *    - 清理事件监听器
 * 
 * 4. 常见事件类型：
 *    - 鼠标事件：onClick, onMouseMove, onMouseEnter
 *    - 表单事件：onChange, onSubmit, onFocus
 *    - 键盘事件：onKeyDown, onKeyPress, onKeyUp
 *    - 剪贴板事件：onCopy, onCut, onPaste
 */

const EventsDemo: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState("");

  // 1. 基础事件处理
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("按钮被点击", e.currentTarget);
  };

  // 2. 事件对象的使用
  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // 3. 表单事件
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 4. 阻止默认行为
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("表单提交", inputValue);
  };

  // 5. 事件冒泡
  const handleParentClick = (e: React.MouseEvent) => {
    console.log("父元素被点击", e);
  };

  const handleChildClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止事件冒泡
    console.log("子元素被点击");
  };

  return (
    <div className="events-demo">
      <h2>React 事件处理示例</h2>

      {/* 1. 基础点击事件 */}
      <section>
        <h3>1. 基础事件</h3>
        <button onClick={handleClick}>点击我</button>
      </section>

      {/* 2. 鼠标事件和位置 */}
      <section>
        <h3>2. 鼠标位置追踪</h3>
        <div
          onMouseMove={handleMouseMove}
          style={{ height: "100px", background: "#f0f0f0" }}
        >
          鼠标位置: X: {position.x}, Y: {position.y}
        </div>
      </section>

      {/* 3. 表单事件 */}
      <section>
        <h3>3. 表单处理</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="输入些内容"
          />
          <button type="submit">提交</button>
        </form>
      </section>

      {/* 4. 事件冒泡示例 */}
      <section>
        <h3>4. 事件冒泡</h3>
        <div
          onClick={handleParentClick}
          style={{ padding: "20px", background: "#eee" }}
        >
          父元素
          <button onClick={handleChildClick}>子元素</button>
        </div>
      </section>

      {/* 5. 事件处理最佳实践 */}
      <section>
        <h3>5. 事件处理要点</h3>
        <ul>
          <li>事件命名规范: handle + 事件名</li>
          <li>TypeScript 中的事件类型</li>
          <li>事件对象的正确使用</li>
          <li>事件委托的实现</li>
          <li>性能优化考虑</li>
        </ul>
      </section>
    </div>
  );
};

export default EventsDemo;
