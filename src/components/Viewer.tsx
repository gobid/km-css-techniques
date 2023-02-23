import React, { useRef, useEffect } from "react";
import { declarationsToCSSString } from "../lib/examples";
import { Example } from "../lib/types";

interface ViewerProps {
  example: Example;
  size: number;
}

export default function Viewer({ example, size }: ViewerProps): JSX.Element {
  const viewerRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (viewerRef.current) {
      const newCSSValue = declarationsToCSSString(
        example.declarations,
        example.defaultParentClassname
      );
      viewerRef.current?.contentWindow.postMessage(newCSSValue);
    }
  }, [example.declarations, example.defaultParentClassname]);

  return (
    <iframe
      title="example-1"
      src={example.iframeUrl}
      width={`${size}%`}
      height={800}
      frameBorder="0"
      className="border border-gray-200 rounded"
      ref={viewerRef}
    ></iframe>
  );
}
