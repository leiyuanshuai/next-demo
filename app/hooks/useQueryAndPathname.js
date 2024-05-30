// hooks/useQueryAndPathname.js
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export function useQueryAndPathname() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = {};
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
      setQuery(params);
    }
  }, [searchParams]);

  return { pathname, query };
}
