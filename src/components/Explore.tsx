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
  const [firstSetOfMediaDeclarations, setFirstSetOfMediaDeclarations] = useState(
    firstExample.media
  );
  const [firstSetOfScopedDeclarations, setFirstSetOfScopedDeclarations] = useState(
    firstExample.scoped_declarations
  );
  const [secondSetOfDeclarations, setSecondSetOfDeclarations] = useState(
    secondExample.declarations
  );
  const [secondSetOfMediaDeclarations, setSecondSetOfMediaDeclarations] = useState(
    secondExample.media
  );
  const [secondSetOfScopedDeclarations, setSecondSetOfScopedDeclarations] = useState(
    secondExample.scoped_declarations
  );

  const [viewerSize, setViewerSize] = useState(30);
  const [firstHidden, setFirstHidden] = useState(false);
  const [secondHidden, setSecondHidden] = useState(false);

  useEffect(() => {
    setFirstSetOfDeclarations(firstExample.declarations);
    setFirstSetOfMediaDeclarations(firstExample.media)
    setFirstSetOfScopedDeclarations(firstExample.scoped_declarations)
    setSecondSetOfDeclarations(secondExample.declarations);
    setSecondSetOfMediaDeclarations(secondExample.media)
    setSecondSetOfScopedDeclarations(secondExample.scoped_declarations)
  }, [firstExample.declarations, firstExample.media, firstExample.scoped_declarations, 
    secondExample.declarations, secondExample.media, secondExample.scoped_declarations]);

  const htmlExamplesToShow = [];

  if (!firstHidden) {
    htmlExamplesToShow.push(firstExample);
  }
  if (!secondHidden) {
    htmlExamplesToShow.push(secondExample);
  }
  let screenWidth = window.innerWidth;
  return (
    <div className="">
      {/* THIS IS THE SLIDER BAR */}
      <div className="w-full px-8 py-4 bg-gray-100 mb-8">
        <div>
          Window width: {(Math.round(screenWidth*viewerSize/100))}px
        </div>
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
            example={{ ...firstExample, declarations: firstSetOfDeclarations, media: firstSetOfMediaDeclarations, scoped_declarations: firstSetOfScopedDeclarations }}
            size={viewerSize}
          />
        )}

        {!secondHidden && (
          <Viewer
            example={{
              ...secondExample, declarations: secondSetOfDeclarations, media: secondSetOfMediaDeclarations, scoped_declarations: secondSetOfScopedDeclarations 
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
            scoped_declarations= {firstSetOfScopedDeclarations}
            onChange={(declarations, media, scoped_declarations) => (setFirstSetOfDeclarations(declarations), setFirstSetOfMediaDeclarations(media), 
              setFirstSetOfScopedDeclarations(scoped_declarations))}
          />
        )}
        {!secondHidden && (
          <CSSEditor
            declarations={secondSetOfDeclarations}
            diffAgainstDeclarations={firstSetOfDeclarations}
            media = {secondSetOfMediaDeclarations}
            scoped_declarations={secondSetOfScopedDeclarations}
            onChange={(declarations, media, scoped_declarations) => (setSecondSetOfDeclarations(declarations), setSecondSetOfMediaDeclarations(media),
              setSecondSetOfScopedDeclarations(scoped_declarations))}
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
