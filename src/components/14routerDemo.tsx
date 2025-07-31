import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";

// 首页组件
const Home = () => (
  <div>
    <h2>首页</h2>
    <p>欢迎访问我们的网站！</p>
  </div>
);

// 用户列表组件
const UserList = () => {
  const users = [
    { id: 1, name: "用户1" },
    { id: 2, name: "用户2" },
    { id: 3, name: "用户3" },
  ];

  return (
    <div>
      <h2>用户列表</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 用户详情组件
const UserDetail = () => {
  // const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <h2>用户详情</h2>
      {/* <p>用户ID: {id}</p> */}
      <button onClick={() => navigate(-1)}>返回</button>
    </div>
  );
};

// 登录页面
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    // 这里应该调用真实的登录逻辑
    // navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>登录页面</h2>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

// 受保护的页面
const Dashboard = () => (
  <div>
    <h2>仪表盘</h2>
    <p>这是一个受保护的页面，需要登录才能访问。</p>
  </div>
);

// 404页面
const NotFound = () => (
  <div>
    <h2>404 - 页面未找到</h2>
    <Link to="/">返回首页</Link>
  </div>
);

// 主路由组件
const RouterDemo = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/users">用户列表</Link>
            </li>
            <li>
              <Link to="/dashboard">仪表盘</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouterDemo;
