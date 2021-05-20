import React, {useState} from 'react'
import s from './AlternativeAffairs.module.css'

function AlternativeAffairs() {
    let [number, setNumber] = useState(0);

    function plus() {
        return (
            number <= 9?setNumber(number + 1):setNumber(0)
        )
    }

    function minus() {
        return (
            number >= -9?setNumber(number - 1):setNumber(0)
        )
    }

    function reset() {
        return (
            setNumber(0)
        )
    }

    return (
        <div>
            <div className={
                number<=9&&number>=-9&&number!=0?s.play
                    :number==0 ? s.reset
                    :s.stop
            }>{number}</div>
            <button onClick={plus}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={minus}>-</button>
        </div>
    )
}

export default AlternativeAffairs
