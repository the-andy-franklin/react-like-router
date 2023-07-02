# react-like-router

A React-like router for Deno Fresh (works with the fresh router)

## Installation

Add **react-like-router** dependency to your `imports_map.json` file:

```json
{
  "imports": {
    "react-like-router": "https://deno.land/x/react-like-router/mod.ts"
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
  fileUrl={import.meta.url} // only needed if using together with file-based routing
>
  <Route path="/1">
    1
  </Route>
  <Route path="/2">
    2
    <Router routeUrl={props.url}>
      {/* fileUrl not needed here because it's passed down from first Router */}
      <Route path="/a">
        2a
      </Route>
      <Route path="/b">
        2b
      </Route>
    </Router>
  </Route>
  <Route fallthru>
    404
  </Route>
</Router>;
```

## Contributing

You can open an issue or make a PR, I'll try to check and merge (if possible)
quickly.

## License

Under [MIT](https://github.com/egmaleta/fresh_layout/blob/main/LICENSE) license.
