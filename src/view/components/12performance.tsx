import React, { useState, useMemo, useCallback, memo } from 'react';

// 使用 memo 优化的子组件
const ExpensiveComponent = memo(({ data, onItemClick }: {
  data: number[];
  onItemClick: (item: number) => void;
}) => {
  console.log('ExpensiveComponent 重新渲染');
  
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index} onClick={() => onItemClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
});

const PerformanceDemo = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<number[]>([1, 2, 3, 4, 5]);

  // 使用 useMemo 缓存计算结果
  const expensiveCalculation = useMemo(() => {
    console.log('执行昂贵的计算');
    return list.reduce((acc, curr) => acc + curr, 0);
  }, [list]);

  // 使用 useCallback 缓存回调函数
  const handleItemClick = useCallback((item: number) => {
    console.log('点击项目:', item);
  }, []);

  // 添加新数字到列表
  const addNumber = () => {
    setList(prev => [...prev, Math.floor(Math.random() * 100)]);
  };

  return (
    <div>
      <h2>性能优化示例</h2>

      <section>
        <h3>1. 基础计数器</h3>
        <p>计数: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>增加</button>
      </section>

      <section>
        <h3>2. useMemo 示例</h3>
        <p>列表总和: {expensiveCalculation}</p>
        <button onClick={addNumber}>添加随机数</button>
      </section>

      <section>
        <h3>3. React.memo 和 useCallback 示例</h3>
        <ExpensiveComponent 
          data={list}
          onItemClick={handleItemClick}
        />
      </section>

      <section>
        <h3>性能优化要点：</h3>
        <ul>
          <li>使用 React.memo 避免不必要的重渲染</li>
          <li>使用 useMemo 缓存计算结果</li>
          <li>使用 useCallback 缓存回调函数</li>
          <li>合理使用 key 属性</li>
          <li>避免在渲染时创建新的对象或函数</li>
        </ul>
      </section>
    </div>
  );
};

export default PerformanceDemo; 