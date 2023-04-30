import React, { useRef, useState, useEffect } from "react";

export default function ProcessManagement(): JSX.Element {

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
    return (
        <div className = "process-management">
            <button className = "toggle-sheets btn" onClick={() => toggleDiv()}>
                Click to {showProcess ? "show" : "hide"} process
            </button>
            <div id = "p-manage" className = "iframe-sheets">
             <iframe 
                    src = "https://docs.google.com/spreadsheets/d/13nOm8UYbmZ9kSphnMYQIldHQfixlQR-EMxPuUEPZ1KE/edit?usp=sharing"
                    width = {1300}
                    height = {700}
                    frameBorder="0"
                    className={`border border-gray-200 rounded`}
             ></iframe>
            </div>
        </div>
    )
}
