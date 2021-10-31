import * as React from "react";
import { useState, useRef } from "react";
import { Example } from "./types";
import { diff as DiffEditor } from "react-ace";

import "brace/mode/css";
import "brace/theme/github";

interface SplitEditor {
  exampleOne: Example;
  exampleTwo: Example;
}

export default function SplitEditor({
  exampleOne,
  exampleTwo,
}: SplitEditor): JSX.Element {
  const [exampleOneParentCSS, setExampleOneParentCSS] = useState(
    exampleOne.defaultParentCSS
  );

  const exampleOneIframeRef = useRef<HTMLIFrameElement>(null);

  const handleParentCSSChangeForExampleOne = (nextValue: string) => {
    setExampleOneParentCSS(nextValue);

    exampleOneIframeRef.current?.contentWindow.postMessage(nextValue);
  };

  // ------

  const [exampleTwoParentCSS, setExampleTwoParentCSS] = useState(
    exampleTwo.defaultParentCSS
  );

  const exampleTwoIframeRef = useRef<HTMLIFrameElement>(null);
  const handleParentCSSChangeForExampleTwo = (nextValue: string) => {
    setExampleTwoParentCSS(nextValue);

    exampleTwoIframeRef.current?.contentWindow.postMessage(nextValue);
  };

  return (
    <div>
      <section className="flex gap-4">
        <iframe
          title="example-1"
          src={exampleOne.iframeUrl}
          width="50%"
          height={800}
          frameBorder="0"
          ref={exampleOneIframeRef}
        ></iframe>

        <iframe
          title="example-2"
          src={exampleTwo.iframeUrl}
          width="50%"
          height={800}
          frameBorder="0"
          ref={exampleTwoIframeRef}
        ></iframe>
      </section>

      <section className="flex text-black border-t mt-3">
        <DiffEditor
          value={[exampleOneParentCSS, exampleTwoParentCSS]}
          height="1000px"
          theme="github"
          width="100%"
          mode="css"
          onChange={(value) => {
            handleParentCSSChangeForExampleOne(value[0]);
            handleParentCSSChangeForExampleTwo(value[1]);
          }}
        />
      </section>
    </div>
  );
}
