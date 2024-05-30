"use client";
import { usePathname, useSearchParams, useParams, useRouter } from 'next/navigation'
import {useState, useEffect} from 'react'
export default function Page() {
const pathname = usePathname()
const searchParams = useSearchParams();
const [query, setQuery] = useState({});
console.log()
useEffect(() => {
  console.log('searchParams', typeof searchParams)
  const params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  setQuery(params);
}, [searchParams]);

if (!query) {
  return <div>Loading...</div>;
}
  return <div>
    <h2>路径:{pathname}</h2>
    <h2>query:{JSON.stringify(query, null, 2)}</h2>
  </div>
}
