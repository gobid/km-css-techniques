import React, { useRef, useEffect } from "react";
import { declarationsToCSSString } from "../lib/examples";
import { Example } from "../lib/types";

interface ViewerProps {
  example: Example;
  size: number;
  view: string;
  selectedStep: number;
}

export default function Viewer({ example, size, view, selectedStep }: ViewerProps): JSX.Element {
  const viewerRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (viewerRef.current) {
      const newCSSValue = declarationsToCSSString(
        example.declarations,
        example.media,
        example.scoped_declarations,
        example.defaultParentClassname
      );
      viewerRef.current?.contentWindow.postMessage({type: "NEW_CSS_VALUE", data: newCSSValue});
    }
  }, [example.declarations, example.media, example.scoped_declarations, example.defaultParentClassname]);

  return (
    <div className = "iframe-container">

      <iframe
        title="example-1"
        src={example.iframeUrl}
        width={`${size*2}%`}
        height={1000}
        frameBorder="0"
        className={`iframe ${view} border border-gray-200 rounded`}
        ref={viewerRef}
      ></iframe>
    </div>
  );
}
