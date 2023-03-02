import { Declaration, Example, Media } from "./types";

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
function getMediaFromArray(css_list): Media {
  return {rule: css_list[0],declarations: css_list[1]};
}

export function declarationsToCSSString(
  declarations: Declaration[],
  media: Media[],
  parentClass: string
): string {
  const stdDeclarations = declarations
    .filter((declaration) => declaration.enabled)
    .map((declaration) => `${declaration.name}: ${declaration.value};`)
    .join("\n");
  let mediaListString = media.map((media_query) => {
      return `
        ${media_query.rule} {
          .${parentClass} {
            ${media_query.declarations
            .filter((declaration) => declaration.enabled)
            .map((declaration) => `${declaration.name}: ${declaration.value};`)
            .join("\n")}
          }
        }`
      });
  const mediaFull = mediaListString.join("\n")
  return `
    .${parentClass} {
      ${stdDeclarations}
    }
    ${mediaFull}
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
  `),
  media: [getMediaFromArray([
    '@media (max-width: 767px)', 
    getDeclarationFromString(`
      padding-bottom: 1.9rem;
      grid-template-columns: 1fr 1fr;`)
    ])],
};

const gridMasterclass: Example = {  
  name: "Masterclass",
  iframeUrl: "/examples/grid-masterclass",
  declarations: getDeclarationFromString(`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 25%;
    grid-template-rows: 1fr 1fr 1fr 0.5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    
  `),
  defaultParentClassname: "grid",
  media: [getMediaFromArray([
    '@media (max-width: 991px)',
    getDeclarationFromString(`
    grid-template-columns: 1fr 1fr 1fr 25%;
    grid-template-rows: auto 1fr 1fr 1fr auto auto auto auto;`)
  ]),
    getMediaFromArray([
    '@media (max-width: 479px)',
    getDeclarationFromString(`
    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;`)
    ])
  ],
  htmlOutput: `
  
  <div class="grid">
    <div class="div-block-7"></div>
    <div class="div-block-4"></div>
    <div class="div-block-3"></div>
    <div class="div-block-5"></div>
    <div class="div-block-6"></div>
    <div class="div-block"></div>
    <div class="div-block-8"></div>
    <div class="div-block-4"></div>
    <div class="div-block-10"></div>
    <div class="div-block-2"></div>
  </div>
  `,
  children: [
    `
    // values vary on window size
    .div-block-4 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 5;
    }
    `,
    `
    .div-block-4 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }
    `,
    `
    .div-block-3 {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 4;
    }
    `,
    `
    .div-block-5 {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    `,
    `
    .div-block-6 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    `,
    `
    .div-block {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 5;
    }
    `,
    `
    .div-block-8 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    `,
    `
    .div-block-4 {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    `,
    `
    .div-block-10 {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    `,
  ],
};

const flatIcons: Example = {
  name: "Flat Icons",
  iframeUrl: "/examples/flat-icons",
  declarations: getDeclarationFromString(`
    display: flex;
    flex-wrap: wrap;
  `),
  defaultParentClassname: "icons",
  media: [getMediaFromArray(["",getDeclarationFromString(``)])],
};

const smashingMagazineGuide: Example = {
  name: "Smashing Magazine",
  iframeUrl: "/examples/smashingmagazineguide",
  declarations: getDeclarationFromString(`
    display: flex;
    flex-wrap: wrap;
  `),
  defaultParentClassname: "f-article-highlights",
  media: [getMediaFromArray(["",getDeclarationFromString(``)])],
};

const heroIcons: Example = {
  name: "Hero Icons",
  iframeUrl: "/examples/hero-icons",
  declarations: getDeclarationFromString(`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(8rem,1fr));
    gap: 4em;
  `),
  defaultParentClassname: "grid",
  media: [getMediaFromArray(["",getDeclarationFromString(``)])],
};
const CSSTricks: Example = {
  name: "CSS Tricks",
  iframeUrl: "/examples/CSS-Tricks",
  declarations: getDeclarationFromString(`
    display: flex;
    margin: 0 0 var(--gap);
    position: relative;
  `),
  defaultParentClassname: "popular-articles",
  media: [getMediaFromArray(["",getDeclarationFromString(``)])],
};
export const examples: Example[] = [
  italic,
  gridMasterclass,
  flatIcons,
  smashingMagazineGuide,
  heroIcons,
  CSSTricks,
];
