import React from 'react';

interface Memo {
  id: string;
  title: string;
  body: string;
}

interface MemoEditorProps {
  selectedMemo: Memo | null;
  onSave: (memo: Memo) => void;
  onCancel: () => void;
  isEditing: boolean;
}

const MemoEditor: React.FC<MemoEditorProps> = ({ selectedMemo, onSave, onCancel, isEditing }) => {
  const [title, setTitle] = React.useState(selectedMemo?.title || '');
  const [body, setBody] = React.useState(selectedMemo?.body || '');

  React.useEffect(() => {
    setTitle(selectedMemo?.title || '');
    setBody(selectedMemo?.body || '');
  }, [selectedMemo]);

  const handleSave = () => {
    if (!selectedMemo) return;
    onSave({ ...selectedMemo, title, body });
  };

  return (
    <div className="memo-editor">
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h2>{selectedMemo?.title}</h2>
          <p>{selectedMemo?.body}</p>
        </>
      )}
    </div>
  );
};

export default MemoEditor;
