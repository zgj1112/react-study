import React, { useEffect, useState } from "react";
// import { use } from "react";
import axios from "axios";
import { Input, message, Spin } from "antd";

const AxiosComponent: React.FC = () => {
  const [userId, setUserId] = useState(1); // 假设初始用户ID为1
  const [data, setData] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const ak = "RXOt9uZNSPkVNXHoPGMre6XNfI0oGb6m";
  // const url = `https://api.map.baidu.com/reverse_geocoding/v3/?ak=${ak}&output=json&coordtype=wgs84ll&location=${39.915},${116.404}`;
  const key= 'a5e07afd61efc384e4678795805447b1'
  const url = `https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${116.404},${39.915}`;
  const getData = async () => {
    // setLoading(true);

    // `https://jsonplaceholder.typicode.com/users/${userId}`
    return await axios
      .get(url)
      .then((response) => {
        console.log(2222, response);
        // setData(response.data);
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


  };

  // const dataPromise = getData();
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // use(dataPromise);
  return (
    <div>
      <div>请求结果</div>
      {/* {loading ? <Spin></Spin> : <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>{}</div>
      {/* <Input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        placeholder="Basic usage"
      /> */}
    </div>
  );
};

export default AxiosComponent;
