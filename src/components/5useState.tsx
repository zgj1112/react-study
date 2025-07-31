import React, { useState } from "react";

/*
 * React useState Hook 知识点：
 *
 * 1. 基础用法：
 *    - 声明状态变量
 *    - 获取状态更新函数
 *    - 设置初始值
 *
 * 2. 状态类型：
 *    - 简单类型（数字、字符串、布尔值）
 *    - 对象类型
 *    - 数组类型
 *
 * 3. 状态更新：
 *    - 直接设置新值
 *    - 基于之前的状态更新
 *    - 使用函数式更新
 *
 * 4. 注意事项：
 *    - 状态更新是异步的
 *    - 保持状态的不可变性
 *    - 避免重复的状态
 *    - 正确处理对象和数组
 *
 * 5. 最佳实践：
 *    - 使用多个状态变量分离关注点
 *    - 合理组织状态结构
 *    - 使用 TypeScript 定义类型
 *    - 避免过度使用状态
 */

const UseStateDemo: React.FC = () => {
  // 数字类型
  const [count, setCount] = useState<number>(0);

  // 字符串类型
  // const [name, setName] = useState<string>('');

  // // 对象类型
  // // const [user, setUser] = useState<{name: string; age: number}>({ name: '', age: 0 });

  // // 数组类型
  // const [list, setList] = useState<string[]>([]);

  // // 可以省略泛型，TypeScript 会自动推断类型
  // const [value, setValue] = useState(0); // 自动推断为 number 类型

  // 基础数字状态示例
  // const [count, setCount] = useState<number>(0);

  // 对象状态示例
  const [user, setUser] = useState<{
    name: string;
    age: number;
  }>({
    name: "张三",
    age: 25,
  });

  // 数组状态示例
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // 处理对象状态更新
  const handleAgeIncrease = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  // 处理数组状态更新
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue(""); // 清空输入框
    }
  };

  //测试异步
  const onhandelClick = () => {
    // 以下代码只执行第一行 自带防抖
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // 实现效果
    setCount((state) => state + 1);
    setCount((state) => state + 1);
    setCount((state) => state + 1);
  };

  return (
    <div className="use-state-demo">
      <h2>useState 使用示例</h2>

      {/* 数字状态示例 */}
      <section>
        <h3>1. 基础计数器</h3>
        <p>当前计数: {count}</p>
        <button onClick={() => setCount(count + 1)}>增加</button>
        <button onClick={() => setCount(count - 1)}>减少</button>
        <button onClick={onhandelClick}>测试异步</button>
      </section>

      {/* 对象状态示例 */}
      <section>
        <h3>2. 对象状态管理</h3>
        <p>用户名: {user.name}</p>
        <p>年龄: {user.age}</p>
        <button onClick={handleAgeIncrease}>增加年龄</button>
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="修改用户名"
        />
      </section>

      {/* 数组状态示例 */}
      <section>
        <h3>3. 数组状态管理</h3>
        <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="输入待办事项"
          />
          <button onClick={handleAddTodo}>添加待办</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                onClick={() => setTodos(todos.filter((_, i) => i !== index))}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="tips">
        <h3>useState 使用要点：</h3>
        <ol>
          <li>状态更新是异步的</li>
          <li>更新对象和数组时要保持不可变性</li>
          <li>函数式更新可以保证获取最新状态</li>
          <li>可以使用 TypeScript 为状态添加类型</li>
        </ol>
      </div>
    </div>
  );
};

export default UseStateDemo;
