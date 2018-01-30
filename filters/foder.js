"use strict";

const Piii = require("Piii");

const filter = [
  [
    "fod"
  ],
  [
    "ido",  // particípio
    "idos", // particípio (plural)
    "ida",  // particípio (feminino)
    "idas", // particípio (feminino; plural)
    "endo", // gerúndio

    /**
     * Conjugações do verbo.
     */
    "a",
    "ais",
    "am",
    "amo",
    "amos",
    "as",
    "e",
    "ei",
    "eis",
    "em",
    "emo",
    "emos",
    "endo",
    "er",
    "era",
    "eram",
    "eramo",
    "eramos",
    "erao",
    "eras",
    "erdes",
    "erei",
    "ereis",
    "erem",
    "eremos",
    "eres",
    "eria",
    "eriam",
    "eriamos",
    "erias",
    "erieis",
    "ermo",
    "ermos",
    "es",
    "esse",
    "esseis",
    "essem",
    "essemos",
    "esses",
    "este",
    "estes",
    "eu",
    "i",
    "ia",
    "iam",
    "iamo",
    "iamos",
    "ias",
    "iei",
    "ieis",
    "o"
  ]
];

module.exports = Piii.createFilter(filter);
