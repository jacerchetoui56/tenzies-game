import React from 'react'

export default function Dice(props) {
    const { number, hold } = props
    return (
        <div
            className={`dice ${hold && 'hold'}`}
            onClick={props.toggleHold}
        >
            {number}
        </div>
    )
}
