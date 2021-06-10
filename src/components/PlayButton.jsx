import { useState, useEffect } from 'react'
import {mp3Array} from '../sounds/index.js'
import useSound from 'use-sound'

export default function PlayButton(props) {
  const { setCorrectObj, setTempArray, clicked } = props;
  const [playing, setPlaying] = useState(false);
  const [randArr, setRandArr] = useState([...mp3Array].sort(() => Math.random() - 0.5))
  const [currentFile, setCurrentFile] = useState(randArr[0])

  useEffect(() => {

    setRandArr([...mp3Array].sort(() => Math.random() - 0.5))
    setTempArray(randArr)
    if (randArr[0] !== currentFile) {
      setCurrentFile(randArr[0])
      setCorrectObj(randArr[0])
    } else {
      setCurrentFile(randArr[1])
      setCorrectObj(randArr[1])
    }
  }, [clicked])

  const [play, { stop }] = useSound(currentFile.file, {
    onend: () => {
      console.log('ended');
      setPlaying(false)
    },
  })

  const handlePlay = () => {
    setPlaying(true)
    play()
  }

  const handleStop = () => {
    setPlaying(false)
    stop()
  }


  return (
    <div className="play-button">
      {playing ? (
        <i className="far fa-pause-circle" onClick={handleStop}></i>
      ) : (
        <i className="far fa-play-circle" onClick={handlePlay}></i>
      )}
    </div>
  )
}
