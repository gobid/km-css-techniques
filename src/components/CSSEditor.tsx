/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Formik, Form, FieldArray, Field, useFormikContext } from "formik";
import { getInfo } from "../lib/info";
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
function diffMedia(media: Media, compareAgainst: Declaration[]): Media {
  const declarationMap = Object.fromEntries(
    compareAgainst.map((d) => [d.name, d.value])
  );
  media.declarations = media.declarations.map((d) => {
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
  media.scoped_declarations = media.scoped_declarations.map((sd) => {
    sd.declarations = sd.declarations.map((d) => {
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
    return sd;
  });
  return media;
}

function diffScopedDeclarations(
  scoped_declaration: ScopedDeclaration,
  compareAgainst: Declaration[]
): ScopedDeclaration {
  const declarationMap = Object.fromEntries(
    compareAgainst.map((d) => [d.name, d.value])
  );

  scoped_declaration.declarations = scoped_declaration.declarations.map((d) => {
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
  return scoped_declaration;
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
  display: ["flex", "grid", "block", "inline-block"],
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
  htmlOutput: string;
  children: string[];
  onChange: (declarations: Declaration[], media: Media[], scoped_declarations: ScopedDeclaration[]) => void;
}

function toggler(declaration, index, declaration_type, info?) {
  return (
    <div
      className={`editor flex gap-2 items-center transition-opacity px-2 py-2 mb-1 rounded ${
        !declaration.enabled ? "opacity-60" : ""
      } ${getColorForDiffType(declaration.diffType)} `}
      key={index}
    >
      <div className="editor flex">
        <Field
          name={`${declaration_type}.[${index}].enabled`}
          type="checkbox"
          checked={declaration.enabled}
        />
      </div>

      <div className="editor flex-1">
        <Field
          name={`${declaration_type}.${index}.name`}
          placeholder="background-color"
          type="text"
          className="input"
        />
      </div>

      <div className="editor flex-1">
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
        {info?
          <div className="tooltip">?
          <ul className="tooltiptext">
            <li className="textspan">Definition: {info.definition}</li>
              <li className="textspan">Values it takes: {info.values.join(', ')}</li>
              <li className="textspan">Used By: {info.websites.join(', ')}</li>
              <li className="textspan">Dependencies: {info.implicitDependencies}</li>
          </ul>
        </div>
      :<>No Info Available for Technique</>
        }
        <button className="tooltip" id="copyBtn" onClick={(e) => {
          navigator.clipboard.writeText(declaration.name+": "+declaration.value +";")
          var el = e.target as HTMLElement
          el.style.color = "gray"
          setTimeout(() => {
            el.style.color = "black"
          }, 3000)
          
          }}>Copy</button>
        
    </div>
  );
}

export default function CSSEditor({
  declarations,
  defaultParent,
  diffAgainstDeclarations,
  media,
  scoped_declarations,
  htmlOutput,
  children,
  onChange,
}: CSSEditorProps): JSX.Element {
  const initialValues = {
    declarations: diffDeclarations(declarations, diffAgainstDeclarations),
    media: media.map((m) => diffMedia(m, diffAgainstDeclarations)),
    scoped_declarations: scoped_declarations.map((sd) =>
      diffScopedDeclarations(sd, diffAgainstDeclarations)
    ),
  };

  return (
    <div className="grid grid-cols-2 w-full px-4 py-4">
      
      {/* <hr/> */}
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
                <div style={{border: "solid grey", borderWidth: "1px", margin: "5px"}}>
                  <h1 style={{fontSize: 16, fontFamily: "monospace",  fontWeight: "bold"}}>
                    .{defaultParent}
                  </h1>
                  <div>
                  </div>
                  <div>
                    {values.declarations.map((declaration, index) => (
                      toggler(declaration, index, "declarations", getInfo(declaration))
                    ))}
                  </div>
                  {/* <button
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
                  </button> */}
                </div>
              )}
            </FieldArray>
            <FieldArray name="scoped_declarations">
              {({ insert, remove, push }) => (
                <div>
                  {values.scoped_declarations.map((scoped_declaration, sd_index) => (
                    <div style={{border: "solid grey", borderWidth: "1px", margin: "5px"}}>
                      <p style={{fontSize: 16, fontFamily: "monospace",  fontWeight: "bold"}}>
                        {scoped_declaration.parent}
                      </p>
                        {scoped_declaration.declarations.map((sd_declaration, d_index) => (
                          toggler(sd_declaration, d_index, `scoped_declarations.${sd_index}.declarations`, getInfo(sd_declaration))
                      ))}
                    </div>
                  ))} 
                </div>
              )}
            </FieldArray>
            <FieldArray name="media">
              {({ insert, remove, push }) => (
                <div>
                  {values.media.map((media_query, m_index) => (
                    <div style={{border: "solid grey", borderWidth: "1px", margin: "5px"}}>
                      <div style={{display:"flex", justifyContent: "space-between"}} >
                        <span style={{fontSize: 16, fontFamily: "monospace", fontWeight: "bold"}}>
                          {media_query.rule} {"{"}
                        </span>
                        <div className="tooltip">?
                            <ul className="tooltiptext">
                              <li className="textspan">Media queries allow you to apply CSS styles depending on a device's general type (such as print vs. screen) or other characteristics such as screen resolution or browser viewport width.  </li>
                                <li className="textspan">Values it takes: a media rule and CSS</li>
                                <li className="textspan">Used By: Italics, Flat Icons, Smashing Magazine, Hero Icons, CSS Tricks</li>
                                <li className="textspan">Dependencies: N/A</li>
                            </ul>
                          </div>
                      </div>

                      {media_query.scoped_declarations.map((scoped_declaration, sd_index) => (
                          <div style={{border: "solid LightGrey", borderWidth: "1px", margin: "5px"}}>
                          <h2>
                            {scoped_declaration.parent}
                          </h2>
                            {scoped_declaration.declarations.map((sd_declaration, d_index) => (
                              toggler(sd_declaration, d_index, `media.${m_index}.scoped_declarations.${sd_index}.declarations`, getInfo(sd_declaration))
                          ))}
                          </div>
                      ))}

                      {media_query.declarations.map((med_declaration, d_index) => (
                        toggler(med_declaration, d_index, `media.${m_index}.declarations`, getInfo(med_declaration))
                      ))}

                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
            <hr/>
            <FieldArray name="scoped_declarations">
              {({ insert, remove, push }) => (
                <div >
                  {values.scoped_declarations.map((scoped_declaration, sd_index) => (
                      <div style={{border: "solid grey", borderWidth: "1px", margin: "5px"}}>
                      <h1  style={{fontSize: 16, fontFamily: "monospace",  fontWeight: "bold"}}>
                        {scoped_declaration.parent}
                      </h1>
                        {scoped_declaration.declarations.map((sd_declaration, d_index) => (
                          toggler(sd_declaration, d_index, `scoped_declarations.${sd_index}.declarations`, getInfo(sd_declaration))
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
      <div className="p-4" key="1">
            {htmlOutput && (
              <div className = "text">
                <h1>HTML Structure:</h1>
                <pre>
                  <div >{htmlOutput}</div>
                </pre>
              </div>
            )}
            {children && (
              <div className = "text">
                <h1>Child CSS</h1>
                {children.map((child, i) => (
                  <div key={i}>
                    <pre>
                      <div >{child}</div>
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </div>
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
