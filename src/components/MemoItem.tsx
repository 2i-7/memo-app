import React from 'react';

interface Memo {
  title: string;
  content: string;
}

interface MemoItemProps {
  memo: Memo;
  index: number;
  setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
}

const MemoItem: React.FC<MemoItemProps> = ({ memo, index, setMemos }) => {
  const handleDelete = () => {
    setMemos((prevMemos) => prevMemos.filter((_, i) => i !== index));
  };

  return (
    <li>
      <h3>{memo.title}</h3>
      <p>{memo.content}</p>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
}

export default MemoItem;
