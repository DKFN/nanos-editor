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
parcelRequire.register("8DjcE", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $6490dc8d83ceaa80$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $6490dc8d83ceaa80$export$789c912f57fe164c; });

var $8Axbx = parcelRequire("8Axbx");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $6490dc8d83ceaa80$var$__defProp = Object.defineProperty;
var $6490dc8d83ceaa80$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $6490dc8d83ceaa80$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $6490dc8d83ceaa80$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $6490dc8d83ceaa80$var$__markAsModule = (target)=>$6490dc8d83ceaa80$var$__defProp(target, "__esModule", {
        value: true
    });
var $6490dc8d83ceaa80$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $6490dc8d83ceaa80$var$__getOwnPropNames(module))if (!$6490dc8d83ceaa80$var$__hasOwnProp.call(target, key) && key !== "default") $6490dc8d83ceaa80$var$__defProp(target, key, {
            get: ()=>module[key],
            enumerable: !(desc = $6490dc8d83ceaa80$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $6490dc8d83ceaa80$var$monaco_editor_core_exports = {};
$6490dc8d83ceaa80$var$__markAsModule($6490dc8d83ceaa80$var$monaco_editor_core_exports);
$6490dc8d83ceaa80$var$__reExport($6490dc8d83ceaa80$var$monaco_editor_core_exports, $8Axbx);
// src/basic-languages/liquid/liquid.ts
var $6490dc8d83ceaa80$var$EMPTY_ELEMENTS = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
];
var $6490dc8d83ceaa80$export$c83be1687c028fc9 = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    brackets: [
        [
            "<!--",
            "-->"
        ],
        [
            "<",
            ">"
        ],
        [
            "{{",
            "}}"
        ],
        [
            "{%",
            "%}"
        ],
        [
            "{",
            "}"
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
            open: "%",
            close: "%"
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
            open: "<",
            close: ">"
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
    onEnterRules: [
        {
            beforeText: new RegExp(`<(?!(?:${$6490dc8d83ceaa80$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: $6490dc8d83ceaa80$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp(`<(?!(?:${$6490dc8d83ceaa80$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: $6490dc8d83ceaa80$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $6490dc8d83ceaa80$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: "",
    builtinTags: [
        "if",
        "else",
        "elseif",
        "endif",
        "render",
        "assign",
        "capture",
        "endcapture",
        "case",
        "endcase",
        "comment",
        "endcomment",
        "cycle",
        "decrement",
        "for",
        "endfor",
        "include",
        "increment",
        "layout",
        "raw",
        "endraw",
        "render",
        "tablerow",
        "endtablerow",
        "unless",
        "endunless"
    ],
    builtinFilters: [
        "abs",
        "append",
        "at_least",
        "at_most",
        "capitalize",
        "ceil",
        "compact",
        "date",
        "default",
        "divided_by",
        "downcase",
        "escape",
        "escape_once",
        "first",
        "floor",
        "join",
        "json",
        "last",
        "lstrip",
        "map",
        "minus",
        "modulo",
        "newline_to_br",
        "plus",
        "prepend",
        "remove",
        "remove_first",
        "replace",
        "replace_first",
        "reverse",
        "round",
        "rstrip",
        "size",
        "slice",
        "sort",
        "sort_natural",
        "split",
        "strip",
        "strip_html",
        "strip_newlines",
        "times",
        "truncate",
        "truncatewords",
        "uniq",
        "upcase",
        "url_decode",
        "url_encode",
        "where"
    ],
    constants: [
        "true",
        "false"
    ],
    operators: [
        "==",
        "!=",
        ">",
        "<",
        ">=",
        "<="
    ],
    symbol: /[=><!]+/,
    identifier: /[a-zA-Z_][\w]*/,
    tokenizer: {
        root: [
            [
                /\{\%\s*comment\s*\%\}/,
                "comment.start.liquid",
                "@comment"
            ],
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@liquidState.root"
                }
            ],
            [
                /\{\%/,
                {
                    token: "@rematch",
                    switchTo: "@liquidState.root"
                }
            ],
            [
                /(<)([\w\-]+)(\/>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /(<)([:\w]+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /(<\/)([\w\-]+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /</,
                "delimiter.html"
            ],
            [
                /\{/,
                "delimiter.html"
            ],
            [
                /[^<{]+/
            ]
        ],
        comment: [
            [
                /\{\%\s*endcomment\s*\%\}/,
                "comment.end.liquid",
                "@pop"
            ],
            [
                /./,
                "comment.content.liquid"
            ]
        ],
        otherTag: [
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@liquidState.otherTag"
                }
            ],
            [
                /\{\%/,
                {
                    token: "@rematch",
                    switchTo: "@liquidState.otherTag"
                }
            ],
            [
                /\/?>/,
                "delimiter.html",
                "@pop"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ]
        ],
        liquidState: [
            [
                /\{\{/,
                "delimiter.output.liquid"
            ],
            [
                /\}\}/,
                {
                    token: "delimiter.output.liquid",
                    switchTo: "@$S2.$S3"
                }
            ],
            [
                /\{\%/,
                "delimiter.tag.liquid"
            ],
            [
                /raw\s*\%\}/,
                "delimiter.tag.liquid",
                "@liquidRaw"
            ],
            [
                /\%\}/,
                {
                    token: "delimiter.tag.liquid",
                    switchTo: "@$S2.$S3"
                }
            ],
            {
                include: "liquidRoot"
            }
        ],
        liquidRaw: [
            [
                /^(?!\{\%\s*endraw\s*\%\}).+/
            ],
            [
                /\{\%/,
                "delimiter.tag.liquid"
            ],
            [
                /@identifier/
            ],
            [
                /\%\}/,
                {
                    token: "delimiter.tag.liquid",
                    next: "@root"
                }
            ]
        ],
        liquidRoot: [
            [
                /\d+(\.\d+)?/,
                "number.liquid"
            ],
            [
                /"[^"]*"/,
                "string.liquid"
            ],
            [
                /'[^']*'/,
                "string.liquid"
            ],
            [
                /\s+/
            ],
            [
                /@symbol/,
                {
                    cases: {
                        "@operators": "operator.liquid",
                        "@default": ""
                    }
                }
            ],
            [
                /\./
            ],
            [
                /@identifier/,
                {
                    cases: {
                        "@constants": "keyword.liquid",
                        "@builtinFilters": "predefined.liquid",
                        "@builtinTags": "predefined.liquid",
                        "@default": "variable.liquid"
                    }
                }
            ],
            [
                /[^}|%]/,
                "variable.liquid"
            ]
        ]
    }
};

});

