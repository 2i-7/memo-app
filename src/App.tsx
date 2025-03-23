import React, { useState, useEffect } from 'react';
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
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (memos.length > 0) {
      setSelectedMemo(memos[0]);
      setIsEditing(false);
    }
  }, [memos]);

  const handleSave = (memo: Memo) => {
    let updatedMemos;
    let newMemo = memo;

    if (memo.id) {
      updatedMemos = memos.map((m) => (m.id === memo.id ? memo : m));
    } else {
      const newMemo = { ...memo, id: Date.now().toString() };
      updatedMemos = [...memos, newMemo];
    }
    setMemos(updatedMemos);
    setSelectedMemo(newMemo);
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    if (selectedMemo?.id === id) {
      setSelectedMemo(updatedMemos.length > 0 ? updatedMemos[0] : null);
      setIsEditing(false);
    }
  };

  const handleNewMemo = () => {
    setSelectedMemo({ id: '', title: '', body: '' });
    setIsEditing(true);
  };

  const handleEdit = (memo: Memo) => {
    setSelectedMemo(memo);
    setIsEditing(true);
  };

  const handleSelectMemo = (memo: Memo) => {
    setSelectedMemo(memo);
    setIsEditing(false);
  };

  return (
    <div className="app-container">
      <div className="memo-list-container">
        <MemoList memos={memos} onDelete={handleDelete} onSelect={handleSelectMemo} onEdit={handleEdit} />
      </div>
      <div className="memo-editor-container">
        <button className="new-button" onClick={handleNewMemo}>New</button>
        <MemoEditor 
          onSave={handleSave} 
          selectedMemo={selectedMemo} 
          onCancel={() => setIsEditing(false)}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
};

export default App;