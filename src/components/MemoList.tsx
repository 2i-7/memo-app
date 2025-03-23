// components/MemoList.tsx
import React from "react";
import { Memo } from "../App"

type MemoListProps = {
  memos: Memo[];
  onSelectMemo: (memo: Memo) => void;
};

const MemoList: React.FC<MemoListProps> = ({ memos, onSelectMemo }) => {
  return (
    <div className="memo-list">
        <h2>メモ一覧</h2>
        <ul>
            {memos.map((memo) => (
                <li key={memo.id} onClick={() => onSelectMemo(memo)}>
                {memo.title}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default MemoList;
