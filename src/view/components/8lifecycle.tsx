import { Component } from "react";

// 定义 Props 和 State 接口
interface Props {
  title?: string;
}

interface State {
  count: number;
  error: string;
  data: string[];
}

class LifecycleDemo extends Component<Props, State> {
  // 1. 初始化阶段
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      error: "",
      data: [],
    };
    console.log("========== 初始化阶段 ==========");
    console.log("1. constructor 被调用");
  }

  // 2. 挂载阶段 - 从 Props 获取 State
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log("2. getDerivedStateFromProps 被调用:", {
      nextProps,
      prevState,
    });
    // 可以返回一个对象来更新 state，返回 null 表示不更新
    return null;
  }

  // 3. 挂载阶段 - 组件是否应该更新
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const shouldUpdate = true;
    console.log("========== 更新阶段 ==========");
    console.log("3. shouldComponentUpdate 被调用:", {
      更新原因: nextState.count !== this.state.count ? "计数更新" : "其他更新",
      当前count: this.state.count,
      新count: nextState.count,
      shouldUpdate,
    });
    // 返回 true 表示需要更新，返回 false 表示不更新
    return shouldUpdate;
  }

  // 4. 挂载阶段 - 在渲染前获取快照
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State): number | null {
    console.log("4. getSnapshotBeforeUpdate 被调用:", {
      prevCount: prevState.count,
      newCount: this.state.count,
    });
    // 返回值会作为 componentDidUpdate 的第三个参数
    return null;
  }

  // 5. 挂载阶段 - 组件挂载完成
  componentDidMount() {
    console.log("5. componentDidMount 被调用 - 组件完成首次挂载");
    // 示例：组件挂载后加载数据
    this.loadData();
  }

  // 6. 更新阶段 - 组件更新完成
  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log("6. componentDidUpdate 被调用:", {
      更新类型: prevState.count !== this.state.count ? "计数更新" : "其他更新",
      prevCount: prevState.count,
      currentCount: this.state.count,
    });
  }

  // 7. 卸载阶段 - 组件即将卸载
  componentWillUnmount() {
    console.log("========== 卸载阶段 ==========");
    console.log("7. componentWillUnmount 被调用 - 组件即将卸载");
    // 清理工作：取消订阅、清除定时器等
  }

  // 8. 错误处理 - 捕获渲染错误
  static getDerivedStateFromError(error: Error) {
    console.log("8. getDerivedStateFromError:", error);
    // 返回新的 state 来更新界面
    return { error: error.message };
  }

  // 9. 错误处理 - 记录错误信息
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("9. componentDidCatch:", {
      error,
      errorInfo,
    });
    // 可以将错误信息发送到服务器
  }

  // 模拟加载数据
  private loadData = () => {
    setTimeout(() => {
      this.setState({
        data: ["数据1", "数据2", "数据3"],
      });
    }, 1000);
  };

  // 按钮点击处理
  private handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // 模拟错误
  private handleError = () => {
    throw new Error("手动触发错误");
  };

  // 渲染函数
  render() {
    console.log(`render 被调用 - count: ${this.state.count}`);

    if (this.state.error) {
      return <div>错误: {this.state.error}</div>;
    }

    return (
      <div className="lifecycle-demo">
        <h2>{this.props.title || "React 生命周期示例"}</h2>

        <section>
          <h3>1. 状态演示</h3>
          <p>计数: {this.state.count}</p>
          <button onClick={this.handleClick}>增加计数</button>
          <button onClick={this.handleError}>触发错误</button>
        </section>

        <section>
          <h3>2. 数据加载演示</h3>
          {this.state.data.length > 0 ? (
            <ul>
              {this.state.data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>加载中...</p>
          )}
        </section>

        <section>
          <h3>3. 生命周期顺序</h3>
          <ol>
            <li>
              初始化阶段：
              <ul>
                <li>constructor (初始化)</li>
                <li>getDerivedStateFromProps (属性转换)</li>
                <li>render (首次渲染)</li>
                <li>componentDidMount (挂载完成)</li>
              </ul>
            </li>
            <li>
              更新阶段：
              <ul>
                <li>getDerivedStateFromProps</li>
                <li>shouldComponentUpdate (是否更新)</li>
                <li>render (重新渲染)</li>
                <li>getSnapshotBeforeUpdate (更新前快照)</li>
                <li>componentDidUpdate (更新完成)</li>
              </ul>
            </li>
            <li>
              卸载阶段：
              <ul>
                <li>componentWillUnmount (即将卸载)</li>
              </ul>
            </li>
            <li>
              错误处理：
              <ul>
                <li>getDerivedStateFromError (渲染错误)</li>
                <li>componentDidCatch (捕获错误)</li>
              </ul>
            </li>
          </ol>
        </section>
      </div>
    );
  }
}

export default LifecycleDemo;
