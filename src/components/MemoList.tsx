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
  onEdit: (memo: Memo) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, onDelete, onSelect, onEdit }) => {
  return (
    <div className="memo-list">
      <h2>Memo List</h2>
      {memos.map((memo) => (
        <div key={memo.id} className="memo-item" onClick={() => onSelect(memo)}>
          <h3>{memo.title}</h3>
          <p>{memo.body}</p>
          <div className="memo-actions">
            <button onClick={(e) => { e.stopPropagation(); onEdit(memo); }} className="edit-button">
              ✏️
            </button>
            <button onClick={(e) => { e.stopPropagation(); onDelete(memo.id); }} className="delete-button">
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemoList;
