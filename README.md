# Swatches

## Install and run

Install with `make`.

Run with `make server`.

Open [http://localhost:1337](http://localhost:1337) in your browser.

Develop with `make dev`.

Test with `make test`.

If you don't have `make` available on your system, you can run `npm install` then `npm start`, `npm test` or `npm run dev`.

Bundle stats can be seen at [http://localhost:1337/statistics.html](http://localhost:1337/statistics.html).


## Notes

- Technologies used are: Webpack, TypeScript, Angular, D3, SASS, & Express. This is kind of overkill for a tool this simple. In the real world for a project this small and simple I would use completely vanilla HTML, CSS and JavaScript (ES6). Browser support these days is pretty good.

- No older browser support or polyfilling

- No unit tests! I just left them until last, encountered some issues with jest+typescript, then ran out of time

- I started to go for a "component" style file organisation but then went back to a more "traditional" folder structure, so the files aren't as neatly organised as I'd like

- I don't usually use TypeScript, but thought I'd play around with it for fun. I like it, but there are a few annoying linter errors (import paths and express methods)

- D3 is included to play around with generating my own colour swatches when the api does not have one, or I can't find a fallback in material-ui.

- Although the sass-loader is used, no actual SASS functionality is used, because I honestly couldn't think of a use.

- API results are not cached, though they should be
