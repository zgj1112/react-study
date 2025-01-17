import React, { createContext, useContext, useState } from 'react';

// 创建主题上下文
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 创建用户上下文
interface UserContextType {
  user: { name: string; role: string } | null;
  login: (userData: { name: string; role: string }) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider 组件
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const login = (userData: { name: string; role: string }) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

// 自定义 Hook
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};

// 示例组件
const ContextDemo = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <div style={{ 
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '20px'
    }}>
      <h2>Context 示例</h2>
      
      <section>
        <h3>主题控制</h3>
        <button onClick={toggleTheme}>
          切换到{theme === 'light' ? '深色' : '浅色'}主题
        </button>
      </section>

      <section>
        <h3>用户状态</h3>
        {user ? (
          <>
            <p>当前用户: {user.name}</p>
            <p>角色: {user.role}</p>
            <button onClick={logout}>退出登录</button>
          </>
        ) : (
          <button onClick={() => login({ name: '测试用户', role: '管理员' })}>
            登录
          </button>
        )}
      </section>
    </div>
  );
};

export default ContextDemo; 