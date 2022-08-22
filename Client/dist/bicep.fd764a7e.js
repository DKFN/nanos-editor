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
parcelRequire.register("50D5k", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $3a5b4544ddfe9712$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $3a5b4544ddfe9712$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/bicep/bicep.ts
var $3a5b4544ddfe9712$var$bounded = (text)=>`\\b${text}\\b`;
var $3a5b4544ddfe9712$var$identifierStart = "[_a-zA-Z]";
var $3a5b4544ddfe9712$var$identifierContinue = "[_a-zA-Z0-9]";
var $3a5b4544ddfe9712$var$identifier = $3a5b4544ddfe9712$var$bounded(`${$3a5b4544ddfe9712$var$identifierStart}${$3a5b4544ddfe9712$var$identifierContinue}*`);
var $3a5b4544ddfe9712$var$keywords = [
    "targetScope",
    "resource",
    "module",
    "param",
    "var",
    "output",
    "for",
    "in",
    "if",
    "existing"
];
var $3a5b4544ddfe9712$var$namedLiterals = [
    "true",
    "false",
    "null"
];
var $3a5b4544ddfe9712$var$nonCommentWs = `[ \\t\\r\\n]`;
var $3a5b4544ddfe9712$var$numericLiteral = `[0-9]+`;
var $3a5b4544ddfe9712$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "//",
        blockComment: [
            "/*",
            "*/"
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
        ]
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
            open: "'",
            close: "'"
        },
        {
            open: "'''",
            close: "'''"
        }
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
            open: "'",
            close: "'",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "'''",
            close: "'''",
            notIn: [
                "string",
                "comment"
            ]
        }
    ],
    autoCloseBefore: ":.,=}])' \n	",
    indentationRules: {
        increaseIndentPattern: new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),
        decreaseIndentPattern: new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")
    }
};
var $3a5b4544ddfe9712$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".bicep",
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
        }
    ],
    symbols: /[=><!~?:&|+\-*/^%]+/,
    keywords: $3a5b4544ddfe9712$var$keywords,
    namedLiterals: $3a5b4544ddfe9712$var$namedLiterals,
    escapes: `\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\\${)`,
    tokenizer: {
        root: [
            {
                include: "@expression"
            },
            {
                include: "@whitespace"
            }
        ],
        stringVerbatim: [
            {
                regex: `(|'|'')[^']`,
                action: {
                    token: "string"
                }
            },
            {
                regex: `'''`,
                action: {
                    token: "string.quote",
                    next: "@pop"
                }
            }
        ],
        stringLiteral: [
            {
                regex: `\\\${`,
                action: {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            },
            {
                regex: `[^\\\\'$]+`,
                action: {
                    token: "string"
                }
            },
            {
                regex: "@escapes",
                action: {
                    token: "string.escape"
                }
            },
            {
                regex: `\\\\.`,
                action: {
                    token: "string.escape.invalid"
                }
            },
            {
                regex: `'`,
                action: {
                    token: "string",
                    next: "@pop"
                }
            }
        ],
        bracketCounting: [
            {
                regex: `{`,
                action: {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            },
            {
                regex: `}`,
                action: {
                    token: "delimiter.bracket",
                    next: "@pop"
                }
            },
            {
                include: "expression"
            }
        ],
        comment: [
            {
                regex: `[^\\*]+`,
                action: {
                    token: "comment"
                }
            },
            {
                regex: `\\*\\/`,
                action: {
                    token: "comment",
                    next: "@pop"
                }
            },
            {
                regex: `[\\/*]`,
                action: {
                    token: "comment"
                }
            }
        ],
        whitespace: [
            {
                regex: $3a5b4544ddfe9712$var$nonCommentWs
            },
            {
                regex: `\\/\\*`,
                action: {
                    token: "comment",
                    next: "@comment"
                }
            },
            {
                regex: `\\/\\/.*$`,
                action: {
                    token: "comment"
                }
            }
        ],
        expression: [
            {
                regex: `'''`,
                action: {
                    token: "string.quote",
                    next: "@stringVerbatim"
                }
            },
            {
                regex: `'`,
                action: {
                    token: "string.quote",
                    next: "@stringLiteral"
                }
            },
            {
                regex: $3a5b4544ddfe9712$var$numericLiteral,
                action: {
                    token: "number"
                }
            },
            {
                regex: $3a5b4544ddfe9712$var$identifier,
                action: {
                    cases: {
                        "@keywords": {
                            token: "keyword"
                        },
                        "@namedLiterals": {
                            token: "keyword"
                        },
                        "@default": {
                            token: "identifier"
                        }
                    }
                }
            }
        ]
    }
};

});

})();
