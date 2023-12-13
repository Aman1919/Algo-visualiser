import React, {useState} from 'react';
import Canvas from './canvas';

function App() {
    const [flag,setFlag]=useState(false);
    const [choose,setChoose] =useState<string>("choose");
const onclick=()=>{
    setFlag(true);
}
  return (
    <div className="App flex">
      <header className='flex'>
        <nav className='flex'>
          <h2>
        Algo-visualiser</h2>
            <select value={choose} onChange={(e)=>setChoose(e.target.value)}>
                <option value='choose'>Choose</option>
                <option value='selectionsort'>Selection Sort</option>
                <option value='bubblesort'>Bubble Sort</option>
                <option value='insertionsort'>Insertion Sort</option>
            </select>
        </nav></header>
      {/*<CanvasComponent  Play ={flag}/>*/}
      <Canvas flag={flag} setFlag={setFlag} choose={choose}/>
        { choose!=='choose'&&<button onClick={onclick}>Play</button>}
    </div>
  );
}

export default App;
