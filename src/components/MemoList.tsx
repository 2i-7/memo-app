// src/components/MemoList.tsx
import React from 'react';
import MemoEditor from './MemoEditor';

interface Memo {
  title: string;
  body: string;
}

interface MemoListProps {
  memos: Memo[];
  onDelete: (index: number) => void;
  onEdit: (index: number, title: string, body: string) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, onDelete, onEdit }) => {
  return (
    <div>
      {memos.map((memo, index) => (
        <div key={index}>
          <h3>{memo.title}</h3>
          <p>{memo.body}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
          <button onClick={() => onEdit(index, memo.title, memo.body)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default MemoList;
