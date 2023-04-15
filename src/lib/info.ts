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
  // values taken from : https://developer.mozilla.org/en-US/docs/Web/CSS 
  "grid-row-start": {
    definition:
      "The grid-row-start CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.",
    values: ["auto", "3", "-1", "span 2"],
    implicitDependencies: "display:grid;",
  },
  "grid-row-end": {
    definition:
      "The grid-row-end CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.",
      values: ["auto", "3", "-1", "span 2"],
      implicitDependencies: "display:grid;",
  },
  "width": {
    definition:
      "The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.",
    values: ['auto', '150px', '20em', '75%'],
    implicitDependencies: "N/A",
  },
  "align-items": {
    definition:
      "align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.",
    values: ['stretch', 'center', 'start', 'end'],
    implicitDependencies: "display:flex; or display:grid;",
  },
  "justify-content": {
    definition:
      "justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.",
    values: ['start', 'center', 'space-between', 'space-around', 'space-evenly'],
    implicitDependencies: "display:flex;",
  },
  "text-align": {
    definition:
      "text-align CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box.",
    values: ['start', 'end', 'center', 'justify'],
    implicitDependencies: "N/A",
  },
  "font-size": {
    definition:
      "font-size CSS property sets the size of the font. ",
    values: ['1.2em', 'x-small', 'smaller', '12px', '80%'],
    implicitDependencies: "N/A",
  },
  "margin-bottom": {
    definition:
      "margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    values: ['1em', '10%', '10px', '0'],
    implicitDependencies: "N/A",
  },
  "margin-left": {
    definition:
      "margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.",
    values: ['1em', '10%', '10px', '0'],
    implicitDependencies: "N/A",
  },
  "padding-left": {
    definition:
      "padding-left CSS property sets the width of the padding area to the left of an element.",
    values: ['1.5em', '10%', '20px', '1ch', '0'],
    implicitDependencies: "N/A",
  },
  "overflow-x": {
    definition:
      "overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. ",
    values: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
    implicitDependencies: "N/A",
  },
  flex: {
    definition:
      "flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.",
    values: ['1', '1 30px', '1 1 100px'],
    implicitDependencies: "display:flex;",
  },
  "min-height": {
    definition:
      "min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.",
    values: ['150px', '7em', '75%', '10px'],
    implicitDependencies: "N/A",
  },
  "box-shadow": {
    definition:
      "box-shadow CSS property adds shadow effects around an element's frame.",
    values: ['10px 5px 5px red', '60px -16px team'],
    implicitDependencies: "N/A",
  },
  "padding": {
    definition:
      "Ipadding CSS shorthand property sets the padding area on all four sides of an element at once.",
    values: ['1em', '10% 0', '10px 50px 20px', '10px 50px 30px 0'],
    implicitDependencies: "N/A",
  },
  "border-radius": {
    definition:
      "border-radius CSS property rounds the corners of an element's outer border edge.",
    values: ['30px', '25% 10%', '10% 30% 50% 70%'],
    implicitDependencies: "N/A",
  },
  "background": {
    definition:
      "background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method. ",
    values: ['green', 'border-box red', 'url("test.jpg") repeat-y'],
    implicitDependencies: "N/A",
  },
  "color": {
    definition:
      "color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value",
    values: ['rebeccapurple', '#00ff00', 'rgb(214, 122, 127)'],
    implicitDependencies: "N/A",
  },
  "flex-direction": {
    definition:
      "flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).",
    values: ['row', 'row-reverse', 'column', 'column-reverse'],
    implicitDependencies: "display:flex;",
  },
  "transition": {
    definition:
      "Transitions enable you to define the transition between two states of an element.",
    values: ['margin-right 2s', 'all 1s ease-out'],
    implicitDependencies: "N/A",
  },
  // end of mozilla info - rest taken from Gobi
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
