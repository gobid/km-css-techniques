import * as React from "react";
import { useState, useRef } from "react";
import "./InteractiveApp.css";

const INITIAL_STYLES = `
.grid {
  display: grid;
  grid: repeat(2, 200px) / auto-flow;
  gap: 2rem;
}
`;

export default function InteractiveApp(): JSX.Element {
  const [cssStyles, setCssStyles] = useState(INITIAL_STYLES);

  const myIframeRef = useRef<HTMLIFrameElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const nextValue = e.target.value;

    setCssStyles(nextValue);

    if (myIframeRef) {
      myIframeRef.current?.contentWindow.postMessage(nextValue);
    }
  };

  return (
    <div>
      <iframe
        title="grid-1"
        src="/examples/grid-1.html"
        width={500}
        height={500}
        frameBorder="0"
        ref={myIframeRef}
      ></iframe>

      <textarea className="input" onChange={handleChange} value={cssStyles} />
    </div>
  );
}
