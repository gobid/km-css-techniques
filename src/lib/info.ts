import { Info, Declaration } from "./types";
import { examples } from "./examples";

//scan through all declaration including media and create a list of unique declarations
const uniqueDeclarations = Array.from(
    new Set(
        examples
          .map((ex) => {
            var a = ex.declarations.map((dec) => dec.name);
            var b = ex.media.map((m) => m.declarations.map((dec) => dec.name)).flat();
            return b.concat(a)
          })
          .flat()
      )
);
// definition and values taken from: https://developer.mozilla.org/en-US/
const declarationInformation = {
  "display": {
    definition:
      "The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.",
    values: ["none", "block", "inline-block", "flex", "grid"],
  },
  "grid-template-columns": {
    definition:
      "The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.",
    values: ["none", "100px 1fr", "minmax(100px, 1fr)", "repeat(3, 200px)"],
  },
  "grid-gap": {
    definition:
      "The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.",
    values: ["0", "10%", "1em", "10px 20px", "calc(20px + 10%)"],
  },
  "grid-template-rows": {
    definition:
      "The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.",
    values: [
      "auto",
      "40px 4em 40px;",
      "1fr 2fr 1fr",
      "3ch auto minmax(10px, 60px)",
    ],
  },
  "grid-column-gap": {
    definition:
      "The column-gap CSS property sets the size of the gap (gutter) between an element's columns.",
    values: ["0", "10%", "1em", "20px"],
  },
  "grid-row-gap": {
    definition:
      "The row-gap CSS property sets the size of the gap (gutter) between an element's rows.",
    values: ["0", "10%", "1em", "20px"],
  },
  "flex-wrap": {
    definition:
      "The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.",
    values: ["nowrap", "wrap", "wrap-reverse"],
  },
  "gap": {
    definition:
      "The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.",
    values: ["0", "10%", "1em", "10px 20px", "calc(20px + 10%)"],
  },
  "margin": {
    definition:
      "The margin CSS shorthand property sets the margin area on all four sides of an element.",
    values: ["0", "5% 0", "10px 50px 20px", "10px 50px 20px 0"],
  },
  "padding-bottom": {
    definition:
      "The padding-bottom CSS property sets the height of the padding area on the bottom of an element.",
    values: ["0", "10%", "1em", "10px 20px", "1ch"],
  },
  "position": {
    definition:
      "The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.",
    values: ["static", "relative", "absolute", "sticky", "fixed"],
  },
};
//given a declaration, its returns list of websites that use that declaration
function getWebsites(technique): string[] {
  const listOfSites = [];
  examples.map((ex) => {
    var hasTechnique = false;
    ex.declarations.map((d) => {
      if (d.name == technique) {
        hasTechnique = true;
      }
    });
    if (hasTechnique) {
      listOfSites.push(ex.name);
    }
  });
  return listOfSites;
}
//given a declaration it returns info data which has definition of declaration, values that can be use in declaration, and websites using it
export function getInfo(dec: Declaration): Info {
  return {
    name: dec.name,
    definition: declarationInformation[dec.name].definition,
    values: declarationInformation[dec.name].values,
    websites: getWebsites(dec.name),
  };
}
