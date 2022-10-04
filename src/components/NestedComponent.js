import React from 'react'

const NestedComponent = ({ stateAny, numState }) => {
    return (
        <>
            <p>________________________</p>
            <p>Inside Nested Component</p>
            <p>Nested passed in anyState: {stateAny}</p>
            <p>Nested passed in num: {numState}</p>
        </>
    )

}



export default NestedComponent;