# react-like-router

A React-like router for Deno Fresh (works with the fresh router)

## Installation

Add **react-like-router** dependency to your `deno.json` file:

```json
{
  "imports": {
    "react-like-router": "https://deno.land/x/react_like_router/mod.ts"
  }
}
```

## Usage

Can only be used on a route that ends in a wildcard (`routes/*.tsx`). Router
must be given the path URL to function. It can be passed the file URL to make it
work with the Deno Fresh router.

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
  <Route path="/">
    404
  </Route>
</Router>;
```

## Contributing

You can open an issue or make a PR, I'll try to check and merge (if possible)
quickly.

## License

Under [MIT](https://github.com/egmaleta/fresh_layout/blob/main/LICENSE) license.
