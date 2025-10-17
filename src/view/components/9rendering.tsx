import React, { useState } from "react";

interface ListItem {
  id: number;
  text: string;
  completed: boolean;
}

const RenderingDemo: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState<ListItem[]>([
    { id: 1, text: "学习 React", completed: false },
    { id: 2, text: "学习 TypeScript", completed: true },
    { id: 3, text: "创建项目", completed: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);

  // 条件渲染示例
  const renderAuthButton = () => {
    if (isLoggedIn) {
      return <button onClick={() => setIsLoggedIn(false)}>登出</button>;
    }
    return <button onClick={() => setIsLoggedIn(true)}>登录</button>;
  };

  // 列表渲染与过滤
  const filteredItems = showCompleted
    ? items
    : items.filter((item) => !item.completed);

  // 切换任务状态
  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="rendering-demo">
      <h2>条件渲染与列表示例</h2>

      {/* 1. 条件渲染 */}
      <section>
        <h3>1. 条件渲染</h3>
        {renderAuthButton()}
        {isLoggedIn && <p>欢迎回来！</p>}
        {isLoggedIn ? (
          <div>用户信息面板</div>
        ) : (
          <div>请登录查看更多信息</div>
        )}
      </section>

      {/* 2. 列表渲染 */}
      <section>
        <h3>2. 列表渲染</h3>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
          显示已完成项目
        </label>
        <ul>
          {filteredItems.map((item) => (
            <li
              key={item.id}
              onClick={() => toggleItem(item.id)}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      {/* 3. 渲染要点 */}
      <section>
        <h3>3. 渲染要点</h3>
        <ul>
          <li>key 的正确使用</li>
          <li>条件渲染的多种方式</li>
          <li>列表渲染的性能优化</li>
          <li>空值处理</li>
          <li>条件渲染的最佳实践</li>
        </ul>
      </section>
    </div>
  );
};

export default RenderingDemo; 