import { createContext } from "preact";

export const RouteContext = createContext({
  prevPath: "",
  url: new URL("https://localhost"),
});
