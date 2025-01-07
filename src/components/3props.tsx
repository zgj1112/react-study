import React from 'react';

// 定义 props 的类型接口
interface UserProps {
  name: string;
  age: number;
  isAdmin?: boolean;  // 可选属性使用 ?
  hobbies: string[];
  onNameClick: (name: string) => void;
}

// 子组件
const UserCard: React.FC<UserProps> = ({ name, age, isAdmin = false, hobbies, onNameClick }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3 onClick={() => onNameClick(name)}>{name}</h3>
      <p>年龄: {age}</p>
      <p>管理员: {isAdmin ? '是' : '否'}</p>
      <p>爱好: {hobbies.join(', ')}</p>
    </div>
  );
};

// 主组件
const PropsDemo: React.FC = () => {
  // 处理点击事件的函数
  const handleNameClick = (name: string) => {
    alert(`你点击了用户: ${name}`);
  };

  return (
    <div>
      <h2>Props 示例</h2>
      
      {/* 传递基本props */}
      <UserCard 
        name="张三"
        age={25}
        hobbies={['读书', '游泳', '编程']}
        onNameClick={handleNameClick}
      />

      {/* 传递带有可选属性的props */}
      <UserCard 
        name="李四"
        age={30}
        isAdmin={true}
        hobbies={['篮球', '旅游']}
        onNameClick={handleNameClick}
      />
    </div>
  );
};

export default PropsDemo; 