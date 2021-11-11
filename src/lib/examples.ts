import { Declaration, Example } from "./types";

function getDeclarationFromString(css: string): Declaration[] {
  return css
    .split("\n")
    .filter((line) => line !== "")
    .map((line) => {
      const lineSplits = line.split(/(: )|(;)/g);

      const splits = lineSplits
        .filter((split) => {
          if (!split) {
            return false;
          }

          if (split === ": " || split === ";") {
            return false;
          }

          return true;
        })
        .map((split) => split.trim());

      return splits;
    })
    .filter((splits) => splits.length >= 2)
    .map((splits) => {
      const [name, value] = splits;

      return {
        name,
        value,
        enabled: true,
      };
    });
}

export function declarationsToCSSString(
  declarations: Declaration[],
  parentClass: string
): string {
  const allDeclarations = declarations
    .filter((declaration) => declaration.enabled)
    .map((declaration) => `${declaration.name}: ${declaration.value};`)
    .join("\n");

  return `
    .${parentClass} {
      ${allDeclarations}
    }
  `;
}

const italic: Example = {
  name: "Italic",
  iframeUrl: "/examples/italic.com",
  defaultParentClassname: "collections-grid",
  declarations: getDeclarationFromString(`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    padding-bottom: 4rem;
    -moz-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  `),
};

const gridMasterclass: Example = {
  name: "Grid Masterclass",
  iframeUrl: "/examples/grid-masterclass",
  declarations: getDeclarationFromString(`
    -webkit-align-content: start;
    -ms-flex-line-pack: start;
    align-content: start;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-columns: 1fr 1fr 1fr 25%;
    grid-template-rows: 1fr 1fr 1fr 0.5fr;
  `),
  defaultParentClassname: "grid",
};

const flatIcons: Example = {
  name: "Flat Icons",
  iframeUrl: "/examples/flat-icons",
  declarations: getDeclarationFromString(`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    grid-auto-rows: min-content;
    grid-column-gap: 0.375rem;
    grid-row-gap: 0.375rem;
    grid-auto-flow: dense;
  `),
  defaultParentClassname: "grid",
};

export const examples: Example[] = [italic, gridMasterclass, flatIcons];
