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
            return `The goal of this step is to identify a common layout feature between 
                    2-6 example websites. To start, you will compare just two websites in 
                    order to come up with your common layout feature. Then you will examine 
                    if the other websites also share that feature.`
        }
        if (step=="Two") {
            return `You have just created a grouping of websites that share a layout feature. 
                    The goal of step 2 is to identify layout differences that you find 
                    within that grouping; What are the ways that distinguish certain websites 
                    within a broader shared layout.`
        }
        if (step=="Three") {
            return `In steps 1 & 2, you found similarities and differences between a group of 
                    websites. The goal of this step is to identify the CSS or HTML code that 
                    drive those similarities and differences, and to note the complexities behind 
                    the relationship between CSS/HTML and the layouts they produce.`
        }
    }
    return (
        <div className = "instructions">
            <h1>Overview:</h1>
            <div>{showStep(step)}</div>
        </div>
    )
}
