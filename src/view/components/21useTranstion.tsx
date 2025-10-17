import React, { useState, useTransition } from "react";
import axios from "axios";
import { List } from "antd";

function useTranstionDemo() {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState<Item[]>([]);
  const [isPending, startTransition] = useTransition();
  const handleLogin = async () => {
    const res = await axios.post("/api/login", {
      username: "admin",
      password: "123456",
    });
    console.log(res.data);

    setMsg(res.data.message);
  };
  const handleTest = async () => {
    const res = await axios.get("/api/users");
    console.log(res.data);

    startTransition(() => {
      setUser(res.data.data);
    });
  };

  interface Item {
    name: string;
    age: number;
    address: string;
  }

  return (
    <div>
      <h2>模拟登录</h2>
      <button onClick={handleLogin}>登录</button>
      <button onClick={handleTest}>测试</button>
      <p style={{ color: "#000" }}>{msg}</p>
      {/* <p style={{ color: "#000" }}>{JSON.stringify(user)}</p> */}
      <List
        dataSource={user}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      ></List>
    </div>
  );
}

export default useTranstionDemo;
