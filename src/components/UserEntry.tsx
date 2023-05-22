import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { SIGBREAK } from "constants";
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
  // const possibleSteps = ["One", "Two", "Three", "Four", "Five"];
  var i = 0;

  const [layoutFeature, setLayoutFeature] = useState("");
  const [savedLayoutFeature, setSavedLayoutFeature] = useState("");
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
    showSaved();
  }, [curr_step]);
  useEffect(() => {
    setSiteList(Array.from(websitesWithFeature));
  }, [websitesWithFeature]);

  function showSaved() {
    if (localStorage.getItem("siteList") && (curr_step == 1)) {
      (document.getElementById("layoutFeature") as HTMLInputElement).value =
        localStorage.getItem("layoutFeature");
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
    if (curr_step == 2) {
      if (localStorage.getItem("websiteDiff")) {
        console.log("diff", localStorage.getItem("websiteDiff"));
        console.log("diff parsed", JSON.parse(localStorage.getItem("websiteDiff")));
        var res = JSON.parse(localStorage.getItem("websiteDiff"))[siteList[currSite]]
        if (res !="undefined"){
          (document.getElementById("layoutDifference") as HTMLInputElement).value = res
        }
        
      }
    }
  }

  return (
    <div>
      <div className = "identified-feature">
        <strong>Your identified layout feature: </strong>
        {layoutFeature}
      </div>

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
                      onChange={(e) => {
                        var boxName = e.target.name;
                        var checked = e.target.checked;
                        if (checked) {
                          setWebsitesWithFeature((prev) =>
                            new Set(prev).add(boxName)
                          );
                        } else {
                          setWebsitesWithFeature((prev) => {
                            const next = new Set(prev);
                            next.delete(boxName);
                            return next;
                          });
                        }
                      }}
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
                    (document.getElementById("layoutFeature") as HTMLInputElement).value = '';
                    setCurrStep(curr_step + 1);
                  }}
                >
                  Enter
                </span>
              </div>
            </form>
          </div>
        )}
        {curr_step == 2 && (
          <div>
            <form style={{ display: "flex", justifyContent: "flex-start" }}>
              <>
                <input
                  className="user-input layout-difference"
                  id="layoutDifference"
                  name="layoutDifference"
                  placeholder={
                    "Enter Difference for " +
                    Array.from(websitesWithFeature)[currSite] +
                    ""
                  }
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
                    (document.getElementById("layoutDifference") as HTMLInputElement).value = '';
                    if (currSite+1 !== Array.from(websitesWithFeature).length) {
                      setCurrSite(currSite + 1);
                    }
                  }}
                >
                  Enter
                </span>
              </div>
              </>
              <div className = "website-diffs">
                {Array.from(websitesWithFeature).map((website, i) => (
                  <div className = "website-dif">
                    <div 
                      className = "website-btn"
                      onClick={() => {setCurrSite(i)}}
                      style = {{
                        boxShadow: i === currSite ? '2px 2px 5px 2px rgba(0, 0, 0, 0.3)' : 'none',
                        backgroundColor: websiteDiff[website] ? '#90EE90' : 'initial'
                        }}
                    >
                      {website}
                    </div>
                    <div>
                      {websiteDiff[website]}
                    </div>
                  </div>
                ))}
              </div>
              <div>
              </div>
            </form>
          </div>
        )}
        {curr_step == 3 && (
          <div>
            <div className = "flex-container">
              {Array.from(websitesWithFeature).map((website, i) => (
                <div className = "website-btn"
                  style = {{
                    boxShadow: i === currSite ? '2px 2px 5px 2px rgba(0, 0, 0, 0.3)' : 'none',
                    backgroundColor: websiteLayoutCode[website] ? '#90EE90' : 'initial'
                    }}
                  onClick={() => {
                    setCurrSite(i);
                  }}
                >
                  {website}
                </div>
              ))}
            </div>
            <form style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                className="user-input code-input"
                id="codeInput"
                name="codeInput"
                placeholder={
                  "Enter Code for " +
                  Array.from(websitesWithFeature)[currSite] +
                  ""
                }
              />
              <input
                className="user-input code-explaintion-input"
                id="codeExplanationInput"
                name="codeExplanationInput"
                placeholder="Enter Explanation for code"
              />
              <span
                className = "enter-btn"
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
                  console.log("layout", websiteLayoutCode);
                  if (currSite+1 !== Array.from(websitesWithFeature).length) {
                    setCurrSite(currSite + 1);
                  }
                }}
              >
                Enter
              </span>
              
            </form>
          </div>
        )}
        {curr_step == 4 && (
          <div>
            <div className = "flex-container">
              <div>
                <strong>Your Identified Layout Diff:</strong>
                <span>{websiteDiff[currSite]}</span>
              </div>
              {Array.from(websitesWithFeature).map((website, i) => (
                <div className = "website-btn"
                  style = {{
                    boxShadow: i === currSite ? '2px 2px 5px 2px rgba(0, 0, 0, 0.3)' : 'none',
                    backgroundColor: websiteDiffCode[website] ? '#90EE90' : 'initial'
                    }}
                  onClick={() => {
                    setCurrSite(i);
                  }}
                >
                  {website}
                </div>
              ))}
            </div>

            <form style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                className="user-input code-input"
                id="diffCodeInput"
                name="diffCodeInput"
                placeholder={
                  "Enter Diff Code for" +
                  Array.from(websitesWithFeature)[currSite] +
                  ""
                }
              />
              <input
                className="user-input code-explaination-input"
                id="diffCodeExplanationInput"
                name="diffCodeExplanationInput"
                placeholder="Enter Explanation for  diff code"
              />
              <span
                className = "enter-btn"
                id="save"
                onClick={() => {
                  var currSelected = siteList[currSite];
                  var layoutCode = {};
                  layoutCode[currSelected] = {
                    code: (
                      document.getElementById("diffCodeInput") as HTMLInputElement
                    ).value,
                    explanation: (
                      document.getElementById(
                        "diffCodeExplanationInput"
                      ) as HTMLInputElement
                    ).value,
                  };
                  setWebsiteDiffCode({ ...websiteDiffCode, ...layoutCode });
                  console.log(websiteDiffCode);
                  if (currSite+1 !== Array.from(websitesWithFeature).length) {
                    setCurrSite(currSite + 1);
                  }
                }}
              >
                Enter
              </span>
            </form>
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
              className = "next-step"
              onClick={() => {
                if (curr_step == 1) {
                  localStorage.setItem("layoutFeature", layoutFeature);
                  localStorage.setItem("siteList", JSON.stringify(siteList));
                } else if (curr_step == 2) {
                  localStorage.setItem(
                    "websiteDiff",
                    JSON.stringify(websiteDiff)
                  );
                }
                setCurrStep(curr_step + 1);
              }}
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
