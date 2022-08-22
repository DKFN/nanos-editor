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
parcelRequire.register("iqAXS", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $d6a75427b8cee39a$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $d6a75427b8cee39a$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/ini/ini.ts
var $d6a75427b8cee39a$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "#"
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
            open: '"',
            close: '"'
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
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        }
    ]
};
var $d6a75427b8cee39a$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".ini",
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            [
                /^\[[^\]]*\]/,
                "metatag"
            ],
            [
                /(^\w+)(\s*)(\=)/,
                [
                    "key",
                    "",
                    "delimiter"
                ]
            ],
            {
                include: "@whitespace"
            },
            [
                /\d+/,
                "number"
            ],
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /'([^'\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /"/,
                "string",
                '@string."'
            ],
            [
                /'/,
                "string",
                "@string.'"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /^\s*[#;].*$/,
                "comment"
            ]
        ],
        string: [
            [
                /[^\\"']+/,
                "string"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /["']/,
                {
                    cases: {
                        "$#==$S2": {
                            token: "string",
                            next: "@pop"
                        },
                        "@default": "string"
                    }
                }
            ]
        ]
    }
};

});

