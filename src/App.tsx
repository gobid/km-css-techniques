import React, { useState } from "react";
import Explore from "./components/Explore";
import { examples } from "./lib/examples";

// @ts-ignore
export default function NewApp(): JSX.Element {
  const [firstSelectedIdx, setFirstSelectedIdx] = useState(0);
  const [secondSelectedIdx, setSecondSelectedIdx] = useState(1);

  return (
    <div>
      <div className="mb-8 mt-4">
        <h1 className="text-center mb-4">Compare</h1>

        <div className="flex items-center justify-center">
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

      <Explore
        firstExample={examples[firstSelectedIdx]}
        secondExample={examples[secondSelectedIdx]}
      />
    </div>
  );
}
