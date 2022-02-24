import { ADDTEXT, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionsTypes"

export const increment=(payload)=>{
    return (
        {
                type : INCREMENT,
                payload 
        }
            )
}

export const decrement=()=>{
    return(
        {
                type : DECREMENT
        }
    )
}

export const addText=(payload)=>{
    return(
        {
            type : ADDTEXT,
            payload
        }
    )
}

export const handleShow=()=>{
    return(
        {
            type : HANDLESHOW
        }
    )
}