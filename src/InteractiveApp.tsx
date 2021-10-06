import * as React from "react";
import { useState, useRef } from "react";
import "./InteractiveApp.css";

const INITIAL_STYLES = `
.collections-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  padding-bottom: 4rem;
  -moz-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
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
        src="/examples/italic.com"
        width={1000}
        height={500}
        frameBorder="0"
        ref={myIframeRef}
      ></iframe>

      <textarea className="input" onChange={handleChange} value={cssStyles} />
    </div>
  );
}
