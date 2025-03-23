import React, { useState } from 'react';
import MemoList from './components/MemoList';
import MemoEditor from './components/MemoEditor';
import './App.css';

interface Memo {
  id: string;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [selectedMemo, setSelectedMemo] = useState<Memo | null>(null);

  const handleSave = (memo: Memo) => {
    if (memo.id) {
      setMemos((prevMemos) => prevMemos.map(m => m.id === memo.id ? memo : m));
    } else {
      const newMemo = { ...memo, id: Date.now().toString() };
      setMemos((prevMemos) => [...prevMemos, newMemo]);
    }
    setSelectedMemo(null);
  };

  const handleDelete = (id: string) => {
    setMemos((prevMemos) => prevMemos.filter(memo => memo.id !== id));
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