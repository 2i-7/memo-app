// components/MemoEditor.tsx
import React, { useState } from "react";

type MemoEditorProps = {
  memo: { id: number; title: string; content: string };
  onSave: (id: number, title: string, content: string) => void;
};

const MemoEditor: React.FC<MemoEditorProps> = ({ memo, onSave }) => {
  const [title, setTitle] = useState(memo.title);
  const [content, setContent] = useState(memo.content);

  return (
    <div>
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
      <button onClick={() => onSave(memo.id, title, content)}>保存</button>
    </div>
  );
};

export default MemoEditor;
