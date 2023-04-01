/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Formik, Form, FieldArray, Field, useFormikContext } from "formik";
import { Declaration, Media, ScopedDeclaration } from "../lib/types";

enum DeclarationDiffType {
  SamePropertyAndValue = "SamePropertyAndValue",
  SameProperty = "SameProperty",
  None = "None",
}

type DeclarationWithDiff = Declaration & {
  diffType: DeclarationDiffType;
};

function diffDeclarations(
  declaration: Declaration[],
  compareAgainst: Declaration[]
): DeclarationWithDiff[] {
  const declarationMap = Object.fromEntries(
    compareAgainst.map((d) => [d.name, d.value])
  );

  return declaration.map((d) => {
    let diffType: DeclarationDiffType = DeclarationDiffType.None;

    if (d.name in declarationMap) {
      if (declarationMap[d.name] === d.value) {
        diffType = DeclarationDiffType.SamePropertyAndValue;
      } else {
        diffType = DeclarationDiffType.SameProperty;
      }
    }

    return { ...d, diffType };
  });
}

const suggestedValues = {
  "justify-content": [
    "center",
    "start",
    "end",
    "flex-start",
    "flex-end",
    "left",
    "right",
  ],
  "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
  display: ["flex", "grid", "block", "inline-block", "none"],
  "align-content": [
    "start",
    "end",
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around",
  ],
  "align-items": ["stretch", "center", "start", "end"],
  "position": ["fixed", "relative", "static", "absolute", "sticky"],
};

interface CSSEditorProps {
  declarations: Declaration[];
  defaultParent: string;
  media: Media[];
  scoped_declarations: ScopedDeclaration[];
  diffAgainstDeclarations: Declaration[];
  onChange: (declarations: Declaration[], media: Media[], scoped_declarations: ScopedDeclaration[]) => void;
}

function propertyDefinition(property) {
  if (property.includes("display")) {
    return `Specifies display behavior of an element / container. 
- Values can be grid (2D grid container of blocks), flex (1D container, that can wrap into 2D), block (new line, whole width), inline-block (inline, you can apply height width).
- Note: With both flex and grid, individual components within the container scale in size as your resize the overall flex/grid container.
- Src: W3Schools
- Sites Using: ALL`;
  }
  else if (property.includes("grid-template-columns")) {
    return `Specifies the number (and the widths) of columns in a grid layout. The values are a space separated list, where each value specifies the size of the respective column. 
- Values can specify pixels, percentages, fractions (i.e. 1fr), or auto-fill. With auto-fill by default you go down to 1 column at the smallest widths.
- Src: W3 Schools
- Sites Using: Italic, Masterclass, Hero Icons
- Implicit Dependencies: must use display:grid`;
  }
  else if (property.includes("gap")) {
    return `Defines the size of the gap between the rows and columns in a grid layout, and is a shorthand property for grid-row-gap and grid-column-gap. 
- Values can specify pixels, em, rem.
- Src: W3 Schools
- Sites Using: Masterclass, Hero Icons
- Implicit Dependencies: must use display:grid`;
  }
  else if (property.includes("padding")){
    return `Generates space around an element's content, inside of any defined borders. padding-top, padding-right, padding-bottom, padding-left are variants.
- Values can specify length in px, pt, cm, etc. or % of the width of the containing element, or inherit if padding should be inherited from the parent element.
- Src: W3 Schools
- Sites Using: Italic, CSS Tricks`;
  }
  else if (property.includes("start") || property.includes("end")){
    return `Defines on which column-line the item will start/end, i.e. grid-column-start/end: auto|span n|column-line;
- Values can specify:
- - auto (placed following the flow of elements)
- - span n (specifies # of cols the item will span)
- - OR a column line (which column to start/end the display of the item). 
- Examples: grid-column-start: auto; grid-column-start: span 3; grid-column-start: 2; grid-column-end: 2;
- Src: W3 Schools
- Sites Using: Masterclass
- Implicit Dependencies: must use display:grid`
  }
  else if (property.includes("wrap")) {
    return `Specifies whether the flexible items should wrap or not.
- Values include nowrap, wrap, wrap-reverse (wrap but in reverse order), inherit (inherit parent's value)
- Src: W3 Schools
- Sites Using: Flat Icons, Smashing Magazine
- Implicit Dependencies: must use display:flex`
  }
  else if (property.includes("-width")) {
    return `min-width / max-width property defines the minimum / maximum width of an element. If the content is smaller than the minimum width or larger than the maximum width, the minimum / maximum width will be applied. If content is inside a larger container, % will refer to the % of the larger container.
- Values can be in px, cm, em, etc. or % or initial or inherit
- Src: W3 Schools
- Sites Using: Flat Icons, Smashing Magazine, CSS Tricks`
  }
  else if (property.includes("basis")) {
    return `Specifies the initial length of a flexible item.
- Values: A length unit, or percentage, specifying the initial length of the flexible item(s), or inherit.
- Src: W3 Schools
- Sites Using: Smashing Magazine
`
  }
  else if (property.includes("transform-origin")) {
    return `transform-origin allows you to change the position of transformed elements, by changing its "origin" or rather the position of its X, Y, and even Z axes of rotation. 
- Values: left, center, right (these refer to the left, center, right of the object being rotated), or a % into the object with the top left being 0% 0% 
- Src: W3 Schools
- Sites Using: Smashing Magazine, CSS Tricks
- Implicit Dependencies: must use the transform property too`
  }
  else if (property.includes("transform")) {
    return `Applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
- Values: translate(x,y) for a 2D transform (also supports 1D / 3D), scale, rotate (2D, 3D), skew, perspective
- Src: W3 Schools
- Sites Using: Smashing Magazine, CSS Tricks`
  }
  else if (property.includes("transition")) {
    return `Allows you to change property values smoothly, over a given duration. Specify (1) the CSS property you want to add an effect to - if none is specified then it applies it to all properties of the CSS rule (2) the duration of the effect.
- Note: you can change the value of the transition duration to see how the transition is working.
- Src: W3 Schools
- Sites Using: CSS Tricks
- Implicit Dependencies: must used in conjunction with other properties whose values are being transitioned`
  }
  else if (property.includes("margin")) {
    return `Create space around elements, outside of any defined borders.
- Note: a margin is the space around an element's border, while padding is the space between an element's border and the element's content. margin-top, margin-right, margin-bottom, margin-left are variants.
- Note: for sites with flex, margin is by default 0px.
- Values can specify length in px, pt, cm, etc. or % of the width of the containing element, or inherit if padding should be inherited from the parent element.
- Src: W3 Schools
- Sites Using: Smashing Magazine, CSS Tricks`
  }
  else if (property.includes("overflow")) {
    return `Specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area. overflow-x and overflow-y are variants.
- Values: visible, hidden (overflow clipped), scroll (overflow clipped but scrollable), auto
- Src: W3 Schools
- Sites Using: CSS Tricks`
  }
  else {
    return `Feel free to look up this property online.`
  }
  // add ~10 more important properties - rest leave the else case
}

function toggler(declaration, index, declaration_type) {
  return (
      <div
        className={`flex gap-2 items-center transition-opacity px-2 py-2 mb-4 rounded ${
          !declaration.enabled ? "opacity-60" : ""
        } ${getColorForDiffType(declaration.diffType)} `}
        key={index}
      >
        <div>
          <Field
            name={`${declaration_type}.[${index}].enabled`}
            type="checkbox"
            checked={declaration.enabled}
          />
        </div>

        <div className="flex-1">
          <Field
            title={propertyDefinition(declaration.name)}
            name={`${declaration_type}.${index}.name`}
            placeholder="background-color"
            type="text"
            className="input"
          />
        </div>

        <div className="flex-1">
          {suggestedValues[declaration.name] ? (
            <Field
              name={`${declaration_type}.${index}.value`}
              as="select"
              className="input"
            >
              {suggestedValues[declaration.name].map(
                (value: string) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
              )}
            </Field>
          ) : (
            <Field
              name={`${declaration_type}.${index}.value`}
              placeholder="blue"
              type=""
              className="input"
            />
          )}
        </div>
      </div>
      );
}

export default function CSSEditor({
  declarations,
  defaultParent,
  diffAgainstDeclarations,
  media,
  scoped_declarations,
  onChange,
}: CSSEditorProps): JSX.Element {
  const initialValues = {
    declarations: diffDeclarations(declarations, diffAgainstDeclarations),
    media: media,
    scoped_declarations: scoped_declarations,
  };

  return (
    <div className="w-full px-4 py-4">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={async (values) => {
          onChange(values.declarations, values.media, values.scoped_declarations);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="declarations">
              {({ insert, remove, push }) => (
                <div style={{fontSize: 18, fontFamily: "monospace"}}>
                  <h1>
                    .{defaultParent}
                  </h1>
                  <div>
                    {values.declarations.map((declaration, index) => (
                      toggler(declaration, index, "declarations")
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn mt-8"
                    onClick={() =>
                    push({
                      name: "",
                      value: "",
                      enabled: true,
                      } as Declaration)
                    }
                  >
                  Add Declaration
                  </button>
                </div>
              )}
            </FieldArray>
            <br/><p style={{backgroundColor:"#A7F3D0"}}>Green highlights mean the two sites share the same property / value pair. Only applies to CSS above, not below.</p>
            <br/><p style={{backgroundColor:"#FDE68A"}}> Yellow highlights mean the two sites share the same property, but with different values. Only applies to CSS above, not below.</p>
            _______________________________________________________________{"\n"}
            <FieldArray name="media">
              {({ insert, remove, push }) => (
                <div style={{fontSize: 18, fontFamily: "monospace"}}>
                  {values.media.map((media_query, m_index) => (
                    <div>
                      <h1>
                        {media_query.rule}
                      </h1>

                      {media_query.scoped_declarations.map((scoped_declaration, sd_index) => (
                        <div>
                          <h2>
                            {scoped_declaration.parent}
                          </h2>
                            {scoped_declaration.declarations.map((sd_declaration, d_index) => (
                              toggler(sd_declaration, d_index, `media.${m_index}.scoped_declarations.${sd_index}.declarations`)
                          ))}
                        </div>
                      ))}

                      {media_query.declarations.map((med_declaration, d_index) => (
                        toggler(med_declaration, d_index, `media.${m_index}.declarations`)
                      ))}

                    </div>
                  ))} 
                </div>
              )}
            </FieldArray>
            _______________________________________________________________{"\n"}
            <FieldArray name="scoped_declarations">
              {({ insert, remove, push }) => (
                <div style={{fontSize: 18, fontFamily: "monospace"}}>
                  {values.scoped_declarations.map((scoped_declaration, sd_index) => (
                    <div>
                      <h1>
                        {scoped_declaration.parent}
                      </h1>
                        {scoped_declaration.declarations.map((sd_declaration, d_index) => (
                          toggler(sd_declaration, d_index, `scoped_declarations.${sd_index}.declarations`)
                      ))}
                    </div>
                  ))} 
                </div>
              )}
            </FieldArray>
            <AutoSave />
          </Form>
        )}
      </Formik>
    </div>
  );
}

function AutoSave(): JSX.Element {
  const formik = useFormikContext();

  useEffect(() => {
    formik.submitForm();
  }, [formik.values, formik.submitForm]);

  return <></>;
}

function getColorForDiffType(diffType: DeclarationDiffType) {
  switch (diffType) {
    case DeclarationDiffType.SamePropertyAndValue:
      return "bg-green-200";
    case DeclarationDiffType.SameProperty:
      return "bg-yellow-200";
    case DeclarationDiffType.None:
    default:
      return "";
  }
}
