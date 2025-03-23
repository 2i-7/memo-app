import React, { useState } from 'react';
import MemoList from './components/MemoList';
import MemoEditor from './components/MemoEditor';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

interface Memo {
  id: string;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const [memos, setMemos] = useLocalStorage<Memo[]>("memos", []);
  const [selectedMemo, setSelectedMemo] = useState<Memo | null>(null);

  const handleSave = (memo: Memo) => {
    let updatedMemos;
    if (memo.id) {
      updatedMemos = memos.map((m) => (m.id === memo.id ? memo : m));
    } else {
      const newMemo = { ...memo, id: Date.now().toString() };
      updatedMemos = [...memos, newMemo];
    }
    setMemos(updatedMemos);
    setSelectedMemo(null);
  };

  const handleDelete = (id: string) => {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    if (selectedMemo?.id === id) {
      setSelectedMemo(null);
    }
  };

  return (
    <div className="app-container">
      <div className="memo-list-container">
        <MemoList memos={memos} onDelete={handleDelete} onSelect={setSelectedMemo} />
      </div>
      <div className="memo-editor-container">
        <MemoEditor onSave={handleSave} selectedMemo={selectedMemo} />
      </div>
    </div>
  );
};

export default App;