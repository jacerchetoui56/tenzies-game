import { useState, useEffect } from 'react';
import './styles.css'
import Dice from './Dice';
// ! Confetti component is the celebration component 
import Confetti from 'react-confetti'
function App() {

  const [dices, setDices] = useState([]);
  const [win, setWin] = useState(false);


  const resetDices = () => {
    const array = []
    for (let i = 0; i < 10; i++) {
      array.push({
        number: Math.ceil(Math.random() * 6),
        hold: false
      })
    }
    setDices(array)
    setWin(false)
  }
  useEffect(() => {
    resetDices()
  }, [])

  function toggleHold(index) {
    const array = [...dices]
    array[index].hold = !array[index].hold
    setDices(array)
    // !checking win state
    const num = dices[0].number
    setWin(dices.every(dice => dice.number === num))
  }

  function roll() {
    !win ? setDices(oldDices => {
      return oldDices.map(dice =>
        dice.hold ?
          dice :
          {
            number: Math.ceil(Math.random() * 6),
            hold: false
          }
      )
    })
      :
      resetDices()
  }


  return (
    <>
      {win && <Confetti
        height={window.innerHeight}
        width={window.innerWidth}
      />}
      <div className='container'>
        <div className="sub-container">
          <h1 className='title'>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dices">
            {
              dices.map((dice, index) => {
                return <Dice
                  key={index}
                  toggleHold={() => !win && toggleHold(index)}
                  index={index}
                  {...dice}
                />
              })
            }
          </div>
          <button onClick={roll} className='roll-btn'>
            {win ? 'Play Again' : 'Roll'}
          </button>

        </div>

      </div></>
  );
}

export default App;
