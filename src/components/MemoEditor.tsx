// src/components/MemoEditor.tsx
import React, { useState } from 'react';

interface MemoEditorProps {
  onSave: (title: string, body: string) => void;
  initialTitle?: string;
  initialBody?: string;
}

const MemoEditor: React.FC<MemoEditorProps> = ({ onSave, initialTitle = '', initialBody = '' }) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  const handleSave = () => {
    if (title.trim() && body.trim()) {
      onSave(title, body);
      setTitle('');
      setBody('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        maxLength={100}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        maxLength={1000}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MemoEditor;
