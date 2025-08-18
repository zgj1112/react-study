import React, { useState, useMemo, useCallback } from "react";

interface Item {
  name: string;
  age: number;
  address: string;
}

//memo参数不重新渲染 useMemo 缓存计算结果 callback方法不重新渲染

// React.memo 避免无关更新导致子组件重渲染 
interface UserCardProps {
  users: Item[];
  onDelete: (index: number) => void;
}

const UserCard = React.memo((props: UserCardProps) => {
  console.log("UserCard 渲染了");
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>用户列表</h3>
      {props.users.map((user, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <p>姓名: {user.name}</p>
          <p>年龄: {user.age}</p>
          <p>地址: {user.address}</p>
          <button onClick={() => props.onDelete(index)}>删除</button>
        </div>
      ))}
    </div>
  );
});

function UseMemoAndCallbackDemo() {
  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState<Item[]>([
    { name: "张三", age: 25, address: "北京" },
    { name: "李四", age: 30, address: "上海" },
    { name: "王五", age: 28, address: "广州" },
  ]);

  // useMemo 缓存计算结果
  const averageAge = useMemo(() => {
    console.log("计算平均年龄...");
    return (
      users.reduce((sum, user) => sum + user.age, 0) / users.length
    ).toFixed(1);
  }, [users]);

  // useCallback 缓存函数引用
  const handleDelete = useCallback(
    (index: number) => {
      setUsers((prev) => prev.filter((_, i) => i !== index));
    },
    [] // 依赖空数组，只有第一次渲染创建函数
  );

  return (
    <div>
      <h2>useMemo & React.memo & useCallback 示例</h2>
      {/* <button onClick={() => setCount(count + 1)}>增加计数 ({count})</button> */}
      <button
        onClick={() =>
          setUsers([...users, { name: "新用户", age: 22, address: "深圳" }])
        }
      >
        添加用户
      </button>

      <p>平均年龄: {averageAge}</p>

      <UserCard users={users} onDelete={handleDelete} />
    </div>
  );
}

export default UseMemoAndCallbackDemo;
