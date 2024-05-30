'use client';
import { useEffect, useState, Suspense } from 'react';

 function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // 模拟数据加载
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ message: 'Data loaded' });
        }, 4000);
      });
      setData(response);
    }

    fetchData();
  }, []);

  if (!data) {
    return null; // 注意这里返回 null
  }

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
export default function ExamplePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExampleComponent />
    </Suspense>
  );
}
