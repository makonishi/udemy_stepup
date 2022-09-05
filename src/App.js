import { useState } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

function App() {
  console.log('App');
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const onChangeText = (e) => setText(e.target.value); 
  const onClickOpen = () => {
    setOpen(!open);
  }
  return (
    <div className="App"> 
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}/>
    </div>
  );
}

export default App;
