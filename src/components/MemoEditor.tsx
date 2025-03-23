import React, { useState, useEffect } from 'react';

interface Memo {
  id: string;
  title: string;
  body: string;
}

interface MemoEditorProps {
  onSave: (memo: Memo) => void;
  onCancel: () => void;
  selectedMemo: Memo | null;
}

const MemoEditor: React.FC<MemoEditorProps> = ({ onSave, onCancel, selectedMemo }) => {
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
      <div className='input-container'>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title" 
        />
      </div>
      <div className='textarea-container'>
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          placeholder="Body" 
        />
      </div>
      <div className='editor-actions'>
        <button onClick={handleSave}>{selectedMemo ? 'Update' : 'Save'}</button>
        {selectedMemo && (
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default MemoEditor;
