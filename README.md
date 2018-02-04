# piii-filters

[![Build Status](https://travis-ci.org/piiijs/piii-filters.svg?branch=master)]()

> Filtros para [Piii.js](https://ghub.io/piii).

Veja mais informações em &lt;https://git.io/piii-docs&gt;.

## Lista

Contém filtros para os seguintes palavrões:

* [`boceta`](https://github.com/piiijs/piii-filters/blob/master/src/filters/boceta.js)
* [`caralho`](https://github.com/piiijs/piii-filters/blob/master/src/filters/caralho.js)
* [`cu`](https://github.com/piiijs/piii-filters/blob/master/src/filters/cu.js)
* [`foder`](https://github.com/piiijs/piii-filters/blob/master/src/filters/foder.js)
* [`porra`](https://github.com/piiijs/piii-filters/blob/master/src/filters/porra.js)
* [`puta`](https://github.com/piiijs/piii-filters/blob/master/src/filters/puta.js)

## Instalação

```
npm install --save piii-filters
```

...Ou use [*unpkg.com*](https://unpkg.com/).

## Uso

```js
const piiiFilters = require("piii-filters");
// {
//   boceta: [Array],
//   caralho: [Array],
//   cu: [Array],
//   foder: [Array],
//   porra: [Array],
//   puta: [Array]
// }
```

### Exemplo

```js
const Piii = require("piii");
const piiiFilters = require("piii-filters");

const piii = new Piii({
  filters: [
    ...Object.values(piiiFilters)
  ]
});

piii.filter("Vá se foder!"); // "Vá se *!"
piii.has("Vá se foder!"); // true
```

## Licença

MIT
