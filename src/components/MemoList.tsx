// components/MemoList.tsx
import React from "react";

type MemoListProps = {
  memos: { id: number; title: string }[];
  onSelect: (id: number) => void;
};

const MemoList: React.FC<MemoListProps> = ({ memos, onSelect }) => {
  return (
    <div>
      {memos.map((memo) => (
        <div key={memo.id} onClick={() => onSelect(memo.id)}>
          {memo.title}
        </div>
      ))}
    </div>
  );
};

export default MemoList;
