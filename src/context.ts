import { createContext } from "./deps.ts";

export const RouteContext = createContext({
  prevPath: "",
  url: new URL("https://localhost"),
});
