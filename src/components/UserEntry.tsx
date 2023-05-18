import { SIGBREAK } from "constants";
import React, { useState, useEffect } from "react";
import { examples } from "../lib/examples";

interface UserEntryProps {
  curr_step: String;
}
export default function UserEntry({ curr_step }: UserEntryProps): JSX.Element {
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
    console.log('prev step', curr_step)
  }, [curr_step]);
  useEffect(() => {
    setSiteList(Array.from(websitesWithFeature));
  }, [websitesWithFeature]);

  return (
    <>
      {curr_step == "One" && (
        <div style={{ border: "solid grey" }}>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{ border: "solid grey", width:`${30}%`, textAlign: "center" }}
              id="layoutFeature"
              name="layoutFeature"
              placeholder="Enter your layout feature here"
              onChange={(e) => {
                setLayoutFeature(e.target.value);
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
            <span>{layoutFeature} </span>
            <span>
              Current Site: {Array.from(websitesWithFeature)[currSite]}
            </span>
          </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <>
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
              <span
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
              save
            </span>
            </>
            {Array.from(websitesWithFeature).map((website, i) => (
              <div onClick={() => {
                setCurrSite(i)}}
              >{website}</div>
            ))}
            
          </form>
          <div>
            {Object.keys(websiteDiff).map((site) => (
              <div>
                <p>{site}</p>
                <p>{websiteDiff[site]}</p>
              </div>
            ))}
          </div>
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
              id="save"
              onClick={() => {
                var currSelected = siteList[currSite];
                var layoutCode = {};
                  layoutCode[currSelected] = {
                    code: (document.getElementById("codeInput") as HTMLInputElement).value,
                    explanation: (document.getElementById("codeExplanationInput") as HTMLInputElement).value,}
                  setWebsiteLayoutCode({ ...websiteLayoutCode, ...layoutCode });
                console.log(websiteLayoutCode)
              }}
            >
              save
            </span>
            {Array.from(websitesWithFeature).map((website, i) => (
              <div onClick={() => {
                setCurrSite(i)}}
              >{website}</div>
            ))}
          </form>
        </div>
      )}
      {curr_step=="Four" && (
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
                  code: (document.getElementById("diffCodeInput") as HTMLInputElement).value,
                  explanation: (document.getElementById("diffCodeExplanationInput") as HTMLInputElement).value,}
                  setWebsiteDiffCode({ ...websiteLayoutCode, ...layoutCode });
              console.log(websiteDiffCode)
            }}
          >
            save
          </span>
          {Array.from(websitesWithFeature).map((website, i) => (
            <div onClick={() => {
              setCurrSite(i)}}
            >{website}</div>
          ))}
        </form>
      </div>
      )}
    </>
  );
}
