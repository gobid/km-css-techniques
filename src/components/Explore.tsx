import React, { useState } from "react";
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

  const [viewerSize, setViewerSize] = useState(20);

  return (
    <div className="">
      <div>
        <input
          type="range"
          min={0}
          max={100}
          onChange={(e) => setViewerSize(Number(e.target.value))}
          value={viewerSize}
        />
      </div>

      <div className="flex flex-wrap w-full">
        <Viewer
          example={{ ...firstExample, declarations: firstSetOfDeclarations }}
          size={viewerSize}
        />

        <Viewer
          example={{ ...secondExample, declarations: secondSetOfDeclarations }}
          size={viewerSize}
        />
      </div>

      <div className="grid grid-cols-2 w-full max-w-6xl mx-auto bg-gray-100 rounded divide-x-2">
        <CSSEditor
          declarations={firstSetOfDeclarations}
          diffAgainstDeclarations={secondSetOfDeclarations}
          onChange={(declarations) => setFirstSetOfDeclarations(declarations)}
        />
        <CSSEditor
          declarations={secondSetOfDeclarations}
          diffAgainstDeclarations={firstSetOfDeclarations}
          onChange={(declarations) => setSecondSetOfDeclarations(declarations)}
        />
      </div>
    </div>
  );
}
