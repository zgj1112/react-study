import { Component } from "react";

interface Props {
  [key: string]: string;
}
interface State {
  count: number;
  error: string;
}

class LifecycleDemo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      error: "",
    };
    console.log("1. 构造函数执行");
  }

  componentDidMount() {
    console.log("3. 组件挂载完成");
    // 模拟数据获取
    setTimeout(() => {
      this.setState({ count: 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log("4. 组件更新完成", prevProps, {
      prevState,
      currentState: this.state,
    });
  }

  componentWillUnmount() {
    console.log("5. 组件即将卸载");
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    console.log("2. 从属性获取状态", props, state);
    return null;
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log("是否应该更新组件", nextProps, nextState);
    return true;
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("3. 渲染函数执行");
    return (
      <div className="lifecycle-demo">
        <h2>React 生命周期示例</h2>

        <section>
          <h3>1. 计数器示例</h3>
          <p>当前计数: {this.state.count}</p>
          <button onClick={this.handleClick}>增加</button>
        </section>

        <section>
          <h3>2. 生命周期方法</h3>
          <ul>
            <li>constructor: 初始化</li>
            <li>getDerivedStateFromProps: 属性转换</li>
            <li>render: 渲染</li>
            <li>componentDidMount: 挂载完成</li>
            <li>shouldComponentUpdate: 更新判断</li>
            <li>componentDidUpdate: 更新完成</li>
            <li>componentWillUnmount: 即将卸载</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default LifecycleDemo;
