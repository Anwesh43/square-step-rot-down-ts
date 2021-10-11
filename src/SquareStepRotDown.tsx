import React from 'react'
import withContext  from './withContext'
import {useStyle} from './hooks'
interface SSProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function 
}
const SquareStepRotDown : React.FC<SSProps> = (props : SSProps) => {
    const {w, h, scale, onClick} = props
    const {squareStyle} = useStyle(w, h, scale)
    return (
        <div style = {squareStyle()} onClick = {() => onClick()}>
        </div>
    )
}

export default SquareStepRotDown