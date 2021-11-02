export type Example = {
  iframeUrl: string;
  defaultParentClassname: string;
  declarations: Declaration[];
};

export type Declaration = {
  name: string;
  value: string;
  enabled: boolean;
};
