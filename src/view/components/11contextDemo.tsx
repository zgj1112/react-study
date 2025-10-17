import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
// 1. 定义类型
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. 创建 Context，设定默认值（通常不会使用默认值功能）
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// 3. 创建 Provider 包裹组件
const FatherBox = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. 使用 Theme 的组件
const ChildrenBox = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const backgroundColor = theme === "light" ? "#ffffff" : "#1a1a1a";
  const textColor = theme === "light" ? "#000000" : "#ffffff";

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s",
      }}
    >
      <h1>当前主题：{theme}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        切换主题
      </button>
    </div>
  );
};

// 5. 主组件，使用 ThemeProvider 包裹
const AppBox = () => {
  return (
    <FatherBox>
      <ChildrenBox />
    </FatherBox>
  );
};

export default AppBox;
