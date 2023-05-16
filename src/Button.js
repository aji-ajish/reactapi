import React from 'react'

function Button({ reqType, setReqType, buttonText }) {
    const buttontxt = buttonText === reqType ? "selected" : null
    return (
        <button className="button buttontxt" type='button' onClick={() => setReqType(buttonText)} >{buttonText}</button>
    )
}

export default Button