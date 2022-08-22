(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequiree6e2"];
parcelRequire.register("f6EPY", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $aff717fa94783fb5$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $aff717fa94783fb5$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/pascaligo/pascaligo.ts
var $aff717fa94783fb5$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "//",
        blockComment: [
            "(*",
            "*)"
        ]
    },
    brackets: [
        [
            "{",
            "}"
        ],
        [
            "[",
            "]"
        ],
        [
            "(",
            ")"
        ],
        [
            "<",
            ">"
        ]
    ],
    autoClosingPairs: [
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        }
    ],
    surroundingPairs: [
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        }
    ]
};
var $aff717fa94783fb5$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".pascaligo",
    ignoreCase: true,
    brackets: [
        {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        },
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        },
        {
            open: "<",
            close: ">",
            token: "delimiter.angle"
        }
    ],
    keywords: [
        "begin",
        "block",
        "case",
        "const",
        "else",
        "end",
        "fail",
        "for",
        "from",
        "function",
        "if",
        "is",
        "nil",
        "of",
        "remove",
        "return",
        "skip",
        "then",
        "type",
        "var",
        "while",
        "with",
        "option",
        "None",
        "transaction"
    ],
    typeKeywords: [
        "bool",
        "int",
        "list",
        "map",
        "nat",
        "record",
        "string",
        "unit",
        "address",
        "map",
        "mtz",
        "xtz"
    ],
    operators: [
        "=",
        ">",
        "<",
        "<=",
        ">=",
        "<>",
        ":",
        ":=",
        "and",
        "mod",
        "or",
        "+",
        "-",
        "*",
        "/",
        "@",
        "&",
        "^",
        "%"
    ],
    symbols: /[=><:@\^&|+\-*\/\^%]+/,
    tokenizer: {
        root: [
            [
                /[a-zA-Z_][\w]*/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@default": "identifier"
                    }
                }
            ],
            {
                include: "@whitespace"
            },
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "delimiter",
                        "@default": ""
                    }
                }
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /\$[0-9a-fA-F]{1,16}/,
                "number.hex"
            ],
            [
                /\d+/,
                "number"
            ],
            [
                /[;,.]/,
                "delimiter"
            ],
            [
                /'([^'\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /'/,
                "string",
                "@string"
            ],
            [
                /'[^\\']'/,
                "string"
            ],
            [
                /'/,
                "string.invalid"
            ],
            [
                /\#\d+/,
                "string"
            ]
        ],
        comment: [
            [
                /[^\(\*]+/,
                "comment"
            ],
            [
                /\*\)/,
                "comment",
                "@pop"
            ],
            [
                /\(\*/,
                "comment"
            ]
        ],
        string: [
            [
                /[^\\']+/,
                "string"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /'/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /\(\*/,
                "comment",
                "@comment"
            ],
            [
                /\/\/.*$/,
                "comment"
            ]
        ]
    }
};

});

})();
