import React, { useState } from "react";
import Explore from "./components/Explore";
import ProcessManagement from "./components/GoogleSheets";
import Instructions from "./components/Instructions";

import { examples } from "./lib/examples";

// @ts-ignore
export default function NewApp(): JSX.Element {
  const [firstSelectedIdx, setFirstSelectedIdx] = useState(0);
  const [secondSelectedIdx, setSecondSelectedIdx] = useState(1);
  const [selectedStep, setSelectedStep] = useState("One");

  return (
    <div className="body">
      <div className="step-btn" >
          <h1 className="text-center mb-2">Step: </h1>
          <select
            className="select"
            value={selectedStep}
            onChange={(e) => setSelectedStep(e.target.value)}
          >
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
       </div>
       <Instructions curr_step = {selectedStep}/>
       <ProcessManagement/>
      <div className="flex items-center justify-evenly relative mb-1 mt-2">
        <div>
          <h1 className="text-center">Compare: </h1>
          <div className="flex items-center justify-center relative">
            <label>
              <select
                className="select"
                value={firstSelectedIdx}
                onChange={(e) => setFirstSelectedIdx(Number(e.target.value))}
              >
                {examples.map((example, idx) => (
                  <option key={idx} value={idx}>
                    {example.name}
                  </option>
                ))}
              </select>
            </label>
            <p className="mx-4">vs</p>
            <label>
              <select
                className="select"
                value={secondSelectedIdx}
                onChange={(e) => setSecondSelectedIdx(Number(e.target.value))}
              >
                {examples.map((example, idx) => (
                  <option key={idx} value={idx}>
                    {example.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
      <Explore
        firstExample={examples[firstSelectedIdx]}
        secondExample={examples[secondSelectedIdx]}
        selectedStep={selectedStep}
      />
    </div>
  );
}
