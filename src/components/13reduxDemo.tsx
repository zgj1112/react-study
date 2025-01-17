import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTodo, toggleTodo, removeTodo, setFilter } from "../store/todoSlice";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "../store/userSlice";

const ReduxDemo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const { items, filter } = useSelector((state: RootState) => state.todos);
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.user
  );

  // Todo 相关操作
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo("");
    }
  };

  const filteredTodos = items.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // 用户登录模拟
  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(
        loginSuccess({
          id: 1,
          name: "测试用户",
          email: "test@example.com",
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(loginFailure("登录失败"));
    }
  };

  return (
    <div>
      <h2>Redux 状态管理示例</h2>

      <section>
        <h3>1. 用户状态</h3>
        {isLoading ? (
          <p>登录中...</p>
        ) : currentUser ? (
          <div>
            <p>当前用户: {currentUser.name}</p>
            <p>邮箱: {currentUser.email}</p>
            <button onClick={() => dispatch(logout())}>退出登录</button>
          </div>
        ) : (
          <button onClick={handleLogin}>登录</button>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>

      <section>
        <h3>2. Todo 列表</h3>
        <form onSubmit={handleAddTodo}>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="添加新任务"
          />
          <button type="submit">添加</button>
        </form>

        <div>
          <button onClick={() => dispatch(setFilter("all"))}>全部</button>
          <button onClick={() => dispatch(setFilter("active"))}>未完成</button>
          <button onClick={() => dispatch(setFilter("completed"))}>
            已完成
          </button>
        </div>

        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                删除
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ReduxDemo;
