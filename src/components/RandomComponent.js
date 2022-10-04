import React from 'react';
import NestedComponent from "./NestedComponent"

// syntax const Component = ({ props that passed in, must use same name as props in line 21 to line 26 in App.js })
const RandomComponent = ({ anyState, anyFunction, num, setNum, list, setList }) => {
    return (
        <>
            <div>
                <p>anyState: {anyState}</p> {/* print anyState value tat passed in, => 5*/}
                <p>num: {num}</p> {/* print num value tat passed in, => initial 10*/}

                {/* print list value => initial empty therefore Empty list,
                Short Hand If...Else (Ternary Operator)
                syntax boolCheck ? true : false
                if list.length > 0, print every list with name property
                else print Empty List */}
                {list.length > 0 ? list.map(listItem =>  
                    <p>List: {listItem.name}</p>) : 
                    <p>Empty list</p>}

                {/* button to use setNum() */}
                <button style={{padding: '10px', height: '20 px', borderRadius: '5px'}}
                    onClick={() => setNum(100)}>Click me to set num to 100</button>

                {/* button to use anyFunction() */}
                <button style={{padding: '10px', height: '20 px', borderRadius: '5px'}}
                    onClick={() => anyFunction()}>Click me to test anyFunction tat passed in.</button>

                {/* button to use setList() */}
                <button style={{padding: '10px', height: '20 px', borderRadius: '5px'}}
                    onClick={() => {
                        setList([{
                        name: 'hello'
                    }, {
                        name: 'world'
                    }])
                    console.log(list.length)}}>
                    Click me to add some data inside list
                </button>

                <NestedComponent 
                    stateAny={anyState}
                    numState={num}
                />
            </div>
        </>
    )
}

export default RandomComponent;