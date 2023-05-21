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
  const possibleSteps = ["One", "Two", "Three", "Four", "Five"];
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
  }, [curr_step]);
  useEffect(() => {
    setSiteList(Array.from(websitesWithFeature));
  }, [websitesWithFeature]);


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
              onChange={(e) => {
                setLayoutFeature(e.target.value);
              }}
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
                  setSavedLayoutFeature(layoutFeature);
                }}
              >
                Enter
              </span>
            </div>

            <div>Your identified layout feature: {savedLayoutFeature}</div>
          </form>
        </div>
      )}
      {curr_step == 2 && (
        <div>
          <div>
            <span>Your Identified Layout Feature:</span>
            <span>{layoutFeature} </span>
            <span>
              Current Site: {Array.from(websitesWithFeature)[currSite]}
            </span>
          </div>
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
                  console.log(websiteDiff)
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
                    style = {{ backgroundColor: websiteDiff[website] ? '#33b249' : 'initial' }}
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
              {/* <div className = "website-diffs">
                {Array.from(websitesWithFeature).map((website, i) => (
                  <div>
                    <div>{website}</div>
                    <div>{websiteDiff[i]}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </form>
        </div>
      )}
      {curr_step == 3 && (
        <div>
          <div>
            <span>Your Identified Layout Feature:</span>
            <span>{layoutFeature}</span>
            <span>
              current site: {Array.from(websitesWithFeature)[currSite]}
            </span>
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
                console.log(websiteLayoutCode);
              }}
            >
              save
            </span>
            {Array.from(websitesWithFeature).map((website, i) => (
              <div
                onClick={() => {
                  setCurrSite(i);
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
            <span>{layoutFeature}</span>
            <span>Your Identified Layout Diff:</span>
            <span>{websiteDiff[currSite]}</span>
            <span>
              current site: {Array.from(websitesWithFeature)[currSite]}
            </span>
          </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{ border: "solid grey" }}
              id="diffCodeInput"
              name="diffCodeInput"
              placeholder={
                "Enter Diff Code for" +
                Array.from(websitesWithFeature)[currSite] +
                ""
              }
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
                setWebsiteDiffCode({ ...websiteLayoutCode, ...layoutCode });
                console.log(websiteDiffCode);
              }}
            >
              save
            </span>
            {Array.from(websitesWithFeature).map((website, i) => (
              <div
                onClick={() => {
                  setCurrSite(i);
                }}
              >
                {website}
              </div>
            ))}
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
