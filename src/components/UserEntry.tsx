import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { examples } from "../lib/examples";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'


interface UserEntryProps {
  curr_step: number;
  setCurrStep: Dispatch<SetStateAction<Number>>;
}
const specificInstructions = [
  "List one layout feature shared by any 1-5 websites, and mark the corresponding checkboxes.",
  "List one distinguishing difference for each  website in the grouping. You may repeat differences if a subset of the grouping shares a distinguishing characteristic.",
  "Identify and copy the specific line/s of CSS (or HTML) leading to the overall layout feature you identified in step 1. Then, explain why that code is responsible for the feature.",
  "Identify and copy the specific line/s of CSS (or HTML) leading to each layout difference you identified in step 2. Then, explain why that code is responsible for that difference."
]

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
  const [currStepDone, setCurrStepDone] = useState(false);
  useEffect(() => {
    setCurrSite(0);
    localStorage.setItem("currSite", "0");
    showSaved();
    setCurrStepDone(false)
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
          <div>
              <div>{specificInstructions[curr_step-1]}</div>
              <span>Your Identified Layout Feature: </span>
              <strong>{localStorage.getItem('layoutFeature')}</strong>
          </div>
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
                  setCurrStepDone(true);
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
          <div>
            <div>{specificInstructions[curr_step-1]}</div>
            <span>Your Identified Layout Feature: </span>
            <strong>{localStorage.getItem('layoutFeature')} </strong>
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
                    if (currSite+1 !== Array.from(websitesWithFeature).length) {
                      setCurrSite(currSite + 1);
                    }else{
                      setCurrStepDone(true)
                    }
                    localStorage.setItem("websiteDiff", JSON.stringify({ ...websiteDiff, ...siteDiffs }));
                  }}
                >
                  Enter
                </span>
              </div>
            </>
            <div className="website-diffs">
              {JSON.parse(localStorage.getItem('siteList')).map((website, i) => (
                <div className = "website-dif">
                  <div className="website-btn"
                    style = {{
                      boxShadow: i === currSite ? '2px 2px 5px 2px rgba(0, 0, 0, 0.3)' : 'none',
                      backgroundColor: websiteDiff[website] ? '#90EE90' : 'initial'
                      }}
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
                  {websiteDiff[website]}
                </div>
              ))}
            </div>
          </form>
        </div>
      )}
      {curr_step == 3 && (
        <div>
          <div>{specificInstructions[curr_step-1]}</div>
          <div className = "flex-container">
            <div>
                <span>Your Identified Layout Feature: </span>
                <strong>{localStorage.getItem('layoutFeature')}</strong>
            </div>
            <div className = "flex-container">
              {JSON.parse(localStorage.getItem("siteList")).map((website, i) => (
                <div className = "website-btn"
                  style = {{
                    boxShadow: i === currSite ? '2px 2px 5px 2px rgba(0, 0, 0, 0.3)' : 'none',
                    backgroundColor: websiteLayoutCode[website] ? '#90EE90' : 'initial'
                  }}
                  onClick={() => {
                    setCurrSite(i);
                    var codeEntry = JSON.parse(localStorage.getItem("websiteLayoutCode"));
                    if (codeEntry) {
                      var codeForCurr = codeEntry[JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite")]];
                      if (codeForCurr) {
                      console.log("code for curr ", codeForCurr);
                      (document.getElementById("codeInput") as HTMLInputElement).value = codeForCurr.code;
                      (document.getElementById("codeExplanationInput") as HTMLInputElement).value = codeForCurr.explanation;
                    }} 
                    else {
                      (document.getElementById("codeInput") as HTMLInputElement).value = "";
                      (document.getElementById("codeExplanationInput") as HTMLInputElement).value = "";
                    }
                  }}
                >
                  {website}
                </div>
              ))}
            </div>
          </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              className="user-input code-input"
              id="codeInput"
              name="codeInput"
              placeholder={"Enter Code for " + siteList[currSite] + ""}
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
                localStorage.setItem(
                  "websiteLayoutCode",
                  JSON.stringify({ ...websiteLayoutCode, ...layoutCode })
                );
                if (currSite+1 !== Array.from(websitesWithFeature).length) {
                  setCurrSite(currSite + 1);
                }else{
                  setCurrStepDone(true)
                }
                console.log(websiteLayoutCode);
              }}
            >
              Enter
            </span>
            
          </form>
        </div>
      )}
      {curr_step == 4 && (
        <div>
          <div>{specificInstructions[curr_step-1]}</div>
          <div className = "flex-container">
            <div>
              <div>Your Identified Layout Feature: {localStorage.getItem('layoutFeature')}</div>
              <div>Your Identified Layout Diff: {JSON.parse(localStorage.getItem('websiteDiff'))[localStorage.getItem('currSite')]}</div>
            </div>
          </div>
          <div className="flex-container">
              {JSON.parse(localStorage.getItem("siteList")).map((website, i) => (
                <div className="website-btn"
                style = {{
                  boxShadow: i === currSite ? '2px 2px 5px 2px rgba(0, 0, 0, 0.3)' : 'none',
                  backgroundColor: websiteDiffCode[website] ? '#90EE90' : 'initial'
                  }}
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
            </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              className="user-input code-input"
              id="diffCodeInput"
              name="diffCodeInput"
              placeholder={"Enter Diff Code for" + JSON.parse(localStorage.getItem("siteList"))[localStorage.getItem("currSite")] + ""}
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
                if (currSite+1 !== Array.from(websitesWithFeature).length) {
                  setCurrSite(currSite + 1);
                }else{
                  setCurrStepDone(true)
                }
                console.log(websiteDiffCode);
              }}
            >
              Enter
            </span>
          </form>
        </div>
      )}
      {curr_step == 5 && (
        <div style={{ border: "solid grey" }}>     
          <div>
            <h1>You Identified {localStorage.getItem("layoutFeature")} as a layout feature</h1>
            <div>Sites containing {localStorage.getItem("layoutFeature")}</div>
            {JSON.parse(localStorage.getItem('siteList')).map((site:string) =>(
              <div>
                <h2> {site}</h2>
                <div className="siteInfo">

                <div>{site} has this feature due to the following code:</div>
                <div>{JSON.parse(localStorage.getItem("websiteLayoutCode"))[site].code}</div>
                <div>because the code above: {JSON.parse(localStorage.getItem("websiteLayoutCode"))[site].explanation}</div>
                <div>Also {site} is different in the following way:{JSON.parse(localStorage.getItem('websiteDiff'))[site]}</div>
                <div>{site} has this difference due to the following code:</div>
                <div>{JSON.parse(localStorage.getItem("websiteDiffCode"))[site].code}</div>
                <div>because {JSON.parse(localStorage.getItem("websiteDiffCode"))[site].explanation}</div>
                </div>
              </div>
            ))}
             
          </div>
         
          <button onClick={() =>{
            setCurrStep(1)
            // save stuff first
            var iteration = {
              layoutFeature: localStorage.getItem('layoutFeature'),
              sitesWithFeature: JSON.parse(localStorage.getItem('siteList')),
              websiteDiffs: JSON.parse(localStorage.getItem('websiteDiff')),
              layoutCode: JSON.parse(localStorage.getItem("websiteLayoutCode")),
              diffCode: JSON.parse(localStorage.getItem('websiteDiffCode'))
            }
            var oldIterations = localStorage.getItem('iterations')
            localStorage.setItem("iterations", oldIterations+JSON.stringify(iteration))
            localStorage.setItem("currSite", "0");
            localStorage.setItem("layoutFeature","");
            localStorage.setItem("siteList", "");
            localStorage.setItem("websiteDiff", "");
            localStorage.setItem("websiteLayoutCode","");
            localStorage.setItem("websiteDiffCode", "");
            }}>Start Over</button>
        </div>
      )}
      <div>
        {curr_step != 1 && (
          <button
            className = "next-btn"
            onClick={() => {
              setCurrStep(curr_step - 1);
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} style = {{lineHeight: "50px"}}/>
          </button>
        )}
        {curr_step != 5 && currStepDone && (
          <button className = "next-btn"
            onClick={() => {
              setCurrStep(curr_step + 1);
            }}
          >
            <FontAwesomeIcon icon={faAngleRight}/>
          </button>
        )}
      </div>
    </div>
  );
}
