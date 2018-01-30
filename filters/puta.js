"use strict";

const Piii = require("Piii");

const filter = [
  [
    "put"
  ],
  [
    "a",
    "ada",
    "adas",
    "ao",
    "aos",
    "aria",
    "arias",
    "as",
    "o",
    "oes",
    "os",
    "zinha",
    "zinhas",
    "zona",
    "zonas"
  ]
];

module.exports = Piii.createFilter(filter);
