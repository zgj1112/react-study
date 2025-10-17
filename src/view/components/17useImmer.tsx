import { useState } from "react";
import { useImmer } from "use-immer";

interface User {
  name: string;
  age: number;
  profile: {
    bio: string;
    preferences: {
      theme: "light" | "dark";
      notifications: boolean;
    };
  };
}

function UseImmerDemo() {
  //用state对比
  const [userx, setUserx] = useState<User>({
    name: "111",
    age: 25,
    profile: {
      bio: "前端开发者",
      preferences: {
        theme: "light",
        notifications: true,
      },
    },
  });

  const userxFun = () => {
    setUserx({
      ...userx,
      profile: {
        ...userx.profile,
        bio: "后端",
      },
    });
  };

  //   使用useimmer
  const [user, setUser] = useImmer<User>({
    name: "111",
    age: 25,
    profile: {
      bio: "前端开发者",
      preferences: {
        theme: "light",
        notifications: true,
      },
    },
  });

  const updateTheme = () => {
    setUser((draft) => {
      draft.profile = {
        bio: "前端开发者1",
        preferences: {
          theme: "dark",
          notifications: false,
        },
      };
    });
  };

  const updateBio = (newBio: string) => {
    setUser((draft) => {
      draft.profile.bio = newBio;
    });
  };

  return (
    <div className="user-profile">
      <span>usestate</span>
      <h2>{userx.name}</h2>
      <p>年龄: {userx.age}</p>
      <p>个人简介: {userx.profile.bio}</p>
      <p>主题: {userx.profile.preferences.theme}</p>

      <button onClick={userxFun}>更新简介</button>

      <span>useimmer</span>
      <h2>{user.name}</h2>
      <p>年龄: {user.age}</p>
      <p>个人简介: {user.profile.bio}</p>
      <p>主题: {user.profile.preferences.theme}</p>

      <button onClick={updateTheme}>切换主题</button>
      <button onClick={() => updateBio("热爱编程的开发者")}>更新简介</button>
    </div>
  );
}

export default UseImmerDemo;
