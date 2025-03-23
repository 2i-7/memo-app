// components/MemoEditor.tsx
import React, { useState } from "react";
import { Memo } from "../App";

type MemoEditorProps = {
  memo: Memo;
  onUpdateMemo: (updatedMemo: Memo) => void;
};

const MemoEditor: React.FC<MemoEditorProps> = ({ memo, onUpdateMemo }) => {
  const [title, setTitle] = useState(memo.title);
  const [content, setContent] = useState(memo.content);

  const handleSave = () => {
    onUpdateMemo({ ...memo, title, content});
  };

  return (
    <div className="memo-editor">
      <h2>メモ編集</h2>
       <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={100}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={1000}
      />
      <button onClick={handleSave}>保存</button>
    </div>
  );
};

export default MemoEditor;
