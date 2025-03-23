import React, { useState } from "react";
import MemoList from "./components/MemoList";
import MemoEditor from "./components/MemoEditor";
import "./styles.css";

export type Memo = {
  id: number;
  title: string;
  content: string;
};

const initialMemos: Memo[] = [
  { id: 1, title: "最初のメモ", content: "これは最初のメモの内容です。" },
  { id: 2, title: "二つ目のメモ", content: "これは二つ目のメモの内容です。" },
];

function App() {
  const [memos, setMemos] = useState<Memo[]>(initialMemos);
  const [selectedMemo, setSelectedMemo] = useState<Memo | null>(null);

  const handleSelectMemo = (memo: Memo) => {
    setSelectedMemo(memo);
  };

  const handleUpdateMemo = (updatedMemo: Memo) => {
    setMemos(memos.map(m => (m.id === updatedMemo.id ? updatedMemo : m)));
  };

  return (
    <div className="app-container">
      <MemoList memos={memos} onSelectMemo={handleSelectMemo} />
      {selectedMemo && (
        <MemoEditor memo={selectedMemo} onUpdateMemo={handleUpdateMemo} />
      )}
    </div>
  );
}

export default App;
