export type Example = {
  name: string;
  iframeUrl: string;
  defaultParentClassname: string;
  declarations: Declaration[];
  htmlOutput?: string;
  children?: string[];
  media?: Media[];
  scoped_declarations?: ScopedDeclaration[];

};
export type Declaration = {
  name: string;
  value: string;
  enabled: boolean;
};
export type ScopedDeclaration = {
  parent?: string;
  declarations?: Declaration[];
}
export type Media = {
  rule?: string;
  declarations?: Declaration[];
  scoped_declarations?: ScopedDeclaration[];
}

export type Info = {
  name: string;
  definition: string;
  values: string[];
  implicitDependencies: string;
  websites: string[];
}