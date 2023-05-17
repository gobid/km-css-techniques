import React, { useState, useEffect } from "react";
import { examples } from "../lib/examples";

interface UserEntryProps {
  curr_step: String;
}
export default function UserEntry({ curr_step }: UserEntryProps): JSX.Element {
  console.log("step", curr_step);
  const [layoutFeature, setLayoutFeature] = useState("");
  const [websitesWithFeature, setWebsitesWithFeature] = useState(
    () => new Set<string>()
  );
  const [websiteDiff, setWebsiteDiff] = useState({});
  const [websiteLayoutCode, setWebsiteLayoutCode] = useState({});
  const [websiteDiffCode, setWebsiteDiffCode] = useState({});
  const [currSite, setCurrSite] = useState(0);
  useEffect(() => {
    setCurrSite(0);
  }, [curr_step]);

  return (
    <>
      {curr_step == "One" && (
        <div style={{ border: "solid grey" }}>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{ border: "solid grey" }}
              id="layoutFeature"
              name="layoutFeature"
              placeholder="Enter your layout feature here"
              onChange={(e) => {
                setLayoutFeature(e.target.value);
                console.log("lf ", layoutFeature);
              }}
            />
            <div style={{ display: "flex", flexFlow: "column" }}>
              {examples.map((ex) => (
                <div style={{ display: "flex" }}>
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
                      console.log("checkbox sites ", websitesWithFeature);
                    }}
                  ></input>
                  <label htmlFor={ex.name}>{ex.name}</label>
                </div>
              ))}
            </div>
            <button type="submit"></button>
          </form>
        </div>
      )}
      {curr_step == "Two" && (
        <div style={{ border: "solid grey" }}>
          <div>
            <span>Your Identified Layout Feature:</span>
            <span>{layoutFeature}</span>
            <span>
              current site: {Array.from(websitesWithFeature)[currSite]}
            </span>
          </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{ border: "solid grey" }}
              id="layoutDifference"
              name="layoutDifference"
              placeholder={
                "Enter Difference for" +
                Array.from(websitesWithFeature)[currSite] +
                ""
              }
            />
            <div style={{ display: "flex", flexFlow: "column" }}></div>
            {/* to do add last site btn too */}
            <span
              id="nextSite"
              onClick={() => {
                if (currSite <= Array.from(websitesWithFeature).length - 1) {
                  var siteList = Array.from(websitesWithFeature);
                  var currSelected = siteList[currSite];
                  var siteDiffs = {};
                  siteDiffs[currSelected] = (
                    document.getElementById(
                      "layoutDifference"
                    ) as HTMLInputElement
                  ).value;
                  setWebsiteDiff({ ...websiteDiff, ...siteDiffs });
                  setCurrSite(currSite + 1);
                  if (currSite == Array.from(websitesWithFeature).length - 1) {
                    document.getElementById("nextSite").style.display = "none";
                  }
                } else {
                  document.getElementById("nextSite").style.display = "none";
                }
              }}
            >
              next site
            </span>
          </form>
        </div>
      )}
      {curr_step == "Three" && (
        <div style={{ border: "solid grey" }}>
          <div>
            <span>Your Identified Layout Feature:</span>
            <span>{layoutFeature}</span>
            <span>
              current site: {Array.from(websitesWithFeature)[currSite]}
            </span>
          </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{ border: "solid grey" }}
              id="codeInput"
              name="codeInput"
              placeholder={
                "Enter Code for" +
                Array.from(websitesWithFeature)[currSite] +
                ""
              }
            />
            <input
              style={{ border: "solid grey" }}
              id="codeExplanationInput"
              name="codeExplanationInput"
              placeholder="Enter Explanation for code"
            />
            <span
              id="nextSite"
              onClick={() => {
                if (currSite <= Array.from(websitesWithFeature).length - 1) {
                  var siteList = Array.from(websitesWithFeature);
                  var currSelected = siteList[currSite];
                  var layoutCode = {};
                  layoutCode[currSelected] = {
                    code: (document.getElementById("codeInput") as HTMLInputElement).value,
                    explanation: (document.getElementById("codeExplanationInput") as HTMLInputElement).value,}
                  console.log('layout code entered prev ', websiteLayoutCode, layoutCode, {...layoutCode})
                  setWebsiteLayoutCode({ ...websiteLayoutCode, ...layoutCode });
                  setCurrSite(currSite + 1);
                  if (currSite == Array.from(websitesWithFeature).length - 1) {
                    document.getElementById("nextSite").style.display = "none";
                  }
                } else {
                  document.getElementById("nextSite").style.display = "none";
                }
              }}
            >
              next site
            </span>
          </form>
        </div>
      )}
    </>
  );
}
