import React, { useRef, useState, useEffect } from "react";
interface InstructionsProps {
    curr_step: number;
}

export default function Instructions({curr_step}:InstructionsProps): JSX.Element {

    function showStep(curr_step) {
        if (curr_step==1) {
            return `The goal of this step is to identify a common layout feature between 
                    2-5 example websites. First explore the layouts of the different websites. 
                    Then, identify and describe a specific shared feature.`
        }
        if (curr_step==2) {
            return `You have just created a grouping of websites that share a layout feature. 
                    The goal of step 2 is to identify layout differences that you find 
                    within that grouping; What are the ways that distinguish certain websites 
                    within a broader shared layout.`
        }
        if (curr_step==3) {
            return `Back in step 1, you identified a layout feature shared by a group of 
                    websites. The goal of this step is to identify the CSS and/or HTML code that 
                    is responsible for that layout feature, and to note the complexities behind 
                    the relationship between CSS/HTML and the layouts they produce.`
        }
        if (curr_step==4) {
            return `Back in step 2, you identified differences between the group of websites that shared your 
                    identified layout feature. The goal of this step is to 
                    identify the CSS and/or HTML code that is responsible for those differences in layout, and to 
                    note the complexities behind the relationship between CSS/HTML and the layouts they produce`
        }
    }
    return (
        <div className = "instructions">
            <h1>Step:{curr_step}:</h1>
            <div>{showStep(curr_step)}</div>
        </div>
    )
}
