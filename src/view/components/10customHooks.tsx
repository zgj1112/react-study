import { useState, useEffect } from 'react';

// 自定义 Hook 示例
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

// 自定义 Hook 示例2：处理 API 请求
const useApi = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const CustomHooksDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, loading, error } = useApi('https://api.example.com/data');

  return (
    <div>
      <h2>自定义 Hooks 示例</h2>
      <section>
        <h3>1. 防抖搜索</h3>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="输入搜索内容"
        />
        <p>防抖后的值: {debouncedSearchTerm}</p>
      </section>

      <section>
        <h3>2. API 请求 Hook</h3>
        {loading && <p>加载中...</p>}
        {error && <p>错误: {error.message}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </section>
    </div>
  );
};

export default CustomHooksDemo; 