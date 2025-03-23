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
    if (title.length > 100) {
      alert("タイトルは100文字以内で入力してください");
      return;
    }

    if (body.length > 1000) {
      alert("本文は1000文字以内で入力してください");
      return;
    }

    if (!selectedMemo) return;
    onSave({ ...selectedMemo, title, body });
  };

  return (
    <div className="memo-editor">
      {isEditing ? (
        <>
          <input 
            className="memo-title-input" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="タイトルを入力"
          />
          <textarea 
            className="memo-body-textarea" 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
            placeholder="本文を入力"
          />
          <div className="memo-actions">
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="cancel-button" onClick={onCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h2>{selectedMemo?.title}</h2>
          <p>{selectedMemo?.body.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}</p>
        </>
      )}
    </div>
  );
};

export default MemoEditor;
