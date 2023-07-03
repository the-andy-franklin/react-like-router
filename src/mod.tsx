import { RouteContext } from "./context.ts";
import { RouteProps, RouterProps } from "./types.ts";
import { useContext } from "preact/hooks";

export const Route = (props: RouteProps) => {
  if ("path" in props) {
    if (!props.path.startsWith("/")) {
      throw new Error('Route path must start with "/"');
    }
  }

  const { children } = props;
  if (!children) return null;

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
      "path" in child.props
    ) {
      if (url.pathname.startsWith(prevPath + child.props.path)) {
        return (
          <RouteContext.Provider
            value={{ prevPath: prevPath + child.props.path }}
          >
            {child}
          </RouteContext.Provider>
        );
      }
    }
  }

  return null;
};
