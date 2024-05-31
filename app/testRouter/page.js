// pages/testRouter.js

"use client"; // 声明为客户端组件

import { useSearchParams } from 'next/navigation';
import { Suspense, useState , useEffect} from 'react';

const TestRouterComponent = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState({});

  useEffect(() => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    setQuery(params);
  }, [searchParams]);

  return (
    <div>
      <h2>Query Parameters: {JSON.stringify(query, null, 2)}</h2>
    </div>
  );
};

const TestRouterPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestRouterComponent />
    </Suspense>
  );
};

export default TestRouterPage;

