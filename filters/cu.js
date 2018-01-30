"use strict";

const Piii = require("Piii");

const filter = [
  [
    "c",
    "k"
  ],
  [
    "uz"
  ],
  [
    "ao",
    "aos",
    "inho",
    "inhos",
    "oes",
    "uda",
    "udas",
    "udo",
    "udos"
  ]
];

module.exports = Piii.createFilter(filter);
