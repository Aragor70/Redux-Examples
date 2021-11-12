import logo from './logo.svg';
import React, { useEffect, useMemo, useState } from 'react'
import Row from './Row';
import { PlayerContext } from './store/store';

const App = () => {

  const [arry, setArry] = useState([])

  useEffect(() => {
    setArry([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])
  }, [])

  const [ turn, setTurn ] = useState(0);

  const value = useMemo(() => ({ turn, setTurn, arry, setArry }), [arry, turn]);

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <main>
        <PlayerContext.Provider value={value}>
        <ul>
        {
          arry.map((element, y) => <Row key={y} subArry={element} y={y} />)
        }
        </ul>

        <h3 style={{ color: '#ccc'}}>
          Player {turn + 1}
        </h3>
        </PlayerContext.Provider>
      </main>
      
    </div>
  );
}

export default App;
