export type Example = {
  name: string;
  iframeUrl: string;
  defaultParentClassname: string;
  declarations: Declaration[];
  htmlOutput?: string;
  children?: string[];
  media?: Media[];

  // we should add smth about media queries here! 
  // maybe a dictionary like media = {"max-width: 768px": Declaration[]}
  // where the declarations include any @media specific CSS
  // when the media query triggers (based on the slider bar), 
  // if there's any overlap between normal declarations and media declarations, 
  // we override with media ones

};
export type Declaration = {
  name: string;
  value: string;
  enabled: boolean;
};
export type Media = {
  rule?: string;
  declarations?: Declaration[];
}