import React from 'react';

interface Memo {
  id: string;
  title: string;
  body: string;
}

interface MemoListProps {
  memos: Memo[];
  onDelete: (id: string) => void;
  onSelect: (memo: Memo) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, onDelete, onSelect }) => {
  return (
    <div className="memo-list">
      <h2>Memo List</h2>
      {memos.map((memo) => (
        <div key={memo.id} className="memo-item" onClick={() => onSelect(memo)}>
          <h3>{memo.title}</h3>
          <p>{memo.body}</p>
          <button onClick={(e) => { e.stopPropagation(); onDelete(memo.id); }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MemoList;
