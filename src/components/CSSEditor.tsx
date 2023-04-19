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
    media: media.map((m) => diffMedia(m, diffAgainstDeclarations)),
    scoped_declarations: scoped_declarations.map((sd) =>
      diffScopedDeclarations(sd, diffAgainstDeclarations)
    ),
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
                <div>
                  <h1>
                    .{defaultParent}
                  </h1>
                  <div>
                    {values.declarations.map((declaration, index) => (
                      toggler(declaration, index, "declarations", getInfo(declaration))
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
            <br/><p className = "text" style={{backgroundColor:"#A7F3D0"}}>Green highlights mean the two sites share the same property / value pair. Only applies to CSS above, not below.</p>
            <br/><p className = "text" style={{backgroundColor:"#FDE68A"}}> Yellow highlights mean the two sites share the same property, but with different values. Only applies to CSS above, not below.</p>
            <hr/>
            <FieldArray name="media">
              {({ insert, remove, push }) => (
                <div>
                  {values.media.map((media_query, m_index) => (
                    <div>
                      <h1>
                        {media_query.rule} {"{"}
                      </h1>

                      {media_query.scoped_declarations.map((scoped_declaration, sd_index) => (
                          <div>
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
                <div style={{fontSize: 18, fontFamily: "monospace"}}>
                  {values.scoped_declarations.map((scoped_declaration, sd_index) => (
                      <div>
                      <h1>
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
