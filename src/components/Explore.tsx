import React, { useState, useEffect } from "react";
import CSSEditor from "./CSSEditor";
import { Example } from "../lib/types";
import Viewer from "./Viewer";

interface ExploreProps {
  firstExample: Example;
  secondExample: Example;
}

//function handleChange(func1,func2, arg1, arg2){func1(arg1)}

export default function Explore({
  firstExample,
  secondExample,
}: ExploreProps): JSX.Element {
  const [firstSetOfDeclarations, setFirstSetOfDeclarations] = useState(
    firstExample.declarations
  );
  const [firstSetOfMediaDeclarations, setFirstSetOfMediaDeclarations] = useState(
    firstExample.media
  );
  const [secondSetOfDeclarations, setSecondSetOfDeclarations] = useState(
    secondExample.declarations
  );
  const [secondSetOfMediaDeclarations, setSecondSetOfMediaDeclarations] = useState(
    secondExample.media
  );

  const [viewerSize, setViewerSize] = useState(30);
  const [firstHidden, setFirstHidden] = useState(false);
  const [secondHidden, setSecondHidden] = useState(false);

  useEffect(() => {
    setFirstSetOfDeclarations(firstExample.declarations);
    setFirstSetOfMediaDeclarations(firstExample.media)
    setSecondSetOfDeclarations(secondExample.declarations);
    setSecondSetOfMediaDeclarations(secondExample.media)
  }, [firstExample.declarations, firstExample.media, secondExample.declarations, secondExample.media]);

  const htmlExamplesToShow = [];

  if (!firstHidden) {
    htmlExamplesToShow.push(firstExample);
  }
  if (!secondHidden) {
    htmlExamplesToShow.push(secondExample);
  }

  return (
    <div className="">
      {/* THIS IS THE SLIDER BAR */}
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
            media = {firstSetOfMediaDeclarations}
            onChange={(declarations, media) => (setFirstSetOfDeclarations(declarations), setFirstSetOfMediaDeclarations(media))}
          />
        )}
        {!secondHidden && (
          <CSSEditor
            declarations={secondSetOfDeclarations}
            diffAgainstDeclarations={firstSetOfDeclarations}
            media = {secondSetOfMediaDeclarations}
            onChange={(declarations) => setSecondSetOfDeclarations(declarations)}
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
