import { RouteContext } from "./context.ts";
import { RouteProps, RouterProps } from "./types.ts";
import { useContext } from "preact/hooks";

export const Route = (props: RouteProps) => {
  const { children } = props;
  if (!children) return null;

  if ("path" in props) {
    if (!props.path.startsWith("/")) {
      throw new Error('Route path must start with "/"');
    }
  }

  return <>{children}</>;
};

export const Router = ({ url, filePath, children }: RouterProps) => {
  if (!children) return null;
  if (!Array.isArray(children)) children = [children];
  const prevPath = useContext(RouteContext).prevPath ||
    (filePath?.match(/\/routes(\/[^*]+)*\*\.tsx$/)?.[1] ?? "");

  for (const child of children) {
    if (
      typeof child === "object" && "props" in child &&
      typeof child.props === "object" &&
      ("path" in child.props || "fallthru" in child.props)
    ) {
      if ("fallthru" in child.props) return child;
      const thisPath = prevPath + child.props.path;

      const splitUrl = url.pathname.split("/");
      const splitPath = thisPath.split("/");

      const joinedUrl = splitUrl.slice(0, splitPath.length).join("/");

      if (joinedUrl === thisPath) {
        return (
          <RouteContext.Provider
            value={{ prevPath: thisPath }}
          >
            {child}
          </RouteContext.Provider>
        );
      }
    }
  }

  return null;
};
