// src/App.tsx
import React, { useState } from 'react';
import MemoEditor from './components/MemoEditor';
import MemoList from './components/MemoList';
import { useLocalStorage } from './hooks/useLocalStorage';

// Memo型を定義
interface Memo {
  title: string;
  body: string;
}

const App: React.FC = () => {
  const [memos, setMemos] = useLocalStorage<Memo[]>('memos', []); // 型指定
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSaveMemo = (title: string, body: string) => {
    if (editingIndex === null) {
      setMemos([...memos, { title, body }]);
    } else {
      const updatedMemos = [...memos];
      updatedMemos[editingIndex] = { title, body };
      setMemos(updatedMemos);
    }
    setEditingIndex(null);
  };

  const handleDeleteMemo = (index: number) => {
    const updatedMemos = memos.filter((_, i) => i !== index);
    setMemos(updatedMemos);
  };

  const handleEditMemo = (index: number, title: string, body: string) => {
    setEditingIndex(index);
    // setTitle, setBody の代わりにメモの内容を直接編集
  };

  return (
    <div>
      <MemoEditor onSave={handleSaveMemo} />
      <MemoList memos={memos} onDelete={handleDeleteMemo} onEdit={handleEditMemo} />
    </div>
  );
};

export default App;
