import React, { useRef, useState, useEffect } from "react";

export default function Instuctions(props): JSX.Element {
    const [step, setStep] = useState(props.curr_step)

    const step1 = "1"
    const step2 = "22"
    const step3 = "333"

    useEffect(() => {
        setStep(props.curr_step)
    }, [props.curr_step])
    


    function showStep(step) {
        if (step=="One") {
            return "ONEEE"
        }
        if (step=="Two") {
            return "TWOOO"
        }
        if (step=="Three") {
            return "THREEE"
        }
    }
    return (
        <div>
            <h1>Overview:</h1>
            <div>{showStep(step)}</div>
        </div>
    )
}
