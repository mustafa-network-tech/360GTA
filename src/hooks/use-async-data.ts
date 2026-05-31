"use client";

import { useEffect, useState } from "react";

/**
 * Genel amaçlı async veri yükleme hook'u.
 * Servis çağrılarını sarmalar; ileride Supabase'e geçildiğinde
 * yalnızca servis içi değişir, bu hook aynı kalır.
 */
export function useAsyncData<T>(loader: () => Promise<T>, initial: T) {
  const [data, setData] = useState<T>(initial);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    loader()
      .then((res) => {
        if (mounted) setData(res);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
}
