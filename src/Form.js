import React from 'react'
import Button from './Button'

function Form({ reqType, setReqType }) {
    return (
        <form className="button-container" onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText="users"
                setReqType={setReqType}
                reqType={reqType}
            />
            <Button buttonText="posts"
                setReqType={setReqType}
                reqType={reqType}
            />
            <Button buttonText="comments"
                setReqType={setReqType}
                reqType={reqType}
            />

        </form>
    )
}

export default Form