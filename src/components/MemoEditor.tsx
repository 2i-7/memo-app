import React, { useState, useEffect } from 'react';

interface Memo {
  id: string;
  title: string;
  body: string;
}

interface MemoEditorProps {
  onSave: (memo: Memo) => void;
  selectedMemo: Memo | null;
}

const MemoEditor: React.FC<MemoEditorProps> = ({ onSave, selectedMemo }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (selectedMemo) {
      setTitle(selectedMemo.title);
      setBody(selectedMemo.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [selectedMemo]);

  const handleSave = () => {
    onSave({ id: selectedMemo?.id || '', title, body });
    setTitle('');
    setBody('');
  };

  return (
    <div className="memo-editor">
      <h2>{selectedMemo ? 'Edit Memo' : 'New Memo'}</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
      <button onClick={handleSave}>{selectedMemo ? 'Update' : 'Save'}</button>
    </div>
  );
};

export default MemoEditor;
