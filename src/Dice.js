import React from 'react'

export default function Dice({ number, hold, toggleHold }) {

    return (
        <div
            className={`dice ${hold && 'hold'}`}
            onClick={toggleHold}
        >
            {number}
        </div>
    )
}
