import React, { useState, useEffect } from 'react';

// 1. 函数组件 - 最基础的组件形式
const SimpleComponent: React.FC = () => {
  return <div>这是一个简单的函数组件</div>;
};

// 2. 带有状态的组件
const StatefulComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
};

// 3. 生命周期演示组件
const LifecycleComponent: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    // 组件挂载时执行
    console.log('组件已挂载');
    setData('数据已加载');

    // 组件卸载时执行
    return () => {
      console.log('组件将要卸载');
    };
  }, []); // 空依赖数组表示只在挂载和卸载时执行

  return <div>{data}</div>;
};

// 4. 条件渲染组件
const ConditionalComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '隐藏' : '显示'}
      </button>
      {isVisible && <div>现在你看到我了！</div>}
    </div>
  );
};

// 5. 列表渲染组件
const ListComponent: React.FC = () => {
  const items = ['苹果', '香蕉', '橙子'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// 6. 类组件示例
class ClassComponent extends React.Component<Record<string, never>, { count: number }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('类组件已挂载');
  }

  componentWillUnmount() {
    console.log('类组件将要卸载');
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>类组件中的计数: {this.state.count}</p>
        <button onClick={this.handleClick}>增加</button>
      </div>
    );
  }
}

// 7. 组合组件 - 将上述组件组合在一起
const ComponentsDemo: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>React 组件用法示例</h2>
      
      <section>
        <h3>1. 简单组件</h3>
        <SimpleComponent />
      </section>

      <section>
        <h3>2. 带状态组件</h3>
        <StatefulComponent />
      </section>

      <section>
        <h3>3. 生命周期组件</h3>
        <LifecycleComponent />
      </section>

      <section>
        <h3>4. 条件渲染</h3>
        <ConditionalComponent />
      </section>

      <section>
        <h3>5. 列表渲染</h3>
        <ListComponent />
      </section>

      <section>
        <h3>6. 类组件示例</h3>
        <ClassComponent />
      </section>
    </div>
  );
};

export default ComponentsDemo; 