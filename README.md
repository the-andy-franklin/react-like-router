# react-like-router

A React-like router for Deno Fresh (works with the fresh router)

## Installation

Add **react-like-router** dependency to your `imports_map.json` file:

```json
{
  "imports": {
    "react-like-router": "https://deno.land/x/react-like-router@latest/mod.ts"
  }
}
```

## Usage

Can only be used on a route that ends in a wildcard (`*.tsx`). Router must be
given the route URL and the file URL so that it can reconstruct the fresh
routes. Routes can be nested within each other without needing another Router
component

```tsx
<Router
  routeUrl={props.url}
  fileUrl={import.meta.url}
>
  <Route path="/1">
    1
    <Route path="/2">
      2
    </Route>
  </Route>
  <Route path="/3">
    3
  </Route>
</Router>;
```

## Contributing

You can open an issue or make a PR, I'll try to check and merge (if possible)
quickly.

## License

Under [MIT](https://github.com/egmaleta/fresh_layout/blob/main/LICENSE) license.
