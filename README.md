# Otrans

[![Otrans](http://img.shields.io/npm/v/otrans.svg)](https://www.npmjs.org/package/otrans)
[![Otrans](http://img.shields.io/npm/dm/otrans.svg)](https://www.npmjs.org/package/otrans)
[![Build Status](https://travis-ci.org/XadillaX/otrans.svg?branch=master)](https://travis-ci.org/XadillaX/otrans)
[![Coverage Status](https://img.shields.io/coveralls/XadillaX/otrans/master.svg)](https://coveralls.io/r/XadillaX/otrans?branch=master)
[![License](https://img.shields.io/npm/l/otrans.svg?style=flat)](https://www.npmjs.org/package/otrans)
[![Dependency Status](https://david-dm.org/XadillaX/otrans.svg)](https://david-dm.org/XadillaX/otrans)

Object key transformation for Node.js.

## Installation

```sh
$ npm install --save -d otrans
```

## Usage

```js
const otrans = require("otrans");
```

### .toCamel

```js
otrans.toCamel({
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": [
                            "GML",
                            "XML"
                        ]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
});

// {
//     "glossary": {
//         "title": "example glossary",
//         "glossDiv": {
//             "title": "S",
//             "glossList": {
//                 "glossEntry": {
//                     "id": "SGML",
//                     "sortAs": "SGML",
//                     "glossTerm": "Standard Generalized Markup Language",
//                     "acronym": "SGML",
//                     "abbrev": "ISO 8879:1986",
//                     "glossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
//                         "glossSeeAlso": [
//                             "GML",
//                             "XML"
//                         ]
//                     },
//                     "glossSee": "markup"
//                 }
//             }
//         }
//     }
// }
```

### .toUnderscore

```js
otrans.toUnderscore({
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": [
                            "GML",
                            "XML"
                        ]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
});

// {
//     "glossary": {
//         "title": "example glossary",
//         "gloss_div": {
//             "title": "S",
//             "gloss_list": {
//                 "gloss_entry": {
//                     "id": "SGML",
//                     "sort_as": "SGML",
//                     "gloss_term": "Standard Generalized Markup Language",
//                     "acronym": "SGML",
//                     "abbrev": "ISO 8879:1986",
//                     "gloss_def": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
//                         "gloss_see_also": [
//                             "GML",
//                             "XML"
//                         ]
//                     },
//                     "gloss_see": "markup"
//                 }
//             }
//         }
//     }
// }
```

## Contribute

You're welcome to make pull requests!

「雖然我覺得不怎麼可能有人會關注我」
