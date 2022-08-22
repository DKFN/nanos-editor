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
parcelRequire.register("2FP7I", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $1f27112472bae3e4$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $1f27112472bae3e4$export$789c912f57fe164c; });

var $jBoEN = parcelRequire("jBoEN");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $1f27112472bae3e4$var$__defProp = Object.defineProperty;
var $1f27112472bae3e4$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $1f27112472bae3e4$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $1f27112472bae3e4$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $1f27112472bae3e4$var$__markAsModule = (target)=>$1f27112472bae3e4$var$__defProp(target, "__esModule", {
        value: true
    });
var $1f27112472bae3e4$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $1f27112472bae3e4$var$__getOwnPropNames(module))if (!$1f27112472bae3e4$var$__hasOwnProp.call(target, key) && key !== "default") $1f27112472bae3e4$var$__defProp(target, key, {
            get: ()=>module[key],
            enumerable: !(desc = $1f27112472bae3e4$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $1f27112472bae3e4$var$monaco_editor_core_exports = {};
$1f27112472bae3e4$var$__markAsModule($1f27112472bae3e4$var$monaco_editor_core_exports);
$1f27112472bae3e4$var$__reExport($1f27112472bae3e4$var$monaco_editor_core_exports, $jBoEN);
// src/basic-languages/xml/xml.ts
var $1f27112472bae3e4$export$c83be1687c028fc9 = {
    comments: {
        blockComment: [
            "<!--",
            "-->"
        ]
    },
    brackets: [
        [
            "<",
            ">"
        ]
    ],
    autoClosingPairs: [
        {
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: '"',
            close: '"'
        }
    ],
    surroundingPairs: [
        {
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: '"',
            close: '"'
        }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp(`<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: {
                indentAction: $1f27112472bae3e4$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp(`<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: $1f27112472bae3e4$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $1f27112472bae3e4$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".xml",
    ignoreCase: true,
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
        root: [
            [
                /[^<&]+/,
                ""
            ],
            {
                include: "@whitespace"
            },
            [
                /(<)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "tag",
                        next: "@tag"
                    }
                ]
            ],
            [
                /(<\/)(@qualifiedName)(\s*)(>)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "tag"
                    },
                    "",
                    {
                        token: "delimiter"
                    }
                ]
            ],
            [
                /(<\?)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "metatag",
                        next: "@tag"
                    }
                ]
            ],
            [
                /(<\!)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "metatag",
                        next: "@tag"
                    }
                ]
            ],
            [
                /<\!\[CDATA\[/,
                {
                    token: "delimiter.cdata",
                    next: "@cdata"
                }
            ],
            [
                /&\w+;/,
                "string.escape"
            ]
        ],
        cdata: [
            [
                /[^\]]+/,
                ""
            ],
            [
                /\]\]>/,
                {
                    token: "delimiter.cdata",
                    next: "@pop"
                }
            ],
            [
                /\]/,
                ""
            ]
        ],
        tag: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /@qualifiedName/,
                "attribute.name"
            ],
            [
                /\?>/,
                {
                    token: "delimiter",
                    next: "@pop"
                }
            ],
            [
                /(\/)(>)/,
                [
                    {
                        token: "tag"
                    },
                    {
                        token: "delimiter",
                        next: "@pop"
                    }
                ]
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@pop"
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /<!--/,
                {
                    token: "comment",
                    next: "@comment"
                }
            ]
        ],
        comment: [
            [
                /[^<\-]+/,
                "comment.content"
            ],
            [
                /-->/,
                {
                    token: "comment",
                    next: "@pop"
                }
            ],
            [
                /<!--/,
                "comment.content.invalid"
            ],
            [
                /[<\-]/,
                "comment.content"
            ]
        ]
    }
};

});

})();