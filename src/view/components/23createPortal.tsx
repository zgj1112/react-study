//createPortal用于插入到任意dom
import { createPortal } from "react-dom";
function useCreatePortalDemo() {
  // const [msg, setMsg] = useState("");
  // const handleLogin = async () => {};
  // const handleTest = async () => {
  //   const res = await axios.get("/api/users");
  //   console.log(res.data);
  //   setMsg(res.data.data);
  // };

  return <div>{createPortal(<div>测试</div>, document.body)}</div>;
}

export default useCreatePortalDemo;
