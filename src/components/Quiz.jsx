import { useState } from 'react'
import PlayButton from "./PlayButton"
import ChoiceButtonList from "./ChoiceButtonList"
import Form from "./Form"

const Quiz = (props) => {
  const [tempArray, setTempArray] = useState(null);
  const [correctObj, setCorrectObj] = useState(null);
  
  const [wrongCount, setWrongCount] = useState(0)
  const [scoreCount, setScoreCount] = useState(0);
  const [message, setMessage] = useState("");

  const [clicked, setClicked] = useState(false)
  const [show, setShow] = useState("none")
  
  return (
    <div className="gameplay-container">
      <div className="display-screen-container">
        <h4 id="score">{`${scoreCount} pts`}</h4>
        <h4 id="xxx">{[...Array(wrongCount)].map(e => 'X')}</h4>
        <br />
      </div>

      <div>
        <PlayButton
          setCorrectObj={setCorrectObj}
          setTempArray={setTempArray}
          clicked={clicked} />
      </div>

      <div className="button-container">
        <ChoiceButtonList
          tempArray={tempArray}
          correctObj={correctObj}
          setClicked={setClicked}
          setMessage={setMessage}
          wrongCount={wrongCount}
          setScoreCount={setScoreCount}
          setWrongCount={setWrongCount}
          setShow={setShow}
        />
        <p className="result-message">{message}</p>
      </div>

      <Form
        score={scoreCount}
        scores={props.scores}
        setScores={props.setScores}
        show={show} />
    </div>
  );
}

export default Quiz;