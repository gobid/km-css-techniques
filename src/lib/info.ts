import { Info, Declaration } from "./types";
import { examples } from "./examples";

//scan through all declaration including media and create a list of unique declarations
const uniqueDeclarations = Array.from(
  new Set(
    examples
      .map((ex) => {
        var a = ex.declarations.map((dec) => dec.name);
        var b = ex.media
          .map((m) => m.declarations.map((dec) => dec.name))
          .flat();
        return b.concat(a);
      })
      .flat()
  )
);
// definition and values taken from: https://developer.mozilla.org/en-US/ and W3
const declarationInformation = {
  display: {
    definition:
      "Specifies display behavior of an element / container. Note: With both flex and grid, individual components within the container scale in size as your resize the overall flex/grid container.",
    values: [
      "none",
      "block (new line, whole width)",
      "inline-block (inline, you can apply height width)",
      "flex (1D container, that can wrap into 2D)",
      "grid (2D grid container of blocks)",
    ],
    implicitDependencies: "N/A",
  },
  "grid-template-columns": {
    definition:
      "Specifies the number (and the widths) of columns in a grid layout. The values are a space separated list, where each value specifies the size of the respective column.",
    values: [
      "none",
      "pixels",
      "percentages",
      "fractions (i.e. 1fr)",
      "autofill With auto-fill by default you go down to 1 column at the smallest widths",
    ],
    implicitDependencies: " must use display:grid",
  },
  "grid-gap": {
    definition:
      "Defines the size of the gap between the rows and columns in a grid layout, and is a shorthand property for grid-row-gap and grid-column-gap.",
    values: [
      "percentages ex:10%",
      "em ex: 1em",
      "rem ex: 2rem",
      "pixels ex:10px 20px",
    ],
    implicitDependencies: "must use display:grid",
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
    implicitDependencies: "N/A",
  },
  "grid-column-gap": {
    definition:
      "Defines the size of the gap between the rows and columns in a grid layout, and is a shorthand property for grid-row-gap and grid-column-gap.",
    values: [
      "percentages ex:10%",
      "em ex: 1em",
      "rem ex: 2rem",
      "pixels ex:10px 20px",
    ],
    implicitDependencies: "must use display:grid",
  },
  "grid-row-gap": {
    definition:
      "Defines the size of the gap between the rows and columns in a grid layout, and is a shorthand property for grid-row-gap and grid-column-gap.",
    values: [
      "percentages ex:10%",
      "em ex: 1em",
      "rem ex: 2rem",
      "pixels ex:10px 20px",
    ],
    implicitDependencies: "must use display:grid",
  },
  "flex-wrap": {
    definition: "Specifies whether the flexible items should wrap or not.",
    values: [
      "nowrap",
      "wrap",
      "wrap-reverse (wrap but in reverse order)",
      "inherit (inherit parent's value)",
    ],
    implicitDependencies: "must use display:flex",
  },
  gap: {
    definition:
      "The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.",
    values: ["0", "10%", "1em", "10px 20px", "calc(20px + 10%)"],
    implicitDependencies: "N/A",
  },
  "grid-row-start": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "grid-row-end": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "width": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "align-items": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "justify-content": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "text-align": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "font-size": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "margin-bottom": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "margin-left": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "padding-left": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "overflow-x": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "flex": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "min-height": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "box-shadow": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "padding": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "border-radius": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "background": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "color": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "flex-direction": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  "transition": {
    definition:
      "INSER DEF",
    values: ["INSERT VALUES"],
    implicitDependencies: "N/A",
  },
  margin: {
    definition:
      "Create space around elements, outside of any defined borders. A margin is the space around an element's border, while padding is the space between an element's border and the element's content. margin-top, margin-right, margin-bottom, margin-left are variants. For sites with flex, margin is by default 0px.",
    values: [
      "inherit (padding should be inherited from the parent element)",
      "percentages ex: 10%",
      "ems ex: 1em",
      "pixels ex: 20px",
      "ch ex: 1ch",
      "other length units",
    ],
    implicitDependencies: "N/A",
  },
  "padding-bottom": {
    definition:
      "Generates space around an element's content, inside of any defined borders. padding-top, padding-right, padding-bottom, padding-left are variants.",
    values: [
      "inherit (padding should be inherited from the parent element)",
      "percentages ex: 10%",
      "ems ex: 1em",
      "pixels ex: 20px",
      "ch ex: 1ch",
      "other length units",
    ],
    implicitDependencies: "N/A",
  },
  position: {
    definition:
      "The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.",
    values: ["static", "relative", "absolute", "sticky", "fixed"],
    implicitDependencies: "N/A",
  },
  "grid-column-start": {
    definition: "Defines on which column-line the item will start",
    values: [
      "auto (placed following the flow of elements)",
      "span n (specifies # of cols the item will span)",
      "column # (which column to start the display of the item)",
    ],
    implicitDependencies: "must use display:grid",
  },
  "grid-column-end": {
    definition: "Defines on which column-line the item will end",
    values: [
      "auto (placed following the flow of elements)",
      "span n (specifies # of cols the item will span)",
      "column # (which column to end the display of the item)",
    ],
    implicitDependencies: "must use display:grid",
  },
  "max-width": {
    definition:
      "property defines the maximum width of an element. If the content is larger than the maximum width, the maximum width will be applied. If content is inside a larger container, % will refer to the % of the larger container.",
    values: [
      "initial",
      "inherit",
      "percentages ex:10%",
      "em ex: 1em",
      "rem ex: 2rem",
      "pixels ex: 20px",
    ],
    implicitDependencies: "N/A",
  },
  "min-width": {
    definition:
      "property defines the minimum width of an element. If the content is smaller than the minimum width the minimum width will be applied. If content is inside a larger container, % will refer to the % of the larger container.",
    values: [
      "initial",
      "inherit",
      "percentages ex:10%",
      "em ex: 1em",
      "rem ex: 2rem",
      "pixels ex: 20px",
    ],
    implicitDependencies: "N/A",
  },
  "flex-basis": {
    definition: "Specifies the initial length of a flexible item.",
    values: [
      "inherit",
      "percentages ex:10%",
      "em ex: 1em",
      "rem ex: 2rem",
      "pixels ex: 20px",
    ],
    implicitDependencies: "N/A",
  },
  "transform-origin": {
    definition:
      "allows you to change the position of transformed elements, by changing its 'origin' or rather the position of its X, Y, and even Z axes of rotation.",
    values: [
      "left",
      "center",
      "right",
      "a % into the object with the top left being 0% 0%",
    ],
    implicitDependencies: "must use transform property",
  },
  transform: {
    definition:
      "Applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.",
    values: [
      "translate (x,y) ",
      "scale",
      "right",
      "rotate",
      "skew",
      "perspective",
    ],
    implicitDependencies: "N/A",
  },
  overflow: {
    definition:
      "Specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area. overflow-x and overflow-y are variants.",
    values: [
      "visible",
      "hidden (overflow clipped)",
      "scroll (overflow clipped but scrollable)",
      "auto",
    ],
    implicitDependencies: "N/A",
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
    implicitDependencies: declarationInformation[dec.name].implicitDependencies,
    websites: getWebsites(dec.name),
  };
}
