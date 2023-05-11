import { Declaration, Example, Media, ScopedDeclaration } from "./types";

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
  return {rule: css_list[0], declarations: css_list[1], scoped_declarations: css_list[2]};
}
function getScopedDeclarationFromArray(css_list): ScopedDeclaration {
  return {parent: css_list[0], declarations: css_list[1]};
}
export function mergeDeclarations(mainDeclaration: Declaration[], mediaDeclaration?: Media[], scoped_declarations?: ScopedDeclaration[]): Declaration[]{
  var allDeclarations = mainDeclaration
  mediaDeclaration.forEach(m => {
    if (m.declarations){
      allDeclarations = allDeclarations.concat(m.declarations)
    }
    if (m.scoped_declarations){
      m.scoped_declarations.forEach(sd => {
        allDeclarations = allDeclarations.concat(sd.declarations)
      })  
    }  
  });
 scoped_declarations.forEach(sd =>{
  allDeclarations = allDeclarations.concat(sd.declarations)
 })
  return  allDeclarations
}
export function declarationsToCSSString(
  declarations: Declaration[],
  media: Media[],
  scoped_declarations: ScopedDeclaration[],
  parentClass: string
): string {
  const stdDeclarations = declarations
    .filter((declaration) => declaration.enabled)
    .map((declaration) => `${declaration.name}: ${declaration.value};`)
    .join("\n");
  
  let scopedDeclarationsString = scoped_declarations.map((scoped_declaration) => {
    return `
      ${scoped_declaration.parent} {
        ${scoped_declaration.declarations
        .filter((declaration) => declaration.enabled)
        .map((declaration) => `${declaration.name}: ${declaration.value};`)
        .join("\n")}
      }`
  }) ;
  const sdFull = scopedDeclarationsString.join("\n")
  
  let mediaListString = media.map((media_query) => {
    let to_prepend = ``  
    if (media_query.declarations.length > 0) {
        to_prepend = `.${parentClass} {
          ${media_query.declarations
          .filter((declaration) => declaration.enabled)
          .map((declaration) => `${declaration.name}: ${declaration.value};`)
          .join("\n")}
        }`
      }
      return `
        ${media_query.rule} {
          ` + to_prepend + `
          ${media_query.scoped_declarations
            .map((scoped_declaration) => `${scoped_declaration.parent} {
              ${scoped_declaration.declarations
                .filter((declaration) => declaration.enabled)
                .map((declaration) => `${declaration.name}: ${declaration.value};`)
                .join("\n")}
            }`)
            .join("\n")}
          
        }`
    });
  const mediaFull = mediaListString.join("\n")
  
  return `
    .${parentClass} {
      ${stdDeclarations}
    }
    ${sdFull}

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
      grid-template-columns: 1fr 1fr;`),
    []
  ]),
  getMediaFromArray([
    '@media (max-width: 767px)',
    [],
    [
      getScopedDeclarationFromArray([".pcp-featured-swiper", getDeclarationFromString(`display: block;`)]),
      getScopedDeclarationFromArray([".pcp-featured-grid", getDeclarationFromString(`display: none;`)]),
    ]
  ]),
  getMediaFromArray([
    '@media (min-width: 768px)',
    [],
    [
      getScopedDeclarationFromArray([".cr", getDeclarationFromString(`display: block;`)]),
    ]
  ])
],
scoped_declarations: [],
htmlOutput: `
<html>
  ...
  <div class="pcp-featured-grid">
    <a href="/featured/all-time-member-favorites" ...> ... All-Time Member Favorites ... </a>
    <a ...> ... Better Sweater Weather ... </a>
    <a ...> ... The Leather Edit ... </a>
    <a ...> ... The Best Bags ... </a>
  </div>
  <div class="pcp-featured-swiper ae" ...>
    <div class="swiper-wrapper" ...>
      <a href="/featured/all-time-member-favorites" ...> ... All-Time Member Favorites ... </a>
      <a ...> ... Better Sweater Weather ... </a>
      <a ...> ... The Leather Edit ... </a>
      <a ...> ... The Best Bags ... </a>
    </div>
  </div>
  ...
  <div class="... cr">
    ...
    <div> ... Apparel ...</div>
    <div> ... Bags ...</div>
    <div> ... Shoes ...</div>
    <div> ... Accessories ...</div>
  </div>
  ...
  <div class="department-section ae cm">
    ...
    <div class="collections-grid ae cx">
      <a href="/products/1...>
      <a href="/products/2...>
      <a href="/products/3...>
      ...
      <div class="ae">Shop All Apparel ...</div>
      ...
    </div>
  </div>
  ...
</html>`
};

// const gridMasterclass: Example = {  
//   name: "Masterclass",
//   iframeUrl: "/examples/grid-masterclass",
//   declarations: getDeclarationFromString(`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 25%;
//     grid-template-rows: 1fr 1fr 1fr 0.5fr;
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;`),
//   defaultParentClassname: "grid",
//   media: [
//     getMediaFromArray([
//       '@media screen and (max-width: 991px)',
//       [],
//       [getScopedDeclarationFromArray([".div-block-8", getDeclarationFromString(`
//         grid-column-start: 1;
//         grid-column-end: 5;
//         grid-row-start: 2;
//         grid-row-end: 3;`)
//       ])]
//     ])
//   ],
//   scoped_declarations: [getScopedDeclarationFromArray([".div-block-8", getDeclarationFromString(`
//       grid-column-start: 1;
//       grid-column-end: 3;
//       grid-row-start: 1;
//       grid-row-end: 2;`)
//     ])
//   ],
//   htmlOutput: `
//   <html>
//     ...
//     <div class="w-layout-grid grid">
//       <div class="div-block-7"></div>
//       <div class="div-block-4"></div>
//       <div class="div-block-3"></div>
//       <div class="div-block-5"></div>
//       <div class="div-block-6"></div>
//       <div class="div-block"></div>
//       <div class="div-block-8"></div>
//       <div class="div-block-4"></div>
//       <div class="div-block-10"></div>
//       <div class="div-block-2"></div>
//     </div>
//     ...
//   </html>
//   `,
//   children: [
//     `
//     // values vary on window size
//     .div-block-7 {
//       grid-column-start: 3;
//       grid-column-end: 5;
//       grid-row-start: 4;
//       grid-row-end: 5;
//     }
//     `,
//     `
//     .div-block-4 {
//       grid-column-start: 2;
//       grid-column-end: 3;
//       grid-row-start: 4;
//       grid-row-end: 5;
//     }
//     `,
//     `
//     .div-block-3 {
//       grid-column-start: 4;
//       grid-column-end: 5;
//       grid-row-start: 2;
//       grid-row-end: 4;
//     }
//     `,
//     `
//     .div-block-5 {
//       grid-column-start: 2;
//       grid-column-end: 4;
//       grid-row-start: 3;
//       grid-row-end: 4;
//     }
//     `,
//     `
//     .div-block-6 {
//       grid-column-start: 1;
//       grid-column-end: 2;
//       grid-row-start: 4;
//       grid-row-end: 5;
//     }
//     `,
//     `
//     .div-block {
//       grid-column-start: 3;
//       grid-column-end: 5;
//       grid-row-start: 1;
//       grid-row-end: 2;
//     }
//     `,
//     `
//     .div-block-8 {
//       grid-column-start: 1;
//       grid-column-end: 3;
//       grid-row-start: 1;
//       grid-row-end: 2;
//     }
//     `,
//     `
//     .div-block-4 {
//       grid-column-start: 1;
//       grid-column-end: 2;
//       grid-row-start: 3;
//       grid-row-end: 4;
//     }
//     `,
//     `
//     .div-block-10 {
//       grid-column-start: 2;
//       grid-column-end: 4;
//       grid-row-start: 2;
//       grid-row-end: 3;
//     }
//     .div-block-2 {
//       grid-column-start: 1;
//       grid-column-end: 2;
//       grid-row-start: 2;
//       grid-row-end: 3;
//     }
//     `,
//   ],
// };

const flatIcons: Example = {
  name: "Flat Icons",
  iframeUrl: "/examples/flat-icons",
  declarations: getDeclarationFromString(`
    display: flex;
    flex-wrap: wrap;
  `),
  defaultParentClassname: "icons",
  media: [getMediaFromArray(["@media (max-width: 480px)",getDeclarationFromString(``), [
      getScopedDeclarationFromArray([".icons .icon--item", getDeclarationFromString(`
        min-width: 33%;
      `)
      ])
    ]
  ])
  ],
  scoped_declarations: [getScopedDeclarationFromArray([".icons .icon--item",getDeclarationFromString(`
    min-width: 140px;
    max-width: 100%`)])],
  htmlOutput:`
    <html>
      ...
      <ul class="icons">
        <li class="icon--item icon" data-id="..." data-name="..." ... data-png="....png">
        <li class="icon--item icon" data-id="..." data-name="..." ... data-png="....png">
        <li class="icon--item icon" data-id="..." data-name="..." ... data-png="....png">
        ...
      </ul>
      ...
    </html>
  `,
};

const smashingMagazineGuide: Example = {
  name: "Smashing Magazine",
  iframeUrl: "/examples/smashingmagazineguide",
  declarations: getDeclarationFromString(`
    display: flex;
    flex-wrap: wrap;
  `),
  defaultParentClassname: "f-article-highlights",
  media: [getMediaFromArray(["@media screen and (min-width: 48em)",       
    getDeclarationFromString(``), [
      getScopedDeclarationFromArray([".col-12", getDeclarationFromString(`
        flex-basis: 100%;
        max-width: 100%;`)
      ])
    ]
  ]),
  getMediaFromArray(["@media screen and (min-width: 64em)",       
    getDeclarationFromString(``), [
      getScopedDeclarationFromArray([".f-article-item", getDeclarationFromString(`
        flex-basis: 50%;`)
      ])
    ]
  ]),
  getMediaFromArray(["@media (max-width: 1025px)",       
    getDeclarationFromString(``), [
      getScopedDeclarationFromArray([".vertical--white", getDeclarationFromString(`
        transform: none;
        margin: 2.5em 0 2.5em calc(1.3em - 2px);`)
      ])
    ]
  ])
  ],
  scoped_declarations: [getScopedDeclarationFromArray([".article--grid__sponsors",getDeclarationFromString(`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  `)]),
  getScopedDeclarationFromArray([".vertical--white",getDeclarationFromString(`
    transform-origin: left center;
    transform: rotateZ(90deg) translateX(-5em) translateY(1em);
  `)])],
  htmlOutput:`
  <html>
    ...
    <section class="curated-articles-container">
      ...
      <h4 class="vertical--white...">
        <span>Latest Posts</span>
      </h4>
      <div class="f-article-highlights col-12 ...">
        <div class="f-article-item">
          ...Testing Pipeline 101...
        </div>
        <div class="f-article-item">...</div>
        <div class="f-article-item">...</div>
        ...
      </div>
    </section>
    <section class="curated-articles-container">
      <div class="f-article-highlights__person">
        ...Person of the Week...
      </div>
      <div class="f-article-highlights col-12 ...">
        <div class="f-article-item">...A11y Myths...</div>
        <div class="f-article-item">...</div>
        <div class="f-article-item">...</div>
        ...
        <div class="article--grid__sponsors">
          ...
          Join 1916 Smashing Members
          ...
        </div>
      </div>
    </section>
    ...
  </html>
  `
};

const heroIcons: Example = {
  name: "Hero Icons",
  iframeUrl: "/examples/hero-icons",
  declarations: getDeclarationFromString(`
  display: grid;
  `),
  defaultParentClassname: "grid",
  media: [],
  scoped_declarations: [getScopedDeclarationFromArray([".icon-grid",getDeclarationFromString(`
    display: grid;
    gap: 4rem;
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  `)])],
  htmlOutput:`
  <html>
    ...
    <div class="icon-grid">
      ...
      <li class="relative..."></li>
        ...
        <button id="academic-cap-md-btn" ...>  
          <svg width="24" height="24" ...>...</svg>
        </button>
        ...
      <li class="relative..."></li>
      <li class="relative..."></li>
      ...
    </div>
    ...
  </html>
  `
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
  media: [getMediaFromArray(["@media (max-width: 1200px)",getDeclarationFromString(``), [
    getScopedDeclarationFromArray(["body.home .mini-card", getDeclarationFromString(`
      min-width: 220px;`)
    ]),
    getScopedDeclarationFromArray(["body.home .mini-card:not(:first-child)", getDeclarationFromString(`
      margin-left: -30px;`)
    ]),
    getScopedDeclarationFromArray([".popular-articles", getDeclarationFromString(`
      padding-bottom: var(--gap);
      padding-left: 5px;
      overflow-x: scroll;`)
    ]),
    getScopedDeclarationFromArray(["body.home .mini-card-grid", getDeclarationFromString(`
      padding-bottom: var(--gap);
      padding-left: 5px;
      overflow-x: visible;`)
    ])
  ]])],
  scoped_declarations: [getScopedDeclarationFromArray(["body.home .mini-card",getDeclarationFromString(`
      min-width: 300px;
      min-height: 350px;
      box-shadow: -2rem 0 3rem -2rem #000;
    `)]),
    getScopedDeclarationFromArray([".mini-card",getDeclarationFromString(`
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      transition: 0.2s;
      margin: 0;
    `)]),
    getScopedDeclarationFromArray(["html",getDeclarationFromString(`
      max-width: 1600px;
    `)]),
    getScopedDeclarationFromArray(["body.home .mini-card-grid",getDeclarationFromString(`
      padding: 3rem 0 3rem 2rem;
      margin: 0;
      display: flex;
      overflow-x: scroll;
    `)]),
  ],
  htmlOutput:`
  <html>
    ...
    <div class="popular-articles">
      <div class="popular-header header-card">
        <h2>...Popular this month...</h2>
      </div>
      <div class="mini-card-grid">
        <article class="mini-card ...">...CSS Based Fingerprinting</div>
        <article class="mini-card ...">...</div>
        <article class="mini-card ...">...</div>
        ...
      </div>
    </div>
    ...
  </html>
  `
};
export const examples: Example[] = [
  italic,
  // gridMasterclass,
  flatIcons,
  smashingMagazineGuide,
  heroIcons,
  CSSTricks,
];
