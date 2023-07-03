import { type JSX } from "preact";

export type RouteProps = {
  path: string;
  children?: string | JSX.Element | (string | JSX.Element)[];
};

export type RouterProps = {
  url: URL;
  filePath?: string;
  children?: string | JSX.Element | (string | JSX.Element)[];
};
