"use strict";

const Piii = require("Piii");

const filter = [
  [
    "caralh"
  ],
  [
    "a",
    "ada",
    "adas",
    "ao",
    "aos",
    "as",
    "inha",
    "inhas",
    "inho",
    "inhos",
    "o",
    "oes",
    "os",
    "ozao",
    "ozaos",
    "ozinho",
    "ozinhos",
    "uda",
    "udas",
    "udo",
    "udos"
  ]
];

module.exports = Piii.createFilter(filter);