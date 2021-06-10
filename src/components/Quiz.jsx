import { useState, useEffect } from 'react'
import PlayButton from "./PlayButton"
import ChoiceButtonList from "./ChoiceButtonList"
import Form from "./Form"
import { useHistory } from 'react-router-dom'
import {
  mp3Array
} from '../sounds/index.js'

const Quiz = (props) => {
  //copy of mp3 Array 
  const [tempArray, setTempArray] = useState([...mp3Array]);
  // state of current correct choice
  const [correctObj, setCorrectObj] = useState({});
  // correct! or incorrect...
  const [message, setMessage] = useState("");
  const [scoreCount, setScoreCount] = useState(0);
  // const history = useHistory();
  //choice button click
  const [clicked, setClicked] = useState(false)
  //variables  (is this necessary?)
  const [wrongCount,  setWrongCount] = useState(0)
  const [show, setShow] = useState("none")


  //get random index from given array

  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }


  const [available, setAvailable] = useState([...mp3Array].sort(() => Math.random() - 0.5))
  const [played, setPlayed] = useState([])
  const [randIDX, setRandIDX] = useState(null)
  const [currentFile, setCurrentFile] = useState()

  console.log(currentFile?.name)
  

  function fetchFiles() {

    
    const chosen = available.splice(0,1)
    setCurrentFile(...chosen)
    available.push(...chosen)

    
    
    
   



    




    // !available && setAvailable(mp3Array)
    // setRandIDX(Math.floor(Math.random() * notPlayed.length))
    // const file = available


    // const notPlayed = mp3Array.filter(file => !played.includes(file))
    // console.log(notPlayed)
    
    // setPlayed([...played, mp3Array[randIDX]])
}


  useEffect(() => {

    fetchFiles()

    



    // const getPlayButtonValue = (tempArray) => {
    //   // setTempArray([...mp3Array])
    //   let index = getRandomIndex(tempArray);
    //   setCorrectIndex(index);
    //   let correct = tempArray.splice(index, 1);
    //   setCorrectObj(correct[0]);
    //   setTempArray(tempArray);
    //   console.log("inside pgetPlayButton");
    // }
    //  getPlayButtonValue(tempArray);
  }, [])










  //==== Displays xs ===//
  const displayStrikes = () => {
    let stringX = ""
    for (let i = 0; i < wrongCount; i++) {
      stringX += 'X '; 
    }
    return stringX
  }
 // ========================
  return (
    <div className="gameplay-container">
      <button onClick={fetchFiles}>Fetch Files</button>
      <div className="display-screen-container">
      <h4 id="score">{`${scoreCount} pts`}</h4>
        <h4 id="xxx">{displayStrikes()}</h4>
        <br />
        </div>
      
      <div>
        <PlayButton correctObj={correctObj} setCorrectObj={setCorrectObj}
        tempArray={tempArray} setTempArray={setTempArray}
        getRandomIndex={getRandomIndex} clicked={clicked} mp3Array={mp3Array} />
      </div>
      
      <div className="button-container">
        <ChoiceButtonList tempArray={tempArray} correctObj={correctObj}
          getRandomIndex={getRandomIndex} wrongCount={wrongCount} setClicked={setClicked}
          setTempArray={setTempArray} setMessage={setMessage} setScoreCount={setScoreCount}
          setWrongCount={setWrongCount} setShow={setShow} mp3Array={mp3Array}
        />
        <p className="result-message">{message}</p>
        {/* <i className="fas fa-volume-up"></i> */}
      </div>
    
      {/* <Form score={scoreCount} scores={props.scores} setScores={props.setScores} show={show} /> */}
  
    </div>
  );
}

export default Quiz;
  
  // // initialize play button
  // useEffect(() => {
  //   const getPlayButtonValue = (tempArray) => {
  //     // setTempArray([...mp3Array])
  //     let index = getRandomIndex(tempArray)
  //     let correct = tempArray.splice(index, 1)
  //     setCorrectObj(correct[0])
  //     setTempArray(tempArray)
  //     console.log("inside pgetPlayButton")
  //   }
  //   getPlayButtonValue(tempArray)
  // }, [clicked])
  
  //   //=========handle the button choise ========//
  // const handleChoice = (e) => {
  //   setClicked((prevClick) =>!prevClick)
  //   setTempArray([...mp3Array])
 
  //   if (correctObj.name === e.target.name) {
  //     setMessage("Correct!")
  //     setScoreCount((prevScore) => prevScore + 1)
  //   } else {
  //     // if three strikes, then you're done, else add an X
  //     if (wrongCount < 2) {
  //       setMessage("Incorrect..")
  //       setWrongCount((prevCount) => prevCount + 1)        
      
  //     } else {
  //       setWrongCount((prevCount) => prevCount + 1) 
  //       setMessage("Game Over") // this is where you'll display the high score form
  //       setShow("block")
  //     }
  //   }
    
  // }
  // =============================================//
  
