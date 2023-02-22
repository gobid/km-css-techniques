/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Formik, Form, FieldArray, Field, useFormikContext } from "formik";
import { Declaration, Media } from "../lib/types";

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
};

interface CSSEditorProps {
  declarations: Declaration[];
  media: Media;
  diffAgainstDeclarations: Declaration[];
  onChange: (declarations: Declaration[]) => void;
}

export default function CSSEditor({
  declarations,
  diffAgainstDeclarations,
  media,
  onChange,
}: CSSEditorProps): JSX.Element {
  const initialValues = {
    declarations: diffDeclarations(declarations, diffAgainstDeclarations),
    media: media, //sorta confused here
  };

  return (
    <div className="w-full px-4 py-4">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={async (values) => {
          onChange(values.declarations);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="declarations">
              {({ insert, remove, push }) => (
                <div>
                  {media.rule}
                  {media.declarations.map((declaration, index) => (
                    <div>
                      {declaration.name}: {declaration.value}
                    </div>
                  ))}
                  {values.declarations.map((declaration, index) => (
                    <div
                      className={`flex gap-2 items-center transition-opacity px-2 py-2 mb-4 rounded ${
                        !declaration.enabled ? "opacity-60" : ""
                      } ${getColorForDiffType(declaration.diffType)} `}
                      key={index}
                    >
                      <div>
                        <Field
                          name={`declarations[${index}].enabled`}
                          type="checkbox"
                          checked={declaration.enabled}
                        />
                      </div>

                      <div className="flex-1">
                        <Field
                          name={`declarations.${index}.name`}
                          placeholder="background-color"
                          type="text"
                          className="input"
                        />
                      </div>

                      <div className="flex-1">
                        {suggestedValues[declaration.name] ? (
                          <Field
                            name={`declarations.${index}.value`}
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
                            name={`declarations.${index}.value`}
                            placeholder="blue"
                            type=""
                            className="input"
                          />
                        )}
                      </div>
                    </div>
                  ))}

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
