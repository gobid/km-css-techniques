import * as React from "react";
import SplitEditor from "./components/SplitEditor";
import { Example } from "./components/types";
import "./InteractiveApp.css";

const italicExample: Example = {
  defaultParentCSS: `
.collections-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  padding-bottom: 4rem;
  -moz-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}
  `,
  iframeUrl: "/examples/italic.com",
};

const gridMasterclassExample: Example = {
  defaultParentCSS: `
.grid {
  -webkit-align-content: start;
  -ms-flex-line-pack: start;
  align-content: start;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr 25%;
  grid-template-rows: 1fr 1fr 1fr 0.5fr;
}
  `,
  iframeUrl: "/examples/grid-masterclass",
};

export default function InteractiveApp(): JSX.Element {
  return (
    <SplitEditor
      exampleOne={italicExample}
      exampleTwo={gridMasterclassExample}
    />
  );
}
