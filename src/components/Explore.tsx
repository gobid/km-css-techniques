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
  const [secondSetOfDeclarations, setSecondSetOfDeclarations] = useState(
    secondExample.declarations
  );
  const [secondSetOfMediaDeclarations, setSecondSetOfMediaDeclarations] = useState(
    secondExample.media
  );

  const [viewerSize, setViewerSize] = useState(30);

  useEffect(() => {
    setFirstSetOfDeclarations(firstExample.declarations);
    setFirstSetOfMediaDeclarations(firstExample.media)
    setSecondSetOfDeclarations(secondExample.declarations);
    setFirstSetOfMediaDeclarations(secondExample.media)
  }, [firstExample.declarations, firstExample.media, secondExample.declarations, secondExample.media]);

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
      </div>
      {/* ADD THE SHOW HIDE BUTTONS HERE */}
      <div className="flex flex-wrap w-full justify-between gap-y-4 mb-8"> 
        {/* THESE ARE THE TWO WEBSITE VIEWS */}
        <Viewer
          example={{ ...firstExample, declarations: firstSetOfDeclarations }}
          size={viewerSize}
        />

        <Viewer
          example={{ ...secondExample, declarations: secondSetOfDeclarations }}
          size={viewerSize}
        />
      </div>

      <div className="grid grid-cols-2 w-full max-w-6xl mx-auto bg-gray-100 rounded divide-x-2 mb-16">
        {/* THESE ARE THE TWO CSS EDITORS */}
        {/* {<div>
          {firstExample.media.rule}
          <div>{firstExample.media.declarations[0].name}: {firstExample.media.declarations[0].value}</div>
          <div>{firstExample.media.declarations[1].name}: {firstExample.media.declarations[1].value}</div>
        </div>} */}
        <CSSEditor
          declarations={firstSetOfDeclarations}
          diffAgainstDeclarations={secondSetOfDeclarations}
          media = {firstExample.media} //why not firstSetOfMediaDeclarations
          onChange={(declarations) => setFirstSetOfDeclarations(declarations)}
        />
        <CSSEditor
          declarations={secondSetOfDeclarations}
          diffAgainstDeclarations={firstSetOfDeclarations}
          media = {secondExample.media}
          onChange={(declarations) => setSecondSetOfDeclarations(declarations)}
        />
      </div>

      <div className="grid grid-cols-2 w-full max-w-6xl mx-auto bg-gray-100 rounded divide-x-2 mb-16">
        {/* THIS IS ANY HTML OR CHILD CSS */}
        {[firstExample, secondExample].map((example, i) => (
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
