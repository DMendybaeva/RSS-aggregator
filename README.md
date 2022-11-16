# RSS-aggregator

### Hexlet tests and linter status:

[![Maintainability](https://api.codeclimate.com/v1/badges/c04f676dc2ba420b57bd/maintainability)](https://codeclimate.com/github/DMendybaeva/RSS-aggregator/maintainability)
[![Eslint check](https://github.com/DMendybaeva/RSS-aggregator/workflows/eslint-check/badge.svg)](https://github.com/DMendybaeva/RSS-aggregator/actions)

RSS - special format that describes news feeds, articles announcements etc. It`s the easiest way for websites (usually blogs) to allow users to subscribe for feeds changes. For this, special services called RSS aggregators are used.
This project is simple implementation of RSS aggregator, that allow user to subscribe for interesting feeds. RSS aggregator automatically monitor each feed updates and show new posts or articles for the user. By clicking on each post user can see modal preview, after it post would be marked as readed.
You can check deployed project on [Vercel] #.
P.S. You can use [this](https://github.com/mbertolacci/lorem-rss) for testing all project features.
Used technologies:
- Vanilla JS: DOM API, Promises.
- [onChange](https://github.com/sindresorhus/on-change#on-change) for manipulations with state.
- [yup](https://github.com/jquense/yup#yup) for validation.
- [i18next](https://www.i18next.com/) for manipulation with text.
- [axios](https://axios-http.com/) for HTTP requests.
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for layout.
- [Webpack](https://webpack.js.org/) for building.
## Installation
Clone project
```sh
git clone git@github.com:DMendybaeva/RSS-aggregator.git
```

Go in project dir
```sh
cd RSS-aggregator
```

Install dependecies
```sh
make install
```

In case of development:
```sh
make develop
```
Or production build:
```sh
make build
```

### Authors:
Diana Mendybaeva