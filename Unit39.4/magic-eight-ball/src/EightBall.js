import "./EightBall.css"
import React, {useState} from "react"
export default function EightBall(props){
    const randNum = () => Math.floor(Math.random()*props.answers.length)
    const [currColor, currColorChange] = useState('black')
    const [currMessage, currMessageChange] = useState('Think of a question')
    const changeEightBall = () => {
        const curNum = randNum()
        currColorChange(props.answers[curNum].color)
        currMessageChange(props.answers[curNum].msg)
        } 
    return(
        <div className="circle" onClick={changeEightBall} style={{backgroundColor: currColor}} >
            {currMessage}
        </div>
        
    )
}