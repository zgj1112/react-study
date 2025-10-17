import { createBrowserRouter } from "react-router-dom";
import App from "src/App";

// ===== 页面组件导入 =====
// 基础组件
import StyleDemo from "@components/1style";
import RefDemo from "@components/2ref";
import PropsDemo from "@components/3props";
import ComponentsDemo from "@components/4components";

// Hooks相关组件
import UseStateDemo from "@components/5useState";
import UseEffectDemo from "@components/6useEffect";
import CustomHooksDemo from "@components/10customHooks";
import UseReducerDemo from "@components/16useReducer";

// 生命周期与渲染
import EventsDemo from "@components/7events";
import LifecycleDemo from "@components/8lifecycle";
import RenderingDemo from "@components/9rendering";

// 高级特性
import ContextDemo from "@components/11contextDemo";
import PerformanceDemo from "@components/12performance";
import ZustandDemo from "@components/13zustandDemo";
// import RouterDemo from "@components/14routerDemo";
import AxiosDemo from "@components/15axiosDemo";

import UseImmerDemo from "@components/17useImmer";
import UseSyncExternalStoreDemo from "@components/18useSyncExternalStore";
import UseLayoutEffectDemo from "@components/19useLayoutEffect";
import UseMemoDemo from "@components/20useMemo";
import UseTranstionDemo from "@components/21useTranstion";
import UseSuspenseDemo from "@components/22useSuspense";
import UseCreatePortalDemo from "@components/23createPortal";

import Mars3dTest from "@components/24mars3dTest";

// ===== 路由配置 =====
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 顶层容器组件
    children: [],
  },
  // 基础示例
  { path: "style", element: <StyleDemo /> },
  { path: "ref", element: <RefDemo /> },
  { path: "props", element: <PropsDemo /> },
  { path: "components", element: <ComponentsDemo /> },

  // Hooks
  { path: "usestate", element: <UseStateDemo /> },
  { path: "useeffect", element: <UseEffectDemo /> },
  { path: "customhooks", element: <CustomHooksDemo /> },

  // 生命周期与渲染
  { path: "events", element: <EventsDemo /> },
  { path: "lifecycle", element: <LifecycleDemo /> },
  { path: "rendering", element: <RenderingDemo /> },

  // 高级特性
  { path: "context", element: <ContextDemo /> },
  { path: "performance", element: <PerformanceDemo /> },
  { path: "zustand", element: <ZustandDemo /> },
  { path: "axios", element: <AxiosDemo /> },
  { path: "useReducer", element: <UseReducerDemo /> },
  { path: "useImmer", element: <UseImmerDemo /> },
  { path: "useSyncExternalStore", element: <UseSyncExternalStoreDemo /> },
  { path: "useLayoutEffect", element: <UseLayoutEffectDemo /> },
  { path: "useMemoDemo", element: <UseMemoDemo /> },
  { path: "useTranstionDemo", element: <UseTranstionDemo /> },
  { path: "useSuspense", element: <UseSuspenseDemo /> },
  { path: "createPortal", element: <UseCreatePortalDemo /> },

  // Mars3D 测试页面
  { path: "mars3dTest", element: <Mars3dTest /> },
]);

export default router;
