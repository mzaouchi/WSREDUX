import { useDispatch, useSelector } from "react-redux"
import { addText, decrement, increment } from "../Redux/Actions"

const Counter =()=>{
    const count = useSelector(state => state.count)
    const inputText = useSelector(state => state.inputText)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment(5))}>+</button>
            <br/>
            <br/>
            <input onChange={(e)=>dispatch(addText(e.target.value))}/>
            <p>{inputText}</p>
        </div>
    )
}

export default Counter