import React from "react";
import Explore from "./components/Explore";
import { examples } from "./lib/examples";

console.log(examples);

export default function NewApp(): JSX.Element {
  return (
    <div>
      <Explore firstExample={examples[0]} secondExample={examples[1]} />
    </div>
  );
}
