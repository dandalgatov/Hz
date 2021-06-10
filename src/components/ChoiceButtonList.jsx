import { useState, useEffect } from 'react'

export default function ChoiceButtonList(props) {
  const {
    tempArray,
    correctObj,
    setClicked,
    setMessage,
    wrongCount,
    setScoreCount,
    setWrongCount,
    setShow,
  } = props;

  const [buttons, setButtons] = useState();

  useEffect(() => {
    tempArray && setButtons([
      correctObj,
      tempArray[2],
      tempArray[3],
      tempArray[4]
    ].sort(() => Math.random() - 0.5));
  }, [correctObj])


  const handleChoice = (e) => {
    setClicked((prevClick) => !prevClick)
    if (correctObj.name === e.target.name) {
      setMessage("Correct!")
      setScoreCount((prevScore) => prevScore + 1)
    } else {
      if (wrongCount < 2) {
        setMessage("Incorrect..")
        setWrongCount((prevCount) => prevCount + 1)
      } else {
        setWrongCount((prevCount) => prevCount + 1)
        setMessage("Game Over")
        setShow("block")
      }
    }
  }
  return (
    <div className="button-list">
      {buttons && buttons.map((btn, index) => {
        return <button className={`choice-btn`} key={index}
          name={`${btn.name}`} onClick={handleChoice}
        >{btn.name}</button>
      })}
    </div>
  )
}
