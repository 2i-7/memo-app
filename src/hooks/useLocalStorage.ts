import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // LocalStorage からデータを取得
  const storedValue = localStorage.getItem(key);

  // ロードされた値があればそれを使い、なければ初期値を使う
  const [value, setValue] = useState<T>(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // value が変わった時に LocalStorage に保存
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
