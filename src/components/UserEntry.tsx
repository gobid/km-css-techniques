import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { examples } from "../lib/examples";

interface UserEntryProps {
  curr_step: number;
  setCurrStep: Dispatch<SetStateAction<Number>>;
}
export default function UserEntry({
  curr_step,
  setCurrStep,
}: UserEntryProps): JSX.Element {
  const [layoutFeature, setLayoutFeature] = useState("");
  const [websitesWithFeature, setWebsitesWithFeature] = useState(
    () => new Set<string>()
  );
  const [siteList, setSiteList] = useState([]);
  const [websiteDiff, setWebsiteDiff] = useState({});
  const [websiteLayoutCode, setWebsiteLayoutCode] = useState({});
  const [websiteDiffCode, setWebsiteDiffCode] = useState({});
  const [currSite, setCurrSite] = useState(0);
  useEffect(() => {
    setCurrSite(0);
    localStorage.setItem("currSite", "0");
    showSaved();
  }, [curr_step]);
  useEffect(() => {
    setSiteList(Array.from(websitesWithFeature));
  }, [websitesWithFeature]);

  function showSaved() {
    var layoutFeatureInput = localStorage.getItem("layoutFeature");
    if (curr_step == 1 && layoutFeatureInput) {
      (document.getElementById("layoutFeature") as HTMLInputElement).value = layoutFeatureInput;
      console.log(
        "site list stored ",
        JSON.parse(localStorage.getItem("siteList"))
      );
      JSON.parse(localStorage.getItem("siteList")).map((site) => {
        (
          document.getElementById(site + "checkbox") as HTMLInputElement
        ).checked = true;
      });
    }
    var websiteDiffInput = localStorage.getItem("websiteDiff");
    if (curr_step == 2 && websiteDiffInput) {
      var res = JSON.parse(websiteDiffInput)[siteList[currSite]];
      console.log("diff parsed", res);
      if (res !== undefined) {
        (document.getElementById("layoutDifference") as HTMLInputElement).value = res;
      }
    }
  }

  return (
    <div className="user-entry">
      {curr_step == 1 && (
        <div>
          <form style={{ display: "flex", justifyContent: "flex-start" }}>
            <input
              className="user-input layout-feature"
              id="layoutFeature"
              name="layoutFeature"
              placeholder="Enter your layout feature here"
            />
            <div
              className="website-checklist"
              style={{ display: "flex", flexFlow: "column" }}
            >
              {examples.map((ex) => (
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="checkbox"
                    name={ex.name}
                    value={ex.name}
                    id={ex.name + "checkbox"}
                    className="siteCheckboxes"
                  ></input>
                  <label htmlFor={ex.name}>{ex.name}</label>
                </div>
              ))}
            </div>
            <div className="flex-container">
              <span
                className="enter-btn"
                id="save"
                onClick={() => {

                  setLayoutFeature((document.getElementById("layoutFeature") as HTMLInputElement).value);
                  localStorage.setItem("layoutFeature",(document.getElementById("layoutFeature") as HTMLInputElement).value);
                  const checkboxes = document.getElementsByClassName("siteCheckboxes");
                  const checkedCheckboxes: Set<string> = new Set();

                  for (let i = 0; i < checkboxes.length; i++) {
                    if ((checkboxes[i] as HTMLInputElement).checked) {
                      checkedCheckboxes.add(
                        (checkboxes[i] as HTMLInputElement).value
                      );
                    }
                  }
                  setWebsitesWithFeature(checkedCheckboxes);
                  localStorage.setItem("siteList", JSON.stringify(Array.from(checkedCheckboxes)));
                }}
              >
                Enter
              </span>
            </div>
            <div>Your identified layout feature: {localStorage.getItem('layoutFeature')}</div>
          </form>
        </div>
      )}
      {curr_step == 2 && (
        <div>
          <div>
            <span>Your Identified Layout Feature:</span>
            <span>{localStorage.getItem('layoutFeature')} </span>
            <span>Current Site: {siteList[currSite]}</span>
          </div>
          <form style={{ display: "flex", justifyContent: "flex-start" }}>
            <>
              <input
                className="user-input layout-difference"
                id="layoutDifference"
                name="layoutDifference"
                placeholder={"Enter Difference for " + JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite")] + ""}
              />
              <div className="flex-container">
                <span
                  className = "enter-btn"
                  id="save"
                  onClick={() => {
                    var currSelected = siteList[currSite];
                    var siteDiffs = {};
                    siteDiffs[currSelected] = (
                      document.getElementById(
                        "layoutDifference"
                      ) as HTMLInputElement
                    ).value;
                    setWebsiteDiff({ ...websiteDiff, ...siteDiffs });
                    localStorage.setItem("websiteDiff", JSON.stringify({ ...websiteDiff, ...siteDiffs }));
                  }}
                >
                  Enter
                </span>
              </div>
            </>
            <div className="website-btns">
              {Array.from(JSON.parse(localStorage.getItem('siteList'))).map((website, i) => (
                <div className="website-btn"
                  onClick={() => {
                    setCurrSite(i);
                    localStorage.setItem("currSite", i.toString());
                    var diff = JSON.parse(localStorage.getItem("websiteDiff"));
                    if (diff && diff[JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite")]]) {
                      (document.getElementById("layoutDifference") as HTMLInputElement).value = JSON.parse(localStorage.getItem("websiteDiff"))[JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite") ]];
                    } else {
                      (document.getElementById("layoutDifference") as HTMLInputElement).value = "";
                    }
                  }}
                >
                  {website}
                </div>
              ))}
            </div>
            <div>
              {Object.keys(websiteDiff).map((site) => (
                <div>
                  <p>{site}</p>
                  <p>{websiteDiff[site]}</p>
                </div>
              ))}
            </div>
          </form>
        </div>
      )}
      {curr_step == 3 && (
        <div>
          <div>
            <span>Your Identified Layout Feature:</span>
            <span>{localStorage.getItem('LayoutFeature')}</span>
            <span>current site: {siteList[currSite]}</span>
          </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              className="user-input code-input"
              id="codeInput"
              name="codeInput"
              placeholder={"Enter Code for " + JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite")] + ""}
            />
            <input
              className="user-input code-explaintion-input"
              id="codeExplanationInput"
              name="codeExplanationInput"
              placeholder="Enter Explanation for code"
            />
            <span
              id="save"
              onClick={() => {
                var currSelected = siteList[currSite];
                var layoutCode = {};
                layoutCode[currSelected] = {
                  code: (
                    document.getElementById("codeInput") as HTMLInputElement
                  ).value,
                  explanation: (
                    document.getElementById(
                      "codeExplanationInput"
                    ) as HTMLInputElement
                  ).value,
                };
                setWebsiteLayoutCode({ ...websiteLayoutCode, ...layoutCode });
                localStorage.setItem(
                  "websiteLayoutCode",
                  JSON.stringify({ ...websiteLayoutCode, ...layoutCode })
                );

                console.log(websiteLayoutCode);
              }}
            >
              save
            </span>
            {JSON.parse(localStorage.getItem("siteList")).map((website, i) => (
              <div
                onClick={() => {
                  setCurrSite(i);
                  var codeEntry = JSON.parse(localStorage.getItem("websiteLayoutCode"));
                  var codeForCurr = codeEntry[JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite")]];
                  if (codeEntry && codeForCurr) {
                    console.log("code for curr ", codeForCurr);
                    (document.getElementById("codeInput") as HTMLInputElement).value = codeForCurr.code;
                    (document.getElementById("codeExplanationInput") as HTMLInputElement).value = codeForCurr.explanation;
                  } else {
                    (document.getElementById("codeInput") as HTMLInputElement).value = "";
                    (document.getElementById("codeExplanationInput") as HTMLInputElement).value = "";
                  }
                }}
              >
                {website}
              </div>
            ))}
          </form>
        </div>
      )}
      {curr_step == 4 && (
        <div style={{ border: "solid grey" }}>
          <div>
            <span>Your Identified Layout Feature:</span>
            <span>{localStorage.getItem('layoutFeature')}</span>
            <span>Your Identified Layout Diff:</span>
            <span>{JSON.parse(localStorage.getItem('websiteDiff'))[localStorage.getItem('currSite')]}</span>
            <span>current site: {siteList[currSite]}</span>
          </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{ border: "solid grey" }}
              id="diffCodeInput"
              name="diffCodeInput"
              placeholder={"Enter Diff Code for" + JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite")] + ""}
            />
            <input
              style={{ border: "solid grey" }}
              id="diffCodeExplanationInput"
              name="diffCodeExplanationInput"
              placeholder="Enter Explanation for  diff code"
            />
            <span
              id="save"
              onClick={() => {
                var currSelected = siteList[currSite];
                var diffCode = {};
                diffCode[currSelected] = {
                  code: (
                    document.getElementById("diffCodeInput") as HTMLInputElement
                  ).value,
                  explanation: (
                    document.getElementById(
                      "diffCodeExplanationInput"
                    ) as HTMLInputElement
                  ).value,
                };
                setWebsiteDiffCode({ ...websiteDiffCode, ...diffCode });
                localStorage.setItem(
                  "websiteDiffCode",
                  JSON.stringify({ ...websiteDiffCode, ...diffCode })
                );

                console.log(websiteDiffCode);
              }}
            >
              save
            </span>
            {JSON.parse(localStorage.getItem("siteList")).map((website, i) => (
              <div
                onClick={() => {
                  setCurrSite(i);
                  var codeEntry = JSON.parse(localStorage.getItem("websiteDiffCode"));
                  var codeForCurr = codeEntry[JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite")]];
                  if (codeEntry && codeForCurr) {
                    (document.getElementById("diffCodeInput") as HTMLInputElement).value = codeForCurr.code;
                    (document.getElementById("diffCodeExplanationInput") as HTMLInputElement).value = codeForCurr.explanation;
                  } else {
                    (document.getElementById("diffCodeInput") as HTMLInputElement).value = "";
                    (document.getElementById("diffCodeExplanationInput") as HTMLInputElement).value = ""
                  }
                }}
              >
                {website}
              </div>
            ))}
          </form>
        </div>
      )}
      {curr_step == 5 && (
        <div style={{ border: "solid grey" }}>       
         
          <button onClick={() =>{
            setCurrStep(1)
            localStorage.clear()
            }}>Start Over</button>
        </div>
      )}
      <div>
        {curr_step != 1 && (
          <button
            onClick={() => {
              setCurrStep(curr_step - 1);
            }}
          >
            Last Step
          </button>
        )}
        {curr_step != 5 && (
          <button
            onClick={() => {
              setCurrStep(curr_step + 1);
            }}
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}
