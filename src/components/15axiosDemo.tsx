import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosComponent: React.FC = () => {
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
  function handleAgeIncrease() {
    axios
      .get("http://localhost:3000")
      .then((response) => {
        console.log(2222, response);
      })
      .catch((error) => {
        console.log(2222, error);
      });
  }
 
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={handleAgeIncrease}>测试连接</button>
      <div>请求结果</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AxiosComponent;
