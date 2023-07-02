import { RouteContext } from "./context.ts";
import { RouteProps, RouterProps } from "./types.ts";
import { useContext } from "preact/hooks";

export const Route = ({ path, children }: RouteProps) => {
  if (!path.startsWith("/")) {
    throw new Error("Route path must start with /");
  }

  const { url, prevPath } = useContext(RouteContext);

  const prevRoute = (prevPath + path).split("/");
  const fullRoute = url.pathname.split("/");

  const joinedFullRoute = fullRoute.slice(0, prevRoute.length).join("/");
  const joinedPrevRoute = prevRoute.join("/");

  if (joinedFullRoute === joinedPrevRoute) {
    return (
      <RouteContext.Provider value={{ url, prevPath: prevPath + path }}>
        {children}
      </RouteContext.Provider>
    );
  }

  return null;
};

export const Router = (
  { routeUrl, fileUrl, children }: RouterProps,
) => {
  const baseUrl = fileUrl?.match(/\/routes(\/[^*]+)*\*\.tsx$/)?.[1] ?? "";

  return (
    <RouteContext.Provider value={{ prevPath: baseUrl, url: routeUrl }}>
      {children}
    </RouteContext.Provider>
  );
};
