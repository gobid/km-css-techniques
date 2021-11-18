export type Example = {
  name: string;
  iframeUrl: string;
  defaultParentClassname: string;
  declarations: Declaration[];
  htmlOutput?: string;
  children?: string[];
};

export type Declaration = {
  name: string;
  value: string;
  enabled: boolean;
};
