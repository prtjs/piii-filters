"use strict";

const Piii = require("Piii");

const filter = [
  [
    "bocet"
  ],
  [
    "a",
    "ada",
    "adas",
    "ao",
    "aos",
    "as",
    "azinha",
    "azinhas",
    "azona",
    "azonas",
    "inha",
    "inhas",
    "oes",
    "uda",
    "udas",
    "udo",
    "udos"
  ]
];

module.exports = Piii.createFilter(filter);