import React, { useRef, useState, useEffect } from "react";
//this file is currently not being used since user entry is fully iterated into KM tool but this file embeds the KM sheet into the KM tool
export default function ProcessManagement(props): JSX.Element {

    const [showProcess, setProcessBtn] = useState(false);
    function toggleDiv(): void {
        var div = document.getElementById("p-manage");
        if (div.style.display === "none") {
          div.style.display = "flex";
        } 
        else {
          div.style.display = "none";
        }
        setProcessBtn(!showProcess)
    }

    function currentStep(step) {
        if (step == "One") {
            return "https://docs.google.com/spreadsheets/d/13nOm8UYbmZ9kSphnMYQIldHQfixlQR-EMxPuUEPZ1KE/edit#gid=0"
        }
        if (step == "Two") {
            return "https://docs.google.com/spreadsheets/d/13nOm8UYbmZ9kSphnMYQIldHQfixlQR-EMxPuUEPZ1KE/edit#gid=888605449"
        }
        if (step == "Three") {
            return "https://docs.google.com/spreadsheets/d/13nOm8UYbmZ9kSphnMYQIldHQfixlQR-EMxPuUEPZ1KE/edit#gid=1088961145"
        }
    }
    return (
        <div className = "process-management">
            <button className = "toggle-sheets btn" onClick={() => toggleDiv()}>
                Click to {showProcess ? "show" : "hide"} process
            </button>
            <div id = "p-manage" className = "iframe-sheets">
             <iframe 
                    src = {currentStep(props.curr_step)}
                    width = {1300}
                    height = {700}
                    frameBorder="0"
                    className={`responsive-iframe border border-gray-200 rounded`}
             ></iframe>
            </div>
        </div>
    )
}
