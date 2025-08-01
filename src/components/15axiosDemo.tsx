import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, message, Spin } from "antd";
const AxiosComponent: React.FC = () => {
  const [userId, setUserId] = useState(1); // 假设初始用户ID为1
  const [data, setData] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/")
  //       .then((response) => {
  //         console.log(2222, response);
  //         setData(response.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(2222, error);
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        console.log(2222, response);
        setData(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        // console.log(2222, error);
        setError(error.message);
        message.error(error.message);
        // setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  return (
    <div>
      <div>请求结果</div>
      {loading ? <Spin></Spin> : <pre>{JSON.stringify(data, null, 2)}</pre>}

      <Input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        placeholder="Basic usage"
      />
    </div>
  );
};

export default AxiosComponent;
