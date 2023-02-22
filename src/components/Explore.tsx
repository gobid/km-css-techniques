import React, { useState, useEffect } from "react";
import CSSEditor from "./CSSEditor";
import { Example } from "../lib/types";
import Viewer from "./Viewer";

interface ExploreProps {
  firstExample: Example;
  secondExample: Example;
}

export default function Explore({
  firstExample,
  secondExample,
}: ExploreProps): JSX.Element {
  const [firstSetOfDeclarations, setFirstSetOfDeclarations] = useState(
    firstExample.declarations
  );
  const [secondSetOfDeclarations, setSecondSetOfDeclarations] = useState(
    secondExample.declarations
  );

  const [viewerSize, setViewerSize] = useState(40);

  const [firstHidden, setFirstHidden] = useState(false);
  const [secondHidden, setSecondHidden] = useState(false);

  useEffect(() => {
    setFirstSetOfDeclarations(firstExample.declarations);
    setSecondSetOfDeclarations(secondExample.declarations);
  }, [firstExample.declarations, secondExample.declarations]);

  const htmlExamplesToShow = [];

  if (!firstHidden) {
    htmlExamplesToShow.push(firstExample);
  }

  if (!secondHidden) {
    htmlExamplesToShow.push(secondExample);
  }

  return (
    <div className="">
      <div className="w-full px-8 py-4 bg-gray-100 mb-8">
        <input
          type="range"
          min={0}
          max={100}
          onChange={(e) => setViewerSize(Number(e.target.value))}
          value={viewerSize}
          className="w-full"
        />

        <div className="flex gap-2">
          <button className="btn" onClick={() => setFirstHidden(!firstHidden)}>
            {firstHidden ? "Show" : "Hide"} Example 1{" "}
          </button>
          <button
            className="btn"
            onClick={() => setSecondHidden(!secondHidden)}
          >
            {secondHidden ? "Show" : "Hide"} Example 2{" "}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-between gap-y-4 mb-8">
        {!firstHidden && (
          <Viewer
            example={{ ...firstExample, declarations: firstSetOfDeclarations }}
            size={viewerSize}
          />
        )}

        {!secondHidden && (
          <Viewer
            example={{
              ...secondExample,
              declarations: secondSetOfDeclarations,
            }}
            size={viewerSize}
          />
        )}
      </div>

      <div className="grid grid-cols-2 w-full max-w-6xl mx-auto bg-gray-100 rounded divide-x-2 mb-16">
        {!firstHidden && (
          <CSSEditor
            declarations={firstSetOfDeclarations}
            diffAgainstDeclarations={secondSetOfDeclarations}
            onChange={(declarations) => setFirstSetOfDeclarations(declarations)}
          />
        )}

        {!secondHidden && (
          <CSSEditor
            declarations={secondSetOfDeclarations}
            diffAgainstDeclarations={firstSetOfDeclarations}
            onChange={(declarations) =>
              setSecondSetOfDeclarations(declarations)
            }
          />
        )}
      </div>

      <div className="grid grid-cols-2 w-full max-w-6xl mx-auto bg-gray-100 rounded divide-x-2 mb-16">
        {htmlExamplesToShow.map((example, i) => (
          <div className="p-4" key={i}>
            {example.htmlOutput && (
              <div>
                <h1>HTML Structure:</h1>
                <pre>{example.htmlOutput}</pre>
              </div>
            )}

            {example.children && (
              <div>
                <h1>Child CSS</h1>
                {example.children.map((child, i) => (
                  <div key={i}>
                    <pre>{child}</pre>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
