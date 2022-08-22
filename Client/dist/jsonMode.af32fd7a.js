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
parcelRequire.register("gl7Jt", function(module, exports) {

$parcel$export(module.exports, "setupMode", function () { return $be549b04944e3aa9$export$6df00d141df42469; });

var $jBoEN = parcelRequire("jBoEN");
// node_modules/vscode-languageserver-types/lib/esm/main.js
"use strict";
// node_modules/jsonc-parser/lib/esm/impl/scanner.js
"use strict";
// node_modules/jsonc-parser/lib/esm/impl/format.js
"use strict";
// node_modules/jsonc-parser/lib/esm/impl/parser.js
"use strict";
// node_modules/jsonc-parser/lib/esm/impl/edit.js
"use strict";
// node_modules/jsonc-parser/lib/esm/main.js
"use strict";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $be549b04944e3aa9$var$__defProp = Object.defineProperty;
var $be549b04944e3aa9$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $be549b04944e3aa9$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $be549b04944e3aa9$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $be549b04944e3aa9$var$__markAsModule = (target)=>$be549b04944e3aa9$var$__defProp(target, "__esModule", {
        value: true
    });
var $be549b04944e3aa9$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $be549b04944e3aa9$var$__getOwnPropNames(module))if (!$be549b04944e3aa9$var$__hasOwnProp.call(target, key) && key !== "default") $be549b04944e3aa9$var$__defProp(target, key, {
            get: ()=>module[key],
            enumerable: !(desc = $be549b04944e3aa9$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $be549b04944e3aa9$var$monaco_editor_core_exports = {};
$be549b04944e3aa9$var$__markAsModule($be549b04944e3aa9$var$monaco_editor_core_exports);
$be549b04944e3aa9$var$__reExport($be549b04944e3aa9$var$monaco_editor_core_exports, $jBoEN);
// src/json/workerManager.ts
var $be549b04944e3aa9$var$STOP_WHEN_IDLE_FOR = 120000;
var $be549b04944e3aa9$var$WorkerManager = class {
    _stopWorker() {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    }
    dispose() {
        clearInterval(this._idleCheckInterval);
        this._configChangeListener.dispose();
        this._stopWorker();
    }
    _checkIfIdle() {
        if (!this._worker) return;
        let timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (timePassedSinceLastUsed > $be549b04944e3aa9$var$STOP_WHEN_IDLE_FOR) this._stopWorker();
    }
    _getClient() {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = $be549b04944e3aa9$var$monaco_editor_core_exports.editor.createWebWorker({
                moduleId: "vs/language/json/jsonWorker",
                label: this._defaults.languageId,
                createData: {
                    languageSettings: this._defaults.diagnosticsOptions,
                    languageId: this._defaults.languageId,
                    enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest
                }
            });
            this._client = this._worker.getProxy();
        }
        return this._client;
    }
    getLanguageServiceWorker(...resources) {
        let _client;
        return this._getClient().then((client)=>{
            _client = client;
        }).then((_)=>{
            if (this._worker) return this._worker.withSyncedResources(resources);
        }).then((_)=>_client);
    }
    constructor(defaults){
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._idleCheckInterval = window.setInterval(()=>this._checkIfIdle(), 30000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(()=>this._stopWorker());
    }
};
var $be549b04944e3aa9$var$integer;
(function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
})($be549b04944e3aa9$var$integer || ($be549b04944e3aa9$var$integer = {}));
var $be549b04944e3aa9$var$uinteger;
(function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
})($be549b04944e3aa9$var$uinteger || ($be549b04944e3aa9$var$uinteger = {}));
var $be549b04944e3aa9$var$Position;
(function(Position3) {
    function create(line, character) {
        if (line === Number.MAX_VALUE) line = $be549b04944e3aa9$var$uinteger.MAX_VALUE;
        if (character === Number.MAX_VALUE) character = $be549b04944e3aa9$var$uinteger.MAX_VALUE;
        return {
            line: line,
            character: character
        };
    }
    Position3.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.objectLiteral(candidate) && $be549b04944e3aa9$var$Is.uinteger(candidate.line) && $be549b04944e3aa9$var$Is.uinteger(candidate.character);
    }
    Position3.is = is;
})($be549b04944e3aa9$var$Position || ($be549b04944e3aa9$var$Position = {}));
var $be549b04944e3aa9$var$Range;
(function(Range3) {
    function create(one, two, three, four) {
        if ($be549b04944e3aa9$var$Is.uinteger(one) && $be549b04944e3aa9$var$Is.uinteger(two) && $be549b04944e3aa9$var$Is.uinteger(three) && $be549b04944e3aa9$var$Is.uinteger(four)) return {
            start: $be549b04944e3aa9$var$Position.create(one, two),
            end: $be549b04944e3aa9$var$Position.create(three, four)
        };
        else if ($be549b04944e3aa9$var$Position.is(one) && $be549b04944e3aa9$var$Position.is(two)) return {
            start: one,
            end: two
        };
        else throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
    }
    Range3.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.objectLiteral(candidate) && $be549b04944e3aa9$var$Position.is(candidate.start) && $be549b04944e3aa9$var$Position.is(candidate.end);
    }
    Range3.is = is;
})($be549b04944e3aa9$var$Range || ($be549b04944e3aa9$var$Range = {}));
var $be549b04944e3aa9$var$Location;
(function(Location2) {
    function create(uri, range) {
        return {
            uri: uri,
            range: range
        };
    }
    Location2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Range.is(candidate.range) && ($be549b04944e3aa9$var$Is.string(candidate.uri) || $be549b04944e3aa9$var$Is.undefined(candidate.uri));
    }
    Location2.is = is;
})($be549b04944e3aa9$var$Location || ($be549b04944e3aa9$var$Location = {}));
var $be549b04944e3aa9$var$LocationLink;
(function(LocationLink2) {
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return {
            targetUri: targetUri,
            targetRange: targetRange,
            targetSelectionRange: targetSelectionRange,
            originSelectionRange: originSelectionRange
        };
    }
    LocationLink2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Range.is(candidate.targetRange) && $be549b04944e3aa9$var$Is.string(candidate.targetUri) && ($be549b04944e3aa9$var$Range.is(candidate.targetSelectionRange) || $be549b04944e3aa9$var$Is.undefined(candidate.targetSelectionRange)) && ($be549b04944e3aa9$var$Range.is(candidate.originSelectionRange) || $be549b04944e3aa9$var$Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
})($be549b04944e3aa9$var$LocationLink || ($be549b04944e3aa9$var$LocationLink = {}));
var $be549b04944e3aa9$var$Color;
(function(Color2) {
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        };
    }
    Color2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.numberRange(candidate.red, 0, 1) && $be549b04944e3aa9$var$Is.numberRange(candidate.green, 0, 1) && $be549b04944e3aa9$var$Is.numberRange(candidate.blue, 0, 1) && $be549b04944e3aa9$var$Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
})($be549b04944e3aa9$var$Color || ($be549b04944e3aa9$var$Color = {}));
var $be549b04944e3aa9$var$ColorInformation;
(function(ColorInformation2) {
    function create(range, color) {
        return {
            range: range,
            color: color
        };
    }
    ColorInformation2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Range.is(candidate.range) && $be549b04944e3aa9$var$Color.is(candidate.color);
    }
    ColorInformation2.is = is;
})($be549b04944e3aa9$var$ColorInformation || ($be549b04944e3aa9$var$ColorInformation = {}));
var $be549b04944e3aa9$var$ColorPresentation;
(function(ColorPresentation2) {
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits
        };
    }
    ColorPresentation2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.string(candidate.label) && ($be549b04944e3aa9$var$Is.undefined(candidate.textEdit) || $be549b04944e3aa9$var$TextEdit.is(candidate)) && ($be549b04944e3aa9$var$Is.undefined(candidate.additionalTextEdits) || $be549b04944e3aa9$var$Is.typedArray(candidate.additionalTextEdits, $be549b04944e3aa9$var$TextEdit.is));
    }
    ColorPresentation2.is = is;
})($be549b04944e3aa9$var$ColorPresentation || ($be549b04944e3aa9$var$ColorPresentation = {}));
var $be549b04944e3aa9$var$FoldingRangeKind;
(function(FoldingRangeKind2) {
    FoldingRangeKind2["Comment"] = "comment";
    FoldingRangeKind2["Imports"] = "imports";
    FoldingRangeKind2["Region"] = "region";
})($be549b04944e3aa9$var$FoldingRangeKind || ($be549b04944e3aa9$var$FoldingRangeKind = {}));
var $be549b04944e3aa9$var$FoldingRange;
(function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if ($be549b04944e3aa9$var$Is.defined(startCharacter)) result.startCharacter = startCharacter;
        if ($be549b04944e3aa9$var$Is.defined(endCharacter)) result.endCharacter = endCharacter;
        if ($be549b04944e3aa9$var$Is.defined(kind)) result.kind = kind;
        return result;
    }
    FoldingRange2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.uinteger(candidate.startLine) && $be549b04944e3aa9$var$Is.uinteger(candidate.startLine) && ($be549b04944e3aa9$var$Is.undefined(candidate.startCharacter) || $be549b04944e3aa9$var$Is.uinteger(candidate.startCharacter)) && ($be549b04944e3aa9$var$Is.undefined(candidate.endCharacter) || $be549b04944e3aa9$var$Is.uinteger(candidate.endCharacter)) && ($be549b04944e3aa9$var$Is.undefined(candidate.kind) || $be549b04944e3aa9$var$Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
})($be549b04944e3aa9$var$FoldingRange || ($be549b04944e3aa9$var$FoldingRange = {}));
var $be549b04944e3aa9$var$DiagnosticRelatedInformation;
(function(DiagnosticRelatedInformation2) {
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Location.is(candidate.location) && $be549b04944e3aa9$var$Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
})($be549b04944e3aa9$var$DiagnosticRelatedInformation || ($be549b04944e3aa9$var$DiagnosticRelatedInformation = {}));
var $be549b04944e3aa9$var$DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
})($be549b04944e3aa9$var$DiagnosticSeverity || ($be549b04944e3aa9$var$DiagnosticSeverity = {}));
var $be549b04944e3aa9$var$DiagnosticTag;
(function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
})($be549b04944e3aa9$var$DiagnosticTag || ($be549b04944e3aa9$var$DiagnosticTag = {}));
var $be549b04944e3aa9$var$CodeDescription;
(function(CodeDescription2) {
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && $be549b04944e3aa9$var$Is.string(candidate.href);
    }
    CodeDescription2.is = is;
})($be549b04944e3aa9$var$CodeDescription || ($be549b04944e3aa9$var$CodeDescription = {}));
var $be549b04944e3aa9$var$Diagnostic;
(function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
        var result = {
            range: range,
            message: message
        };
        if ($be549b04944e3aa9$var$Is.defined(severity)) result.severity = severity;
        if ($be549b04944e3aa9$var$Is.defined(code)) result.code = code;
        if ($be549b04944e3aa9$var$Is.defined(source)) result.source = source;
        if ($be549b04944e3aa9$var$Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
        return result;
    }
    Diagnostic2.create = create;
    function is(value) {
        var _a;
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Range.is(candidate.range) && $be549b04944e3aa9$var$Is.string(candidate.message) && ($be549b04944e3aa9$var$Is.number(candidate.severity) || $be549b04944e3aa9$var$Is.undefined(candidate.severity)) && ($be549b04944e3aa9$var$Is.integer(candidate.code) || $be549b04944e3aa9$var$Is.string(candidate.code) || $be549b04944e3aa9$var$Is.undefined(candidate.code)) && ($be549b04944e3aa9$var$Is.undefined(candidate.codeDescription) || $be549b04944e3aa9$var$Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && ($be549b04944e3aa9$var$Is.string(candidate.source) || $be549b04944e3aa9$var$Is.undefined(candidate.source)) && ($be549b04944e3aa9$var$Is.undefined(candidate.relatedInformation) || $be549b04944e3aa9$var$Is.typedArray(candidate.relatedInformation, $be549b04944e3aa9$var$DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
})($be549b04944e3aa9$var$Diagnostic || ($be549b04944e3aa9$var$Diagnostic = {}));
var $be549b04944e3aa9$var$Command;
(function(Command2) {
    function create(title, command) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        var result = {
            title: title,
            command: command
        };
        if ($be549b04944e3aa9$var$Is.defined(args) && args.length > 0) result.arguments = args;
        return result;
    }
    Command2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Is.string(candidate.title) && $be549b04944e3aa9$var$Is.string(candidate.command);
    }
    Command2.is = is;
})($be549b04944e3aa9$var$Command || ($be549b04944e3aa9$var$Command = {}));
var $be549b04944e3aa9$var$TextEdit;
(function(TextEdit2) {
    function replace(range, newText) {
        return {
            range: range,
            newText: newText
        };
    }
    TextEdit2.replace = replace;
    function insert(position, newText) {
        return {
            range: {
                start: position,
                end: position
            },
            newText: newText
        };
    }
    TextEdit2.insert = insert;
    function del(range) {
        return {
            range: range,
            newText: ""
        };
    }
    TextEdit2.del = del;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.objectLiteral(candidate) && $be549b04944e3aa9$var$Is.string(candidate.newText) && $be549b04944e3aa9$var$Range.is(candidate.range);
    }
    TextEdit2.is = is;
})($be549b04944e3aa9$var$TextEdit || ($be549b04944e3aa9$var$TextEdit = {}));
var $be549b04944e3aa9$var$ChangeAnnotation;
(function(ChangeAnnotation2) {
    function create(label, needsConfirmation, description) {
        var result = {
            label: label
        };
        if (needsConfirmation !== void 0) result.needsConfirmation = needsConfirmation;
        if (description !== void 0) result.description = description;
        return result;
    }
    ChangeAnnotation2.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && $be549b04944e3aa9$var$Is.objectLiteral(candidate) && $be549b04944e3aa9$var$Is.string(candidate.label) && ($be549b04944e3aa9$var$Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && ($be549b04944e3aa9$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
})($be549b04944e3aa9$var$ChangeAnnotation || ($be549b04944e3aa9$var$ChangeAnnotation = {}));
var $be549b04944e3aa9$var$ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
    function is(value) {
        var candidate = value;
        return typeof candidate === "string";
    }
    ChangeAnnotationIdentifier2.is = is;
})($be549b04944e3aa9$var$ChangeAnnotationIdentifier || ($be549b04944e3aa9$var$ChangeAnnotationIdentifier = {}));
var $be549b04944e3aa9$var$AnnotatedTextEdit;
(function(AnnotatedTextEdit2) {
    function replace(range, newText, annotation) {
        return {
            range: range,
            newText: newText,
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.replace = replace;
    function insert(position, newText, annotation) {
        return {
            range: {
                start: position,
                end: position
            },
            newText: newText,
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.insert = insert;
    function del(range, annotation) {
        return {
            range: range,
            newText: "",
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.del = del;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$TextEdit.is(candidate) && ($be549b04944e3aa9$var$ChangeAnnotation.is(candidate.annotationId) || $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
})($be549b04944e3aa9$var$AnnotatedTextEdit || ($be549b04944e3aa9$var$AnnotatedTextEdit = {}));
var $be549b04944e3aa9$var$TextDocumentEdit;
(function(TextDocumentEdit2) {
    function create(textDocument, edits) {
        return {
            textDocument: textDocument,
            edits: edits
        };
    }
    TextDocumentEdit2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
})($be549b04944e3aa9$var$TextDocumentEdit || ($be549b04944e3aa9$var$TextDocumentEdit = {}));
var $be549b04944e3aa9$var$CreateFile;
(function(CreateFile2) {
    function create(uri, options, annotation) {
        var result = {
            kind: "create",
            uri: uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    CreateFile2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "create" && $be549b04944e3aa9$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $be549b04944e3aa9$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $be549b04944e3aa9$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
})($be549b04944e3aa9$var$CreateFile || ($be549b04944e3aa9$var$CreateFile = {}));
var $be549b04944e3aa9$var$RenameFile;
(function(RenameFile2) {
    function create(oldUri, newUri, options, annotation) {
        var result = {
            kind: "rename",
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    RenameFile2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "rename" && $be549b04944e3aa9$var$Is.string(candidate.oldUri) && $be549b04944e3aa9$var$Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $be549b04944e3aa9$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $be549b04944e3aa9$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
})($be549b04944e3aa9$var$RenameFile || ($be549b04944e3aa9$var$RenameFile = {}));
var $be549b04944e3aa9$var$DeleteFile;
(function(DeleteFile2) {
    function create(uri, options, annotation) {
        var result = {
            kind: "delete",
            uri: uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    DeleteFile2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "delete" && $be549b04944e3aa9$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || $be549b04944e3aa9$var$Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || $be549b04944e3aa9$var$Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
})($be549b04944e3aa9$var$DeleteFile || ($be549b04944e3aa9$var$DeleteFile = {}));
var $be549b04944e3aa9$var$WorkspaceEdit;
(function(WorkspaceEdit2) {
    function is(value) {
        var candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if ($be549b04944e3aa9$var$Is.string(change.kind)) return $be549b04944e3aa9$var$CreateFile.is(change) || $be549b04944e3aa9$var$RenameFile.is(change) || $be549b04944e3aa9$var$DeleteFile.is(change);
            else return $be549b04944e3aa9$var$TextDocumentEdit.is(change);
        }));
    }
    WorkspaceEdit2.is = is;
})($be549b04944e3aa9$var$WorkspaceEdit || ($be549b04944e3aa9$var$WorkspaceEdit = {}));
var $be549b04944e3aa9$var$TextEditChangeImpl = function() {
    function TextEditChangeImpl2(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
        var edit2;
        var id;
        if (annotation === void 0) edit2 = $be549b04944e3aa9$var$TextEdit.insert(position, newText);
        else if ($be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit2 = $be549b04944e3aa9$var$AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit2 = $be549b04944e3aa9$var$AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit2);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
        var edit2;
        var id;
        if (annotation === void 0) edit2 = $be549b04944e3aa9$var$TextEdit.replace(range, newText);
        else if ($be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit2 = $be549b04944e3aa9$var$AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit2 = $be549b04944e3aa9$var$AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit2);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.delete = function(range, annotation) {
        var edit2;
        var id;
        if (annotation === void 0) edit2 = $be549b04944e3aa9$var$TextEdit.del(range);
        else if ($be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit2 = $be549b04944e3aa9$var$AnnotatedTextEdit.del(range, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit2 = $be549b04944e3aa9$var$AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit2);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.add = function(edit2) {
        this.edits.push(edit2);
    };
    TextEditChangeImpl2.prototype.all = function() {
        return this.edits;
    };
    TextEditChangeImpl2.prototype.clear = function() {
        this.edits.splice(0, this.edits.length);
    };
    TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
        if (value === void 0) throw new Error("Text edit change is not configured to manage change annotations.");
    };
    return TextEditChangeImpl2;
}();
var $be549b04944e3aa9$var$ChangeAnnotations = function() {
    function ChangeAnnotations2(annotations) {
        this._annotations = annotations === void 0 ? Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
    }
    ChangeAnnotations2.prototype.all = function() {
        return this._annotations;
    };
    Object.defineProperty(ChangeAnnotations2.prototype, "size", {
        get: function() {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
        var id;
        if ($be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(idOrAnnotation)) id = idOrAnnotation;
        else {
            id = this.nextId();
            annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== void 0) throw new Error("Id " + id + " is already in use.");
        if (annotation === void 0) throw new Error("No annotation provided for id " + id);
        this._annotations[id] = annotation;
        this._size++;
        return id;
    };
    ChangeAnnotations2.prototype.nextId = function() {
        this._counter++;
        return this._counter.toString();
    };
    return ChangeAnnotations2;
}();
var $be549b04944e3aa9$var$WorkspaceChange = function() {
    function WorkspaceChange2(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== void 0) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new $be549b04944e3aa9$var$ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                    if ($be549b04944e3aa9$var$TextDocumentEdit.is(change)) {
                        var textEditChange = new $be549b04944e3aa9$var$TextEditChangeImpl(change.edits, _this._changeAnnotations);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            } else if (workspaceEdit.changes) Object.keys(workspaceEdit.changes).forEach(function(key) {
                var textEditChange = new $be549b04944e3aa9$var$TextEditChangeImpl(workspaceEdit.changes[key]);
                _this._textEditChanges[key] = textEditChange;
            });
        } else this._workspaceEdit = {};
    }
    Object.defineProperty(WorkspaceChange2.prototype, "edit", {
        get: function() {
            this.initDocumentChanges();
            if (this._changeAnnotations !== void 0) {
                if (this._changeAnnotations.size === 0) this._workspaceEdit.changeAnnotations = void 0;
                else this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
            return this._workspaceEdit;
        },
        enumerable: false,
        configurable: true
    });
    WorkspaceChange2.prototype.getTextEditChange = function(key) {
        if ($be549b04944e3aa9$var$OptionalVersionedTextDocumentIdentifier.is(key)) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var textDocument = {
                uri: key.uri,
                version: key.version
            };
            var result = this._textEditChanges[textDocument.uri];
            if (!result) {
                var edits = [];
                var textDocumentEdit = {
                    textDocument: textDocument,
                    edits: edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new $be549b04944e3aa9$var$TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
            }
            return result;
        } else {
            this.initChanges();
            if (this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
            var result = this._textEditChanges[key];
            if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new $be549b04944e3aa9$var$TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange2.prototype.initDocumentChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
            this._changeAnnotations = new $be549b04944e3aa9$var$ChangeAnnotations();
            this._workspaceEdit.documentChanges = [];
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
    };
    WorkspaceChange2.prototype.initChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) this._workspaceEdit.changes = Object.create(null);
    };
    WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($be549b04944e3aa9$var$ChangeAnnotation.is(optionsOrAnnotation) || $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $be549b04944e3aa9$var$CreateFile.create(uri, options);
        else {
            id = $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $be549b04944e3aa9$var$CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($be549b04944e3aa9$var$ChangeAnnotation.is(optionsOrAnnotation) || $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $be549b04944e3aa9$var$RenameFile.create(oldUri, newUri, options);
        else {
            id = $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $be549b04944e3aa9$var$RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($be549b04944e3aa9$var$ChangeAnnotation.is(optionsOrAnnotation) || $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $be549b04944e3aa9$var$DeleteFile.create(uri, options);
        else {
            id = $be549b04944e3aa9$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $be549b04944e3aa9$var$DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    return WorkspaceChange2;
}();
var $be549b04944e3aa9$var$TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
    function create(uri) {
        return {
            uri: uri
        };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
})($be549b04944e3aa9$var$TextDocumentIdentifier || ($be549b04944e3aa9$var$TextDocumentIdentifier = {}));
var $be549b04944e3aa9$var$VersionedTextDocumentIdentifier;
(function(VersionedTextDocumentIdentifier2) {
    function create(uri, version) {
        return {
            uri: uri,
            version: version
        };
    }
    VersionedTextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Is.string(candidate.uri) && $be549b04944e3aa9$var$Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
})($be549b04944e3aa9$var$VersionedTextDocumentIdentifier || ($be549b04944e3aa9$var$VersionedTextDocumentIdentifier = {}));
var $be549b04944e3aa9$var$OptionalVersionedTextDocumentIdentifier;
(function(OptionalVersionedTextDocumentIdentifier2) {
    function create(uri, version) {
        return {
            uri: uri,
            version: version
        };
    }
    OptionalVersionedTextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Is.string(candidate.uri) && (candidate.version === null || $be549b04944e3aa9$var$Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
})($be549b04944e3aa9$var$OptionalVersionedTextDocumentIdentifier || ($be549b04944e3aa9$var$OptionalVersionedTextDocumentIdentifier = {}));
var $be549b04944e3aa9$var$TextDocumentItem;
(function(TextDocumentItem2) {
    function create(uri, languageId, version, text) {
        return {
            uri: uri,
            languageId: languageId,
            version: version,
            text: text
        };
    }
    TextDocumentItem2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Is.string(candidate.uri) && $be549b04944e3aa9$var$Is.string(candidate.languageId) && $be549b04944e3aa9$var$Is.integer(candidate.version) && $be549b04944e3aa9$var$Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
})($be549b04944e3aa9$var$TextDocumentItem || ($be549b04944e3aa9$var$TextDocumentItem = {}));
var $be549b04944e3aa9$var$MarkupKind;
(function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
})($be549b04944e3aa9$var$MarkupKind || ($be549b04944e3aa9$var$MarkupKind = {}));
(function(MarkupKind2) {
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
})($be549b04944e3aa9$var$MarkupKind || ($be549b04944e3aa9$var$MarkupKind = {}));
var $be549b04944e3aa9$var$MarkupContent;
(function(MarkupContent2) {
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.objectLiteral(value) && $be549b04944e3aa9$var$MarkupKind.is(candidate.kind) && $be549b04944e3aa9$var$Is.string(candidate.value);
    }
    MarkupContent2.is = is;
})($be549b04944e3aa9$var$MarkupContent || ($be549b04944e3aa9$var$MarkupContent = {}));
var $be549b04944e3aa9$var$CompletionItemKind;
(function(CompletionItemKind2) {
    CompletionItemKind2.Text = 1;
    CompletionItemKind2.Method = 2;
    CompletionItemKind2.Function = 3;
    CompletionItemKind2.Constructor = 4;
    CompletionItemKind2.Field = 5;
    CompletionItemKind2.Variable = 6;
    CompletionItemKind2.Class = 7;
    CompletionItemKind2.Interface = 8;
    CompletionItemKind2.Module = 9;
    CompletionItemKind2.Property = 10;
    CompletionItemKind2.Unit = 11;
    CompletionItemKind2.Value = 12;
    CompletionItemKind2.Enum = 13;
    CompletionItemKind2.Keyword = 14;
    CompletionItemKind2.Snippet = 15;
    CompletionItemKind2.Color = 16;
    CompletionItemKind2.File = 17;
    CompletionItemKind2.Reference = 18;
    CompletionItemKind2.Folder = 19;
    CompletionItemKind2.EnumMember = 20;
    CompletionItemKind2.Constant = 21;
    CompletionItemKind2.Struct = 22;
    CompletionItemKind2.Event = 23;
    CompletionItemKind2.Operator = 24;
    CompletionItemKind2.TypeParameter = 25;
})($be549b04944e3aa9$var$CompletionItemKind || ($be549b04944e3aa9$var$CompletionItemKind = {}));
var $be549b04944e3aa9$var$InsertTextFormat;
(function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
})($be549b04944e3aa9$var$InsertTextFormat || ($be549b04944e3aa9$var$InsertTextFormat = {}));
var $be549b04944e3aa9$var$CompletionItemTag;
(function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
})($be549b04944e3aa9$var$CompletionItemTag || ($be549b04944e3aa9$var$CompletionItemTag = {}));
var $be549b04944e3aa9$var$InsertReplaceEdit;
(function(InsertReplaceEdit2) {
    function create(newText, insert, replace) {
        return {
            newText: newText,
            insert: insert,
            replace: replace
        };
    }
    InsertReplaceEdit2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $be549b04944e3aa9$var$Is.string(candidate.newText) && $be549b04944e3aa9$var$Range.is(candidate.insert) && $be549b04944e3aa9$var$Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
})($be549b04944e3aa9$var$InsertReplaceEdit || ($be549b04944e3aa9$var$InsertReplaceEdit = {}));
var $be549b04944e3aa9$var$InsertTextMode;
(function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
})($be549b04944e3aa9$var$InsertTextMode || ($be549b04944e3aa9$var$InsertTextMode = {}));
var $be549b04944e3aa9$var$CompletionItem;
(function(CompletionItem2) {
    function create(label) {
        return {
            label: label
        };
    }
    CompletionItem2.create = create;
})($be549b04944e3aa9$var$CompletionItem || ($be549b04944e3aa9$var$CompletionItem = {}));
var $be549b04944e3aa9$var$CompletionList;
(function(CompletionList2) {
    function create(items, isIncomplete) {
        return {
            items: items ? items : [],
            isIncomplete: !!isIncomplete
        };
    }
    CompletionList2.create = create;
})($be549b04944e3aa9$var$CompletionList || ($be549b04944e3aa9$var$CompletionList = {}));
var $be549b04944e3aa9$var$MarkedString;
(function(MarkedString2) {
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.string(candidate) || $be549b04944e3aa9$var$Is.objectLiteral(candidate) && $be549b04944e3aa9$var$Is.string(candidate.language) && $be549b04944e3aa9$var$Is.string(candidate.value);
    }
    MarkedString2.is = is;
})($be549b04944e3aa9$var$MarkedString || ($be549b04944e3aa9$var$MarkedString = {}));
var $be549b04944e3aa9$var$Hover;
(function(Hover2) {
    function is(value) {
        var candidate = value;
        return !!candidate && $be549b04944e3aa9$var$Is.objectLiteral(candidate) && ($be549b04944e3aa9$var$MarkupContent.is(candidate.contents) || $be549b04944e3aa9$var$MarkedString.is(candidate.contents) || $be549b04944e3aa9$var$Is.typedArray(candidate.contents, $be549b04944e3aa9$var$MarkedString.is)) && (value.range === void 0 || $be549b04944e3aa9$var$Range.is(value.range));
    }
    Hover2.is = is;
})($be549b04944e3aa9$var$Hover || ($be549b04944e3aa9$var$Hover = {}));
var $be549b04944e3aa9$var$ParameterInformation;
(function(ParameterInformation2) {
    function create(label, documentation) {
        return documentation ? {
            label: label,
            documentation: documentation
        } : {
            label: label
        };
    }
    ParameterInformation2.create = create;
})($be549b04944e3aa9$var$ParameterInformation || ($be549b04944e3aa9$var$ParameterInformation = {}));
var $be549b04944e3aa9$var$SignatureInformation;
(function(SignatureInformation2) {
    function create(label, documentation) {
        var parameters = [];
        for(var _i = 2; _i < arguments.length; _i++)parameters[_i - 2] = arguments[_i];
        var result = {
            label: label
        };
        if ($be549b04944e3aa9$var$Is.defined(documentation)) result.documentation = documentation;
        if ($be549b04944e3aa9$var$Is.defined(parameters)) result.parameters = parameters;
        else result.parameters = [];
        return result;
    }
    SignatureInformation2.create = create;
})($be549b04944e3aa9$var$SignatureInformation || ($be549b04944e3aa9$var$SignatureInformation = {}));
var $be549b04944e3aa9$var$DocumentHighlightKind;
(function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
})($be549b04944e3aa9$var$DocumentHighlightKind || ($be549b04944e3aa9$var$DocumentHighlightKind = {}));
var $be549b04944e3aa9$var$DocumentHighlight;
(function(DocumentHighlight2) {
    function create(range, kind) {
        var result = {
            range: range
        };
        if ($be549b04944e3aa9$var$Is.number(kind)) result.kind = kind;
        return result;
    }
    DocumentHighlight2.create = create;
})($be549b04944e3aa9$var$DocumentHighlight || ($be549b04944e3aa9$var$DocumentHighlight = {}));
var $be549b04944e3aa9$var$SymbolKind;
(function(SymbolKind2) {
    SymbolKind2.File = 1;
    SymbolKind2.Module = 2;
    SymbolKind2.Namespace = 3;
    SymbolKind2.Package = 4;
    SymbolKind2.Class = 5;
    SymbolKind2.Method = 6;
    SymbolKind2.Property = 7;
    SymbolKind2.Field = 8;
    SymbolKind2.Constructor = 9;
    SymbolKind2.Enum = 10;
    SymbolKind2.Interface = 11;
    SymbolKind2.Function = 12;
    SymbolKind2.Variable = 13;
    SymbolKind2.Constant = 14;
    SymbolKind2.String = 15;
    SymbolKind2.Number = 16;
    SymbolKind2.Boolean = 17;
    SymbolKind2.Array = 18;
    SymbolKind2.Object = 19;
    SymbolKind2.Key = 20;
    SymbolKind2.Null = 21;
    SymbolKind2.EnumMember = 22;
    SymbolKind2.Struct = 23;
    SymbolKind2.Event = 24;
    SymbolKind2.Operator = 25;
    SymbolKind2.TypeParameter = 26;
})($be549b04944e3aa9$var$SymbolKind || ($be549b04944e3aa9$var$SymbolKind = {}));
var $be549b04944e3aa9$var$SymbolTag;
(function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
})($be549b04944e3aa9$var$SymbolTag || ($be549b04944e3aa9$var$SymbolTag = {}));
var $be549b04944e3aa9$var$SymbolInformation;
(function(SymbolInformation2) {
    function create(name, kind, range, uri, containerName) {
        var result = {
            name: name,
            kind: kind,
            location: {
                uri: uri,
                range: range
            }
        };
        if (containerName) result.containerName = containerName;
        return result;
    }
    SymbolInformation2.create = create;
})($be549b04944e3aa9$var$SymbolInformation || ($be549b04944e3aa9$var$SymbolInformation = {}));
var $be549b04944e3aa9$var$DocumentSymbol;
(function(DocumentSymbol2) {
    function create(name, detail, kind, range, selectionRange, children) {
        var result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== void 0) result.children = children;
        return result;
    }
    DocumentSymbol2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $be549b04944e3aa9$var$Is.string(candidate.name) && $be549b04944e3aa9$var$Is.number(candidate.kind) && $be549b04944e3aa9$var$Range.is(candidate.range) && $be549b04944e3aa9$var$Range.is(candidate.selectionRange) && (candidate.detail === void 0 || $be549b04944e3aa9$var$Is.string(candidate.detail)) && (candidate.deprecated === void 0 || $be549b04944e3aa9$var$Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
})($be549b04944e3aa9$var$DocumentSymbol || ($be549b04944e3aa9$var$DocumentSymbol = {}));
var $be549b04944e3aa9$var$CodeActionKind;
(function(CodeActionKind2) {
    CodeActionKind2.Empty = "";
    CodeActionKind2.QuickFix = "quickfix";
    CodeActionKind2.Refactor = "refactor";
    CodeActionKind2.RefactorExtract = "refactor.extract";
    CodeActionKind2.RefactorInline = "refactor.inline";
    CodeActionKind2.RefactorRewrite = "refactor.rewrite";
    CodeActionKind2.Source = "source";
    CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
    CodeActionKind2.SourceFixAll = "source.fixAll";
})($be549b04944e3aa9$var$CodeActionKind || ($be549b04944e3aa9$var$CodeActionKind = {}));
var $be549b04944e3aa9$var$CodeActionContext;
(function(CodeActionContext2) {
    function create(diagnostics, only) {
        var result = {
            diagnostics: diagnostics
        };
        if (only !== void 0 && only !== null) result.only = only;
        return result;
    }
    CodeActionContext2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Is.typedArray(candidate.diagnostics, $be549b04944e3aa9$var$Diagnostic.is) && (candidate.only === void 0 || $be549b04944e3aa9$var$Is.typedArray(candidate.only, $be549b04944e3aa9$var$Is.string));
    }
    CodeActionContext2.is = is;
})($be549b04944e3aa9$var$CodeActionContext || ($be549b04944e3aa9$var$CodeActionContext = {}));
var $be549b04944e3aa9$var$CodeAction;
(function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
        var result = {
            title: title
        };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        } else if ($be549b04944e3aa9$var$Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
        else result.edit = kindOrCommandOrEdit;
        if (checkKind && kind !== void 0) result.kind = kind;
        return result;
    }
    CodeAction2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $be549b04944e3aa9$var$Is.string(candidate.title) && (candidate.diagnostics === void 0 || $be549b04944e3aa9$var$Is.typedArray(candidate.diagnostics, $be549b04944e3aa9$var$Diagnostic.is)) && (candidate.kind === void 0 || $be549b04944e3aa9$var$Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || $be549b04944e3aa9$var$Command.is(candidate.command)) && (candidate.isPreferred === void 0 || $be549b04944e3aa9$var$Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || $be549b04944e3aa9$var$WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
})($be549b04944e3aa9$var$CodeAction || ($be549b04944e3aa9$var$CodeAction = {}));
var $be549b04944e3aa9$var$CodeLens;
(function(CodeLens2) {
    function create(range, data) {
        var result = {
            range: range
        };
        if ($be549b04944e3aa9$var$Is.defined(data)) result.data = data;
        return result;
    }
    CodeLens2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Range.is(candidate.range) && ($be549b04944e3aa9$var$Is.undefined(candidate.command) || $be549b04944e3aa9$var$Command.is(candidate.command));
    }
    CodeLens2.is = is;
})($be549b04944e3aa9$var$CodeLens || ($be549b04944e3aa9$var$CodeLens = {}));
var $be549b04944e3aa9$var$FormattingOptions;
(function(FormattingOptions2) {
    function create(tabSize, insertSpaces) {
        return {
            tabSize: tabSize,
            insertSpaces: insertSpaces
        };
    }
    FormattingOptions2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Is.uinteger(candidate.tabSize) && $be549b04944e3aa9$var$Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
})($be549b04944e3aa9$var$FormattingOptions || ($be549b04944e3aa9$var$FormattingOptions = {}));
var $be549b04944e3aa9$var$DocumentLink;
(function(DocumentLink2) {
    function create(range, target, data) {
        return {
            range: range,
            target: target,
            data: data
        };
    }
    DocumentLink2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Range.is(candidate.range) && ($be549b04944e3aa9$var$Is.undefined(candidate.target) || $be549b04944e3aa9$var$Is.string(candidate.target));
    }
    DocumentLink2.is = is;
})($be549b04944e3aa9$var$DocumentLink || ($be549b04944e3aa9$var$DocumentLink = {}));
var $be549b04944e3aa9$var$SelectionRange;
(function(SelectionRange2) {
    function create(range, parent) {
        return {
            range: range,
            parent: parent
        };
    }
    SelectionRange2.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && $be549b04944e3aa9$var$Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
})($be549b04944e3aa9$var$SelectionRange || ($be549b04944e3aa9$var$SelectionRange = {}));
var $be549b04944e3aa9$var$TextDocument;
(function(TextDocument2) {
    function create(uri, languageId, version, content) {
        return new $be549b04944e3aa9$var$FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
        var candidate = value;
        return $be549b04944e3aa9$var$Is.defined(candidate) && $be549b04944e3aa9$var$Is.string(candidate.uri) && ($be549b04944e3aa9$var$Is.undefined(candidate.languageId) || $be549b04944e3aa9$var$Is.string(candidate.languageId)) && $be549b04944e3aa9$var$Is.uinteger(candidate.lineCount) && $be549b04944e3aa9$var$Is.func(candidate.getText) && $be549b04944e3aa9$var$Is.func(candidate.positionAt) && $be549b04944e3aa9$var$Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument2.is = is;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function(a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) return a.range.start.character - b.range.start.character;
            return diff;
        });
        var lastModifiedOffset = text.length;
        for(var i = sortedEdits.length - 1; i >= 0; i--){
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            else throw new Error("Overlapping edit");
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument2.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) return data;
        var p = data.length / 2 | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while(leftIdx < left.length && rightIdx < right.length){
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) data[i++] = left[leftIdx++];
            else data[i++] = right[rightIdx++];
        }
        while(leftIdx < left.length)data[i++] = left[leftIdx++];
        while(rightIdx < right.length)data[i++] = right[rightIdx++];
        return data;
    }
})($be549b04944e3aa9$var$TextDocument || ($be549b04944e3aa9$var$TextDocument = {}));
var $be549b04944e3aa9$var$FullTextDocument = function() {
    function FullTextDocument2(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
    }
    Object.defineProperty(FullTextDocument2.prototype, "uri", {
        get: function() {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "languageId", {
        get: function() {
            return this._languageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "version", {
        get: function() {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    FullTextDocument2.prototype.getText = function(range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument2.prototype.update = function(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = void 0;
    };
    FullTextDocument2.prototype.getLineOffsets = function() {
        if (this._lineOffsets === void 0) {
            var lineOffsets = [];
            var text = this._content;
            var isLineStart = true;
            for(var i = 0; i < text.length; i++){
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") i++;
            }
            if (isLineStart && text.length > 0) lineOffsets.push(text.length);
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    };
    FullTextDocument2.prototype.positionAt = function(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) return $be549b04944e3aa9$var$Position.create(0, offset);
        while(low < high){
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) high = mid;
            else low = mid + 1;
        }
        var line = low - 1;
        return $be549b04944e3aa9$var$Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument2.prototype.offsetAt = function(position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) return this._content.length;
        else if (position.line < 0) return 0;
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument2.prototype, "lineCount", {
        get: function() {
            return this.getLineOffsets().length;
        },
        enumerable: false,
        configurable: true
    });
    return FullTextDocument2;
}();
var $be549b04944e3aa9$var$Is;
(function(Is2) {
    var toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== "undefined";
    }
    Is2.defined = defined;
    function undefined2(value) {
        return typeof value === "undefined";
    }
    Is2.undefined = undefined2;
    function boolean(value) {
        return value === true || value === false;
    }
    Is2.boolean = boolean;
    function string(value) {
        return toString.call(value) === "[object String]";
    }
    Is2.string = string;
    function number(value) {
        return toString.call(value) === "[object Number]";
    }
    Is2.number = number;
    function numberRange(value, min, max) {
        return toString.call(value) === "[object Number]" && min <= value && value <= max;
    }
    Is2.numberRange = numberRange;
    function integer2(value) {
        return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
    }
    Is2.integer = integer2;
    function uinteger2(value) {
        return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
    }
    Is2.uinteger = uinteger2;
    function func(value) {
        return toString.call(value) === "[object Function]";
    }
    Is2.func = func;
    function objectLiteral(value) {
        return value !== null && typeof value === "object";
    }
    Is2.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is2.typedArray = typedArray;
})($be549b04944e3aa9$var$Is || ($be549b04944e3aa9$var$Is = {}));
// src/common/lspLanguageFeatures.ts
var $be549b04944e3aa9$var$DiagnosticsAdapter = class {
    dispose() {
        this._disposables.forEach((d)=>d && d.dispose());
        this._disposables.length = 0;
    }
    _doValidate(resource, languageId) {
        this._worker(resource).then((worker)=>{
            return worker.doValidation(resource.toString());
        }).then((diagnostics)=>{
            const markers = diagnostics.map((d)=>$be549b04944e3aa9$var$toDiagnostics(resource, d));
            let model = $be549b04944e3aa9$var$monaco_editor_core_exports.editor.getModel(resource);
            if (model && model.getLanguageId() === languageId) $be549b04944e3aa9$var$monaco_editor_core_exports.editor.setModelMarkers(model, languageId, markers);
        }).then(void 0, (err)=>{
            console.error(err);
        });
    }
    constructor(_languageId, _worker, configChangeEvent){
        this._languageId = _languageId;
        this._worker = _worker;
        this._disposables = [];
        this._listener = Object.create(null);
        const onModelAdd = (model)=>{
            let modeId = model.getLanguageId();
            if (modeId !== this._languageId) return;
            let handle;
            this._listener[model.uri.toString()] = model.onDidChangeContent(()=>{
                window.clearTimeout(handle);
                handle = window.setTimeout(()=>this._doValidate(model.uri, modeId), 500);
            });
            this._doValidate(model.uri, modeId);
        };
        const onModelRemoved = (model)=>{
            $be549b04944e3aa9$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._languageId, []);
            let uriStr = model.uri.toString();
            let listener = this._listener[uriStr];
            if (listener) {
                listener.dispose();
                delete this._listener[uriStr];
            }
        };
        this._disposables.push($be549b04944e3aa9$var$monaco_editor_core_exports.editor.onDidCreateModel(onModelAdd));
        this._disposables.push($be549b04944e3aa9$var$monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push($be549b04944e3aa9$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        this._disposables.push(configChangeEvent((_)=>{
            $be549b04944e3aa9$var$monaco_editor_core_exports.editor.getModels().forEach((model)=>{
                if (model.getLanguageId() === this._languageId) {
                    onModelRemoved(model);
                    onModelAdd(model);
                }
            });
        }));
        this._disposables.push({
            dispose: ()=>{
                $be549b04944e3aa9$var$monaco_editor_core_exports.editor.getModels().forEach(onModelRemoved);
                for(let key in this._listener)this._listener[key].dispose();
            }
        });
        $be549b04944e3aa9$var$monaco_editor_core_exports.editor.getModels().forEach(onModelAdd);
    }
};
function $be549b04944e3aa9$var$toSeverity(lsSeverity) {
    switch(lsSeverity){
        case $be549b04944e3aa9$var$DiagnosticSeverity.Error:
            return $be549b04944e3aa9$var$monaco_editor_core_exports.MarkerSeverity.Error;
        case $be549b04944e3aa9$var$DiagnosticSeverity.Warning:
            return $be549b04944e3aa9$var$monaco_editor_core_exports.MarkerSeverity.Warning;
        case $be549b04944e3aa9$var$DiagnosticSeverity.Information:
            return $be549b04944e3aa9$var$monaco_editor_core_exports.MarkerSeverity.Info;
        case $be549b04944e3aa9$var$DiagnosticSeverity.Hint:
            return $be549b04944e3aa9$var$monaco_editor_core_exports.MarkerSeverity.Hint;
        default:
            return $be549b04944e3aa9$var$monaco_editor_core_exports.MarkerSeverity.Info;
    }
}
function $be549b04944e3aa9$var$toDiagnostics(resource, diag) {
    let code = typeof diag.code === "number" ? String(diag.code) : diag.code;
    return {
        severity: $be549b04944e3aa9$var$toSeverity(diag.severity),
        startLineNumber: diag.range.start.line + 1,
        startColumn: diag.range.start.character + 1,
        endLineNumber: diag.range.end.line + 1,
        endColumn: diag.range.end.character + 1,
        message: diag.message,
        code: code,
        source: diag.source
    };
}
var $be549b04944e3aa9$var$CompletionAdapter = class {
    get triggerCharacters() {
        return this._triggerCharacters;
    }
    provideCompletionItems(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doComplete(resource.toString(), $be549b04944e3aa9$var$fromPosition(position));
        }).then((info)=>{
            if (!info) return;
            const wordInfo = model.getWordUntilPosition(position);
            const wordRange = new $be549b04944e3aa9$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            const items = info.items.map((entry)=>{
                const item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    command: $be549b04944e3aa9$var$toCommand(entry.command),
                    range: wordRange,
                    kind: $be549b04944e3aa9$var$toCompletionItemKind(entry.kind)
                };
                if (entry.textEdit) {
                    if ($be549b04944e3aa9$var$isInsertReplaceEdit(entry.textEdit)) item.range = {
                        insert: $be549b04944e3aa9$var$toRange(entry.textEdit.insert),
                        replace: $be549b04944e3aa9$var$toRange(entry.textEdit.replace)
                    };
                    else item.range = $be549b04944e3aa9$var$toRange(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) item.additionalTextEdits = entry.additionalTextEdits.map($be549b04944e3aa9$var$toTextEdit);
                if (entry.insertTextFormat === $be549b04944e3aa9$var$InsertTextFormat.Snippet) item.insertTextRules = $be549b04944e3aa9$var$monaco_editor_core_exports.languages.CompletionItemInsertTextRule.InsertAsSnippet;
                return item;
            });
            return {
                isIncomplete: info.isIncomplete,
                suggestions: items
            };
        });
    }
    constructor(_worker, _triggerCharacters){
        this._worker = _worker;
        this._triggerCharacters = _triggerCharacters;
    }
};
function $be549b04944e3aa9$var$fromPosition(position) {
    if (!position) return void 0;
    return {
        character: position.column - 1,
        line: position.lineNumber - 1
    };
}
function $be549b04944e3aa9$var$fromRange(range) {
    if (!range) return void 0;
    return {
        start: {
            line: range.startLineNumber - 1,
            character: range.startColumn - 1
        },
        end: {
            line: range.endLineNumber - 1,
            character: range.endColumn - 1
        }
    };
}
function $be549b04944e3aa9$var$toRange(range) {
    if (!range) return void 0;
    return new $be549b04944e3aa9$var$monaco_editor_core_exports.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function $be549b04944e3aa9$var$isInsertReplaceEdit(edit2) {
    return typeof edit2.insert !== "undefined" && typeof edit2.replace !== "undefined";
}
function $be549b04944e3aa9$var$toCompletionItemKind(kind) {
    const mItemKind = $be549b04944e3aa9$var$monaco_editor_core_exports.languages.CompletionItemKind;
    switch(kind){
        case $be549b04944e3aa9$var$CompletionItemKind.Text:
            return mItemKind.Text;
        case $be549b04944e3aa9$var$CompletionItemKind.Method:
            return mItemKind.Method;
        case $be549b04944e3aa9$var$CompletionItemKind.Function:
            return mItemKind.Function;
        case $be549b04944e3aa9$var$CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case $be549b04944e3aa9$var$CompletionItemKind.Field:
            return mItemKind.Field;
        case $be549b04944e3aa9$var$CompletionItemKind.Variable:
            return mItemKind.Variable;
        case $be549b04944e3aa9$var$CompletionItemKind.Class:
            return mItemKind.Class;
        case $be549b04944e3aa9$var$CompletionItemKind.Interface:
            return mItemKind.Interface;
        case $be549b04944e3aa9$var$CompletionItemKind.Module:
            return mItemKind.Module;
        case $be549b04944e3aa9$var$CompletionItemKind.Property:
            return mItemKind.Property;
        case $be549b04944e3aa9$var$CompletionItemKind.Unit:
            return mItemKind.Unit;
        case $be549b04944e3aa9$var$CompletionItemKind.Value:
            return mItemKind.Value;
        case $be549b04944e3aa9$var$CompletionItemKind.Enum:
            return mItemKind.Enum;
        case $be549b04944e3aa9$var$CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case $be549b04944e3aa9$var$CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case $be549b04944e3aa9$var$CompletionItemKind.Color:
            return mItemKind.Color;
        case $be549b04944e3aa9$var$CompletionItemKind.File:
            return mItemKind.File;
        case $be549b04944e3aa9$var$CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function $be549b04944e3aa9$var$toTextEdit(textEdit) {
    if (!textEdit) return void 0;
    return {
        range: $be549b04944e3aa9$var$toRange(textEdit.range),
        text: textEdit.newText
    };
}
function $be549b04944e3aa9$var$toCommand(c) {
    return c && c.command === "editor.action.triggerSuggest" ? {
        id: c.command,
        title: c.title,
        arguments: c.arguments
    } : void 0;
}
var $be549b04944e3aa9$var$HoverAdapter = class {
    provideHover(model, position, token) {
        let resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doHover(resource.toString(), $be549b04944e3aa9$var$fromPosition(position));
        }).then((info)=>{
            if (!info) return;
            return {
                range: $be549b04944e3aa9$var$toRange(info.range),
                contents: $be549b04944e3aa9$var$toMarkedStringArray(info.contents)
            };
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $be549b04944e3aa9$var$isMarkupContent(thing) {
    return thing && typeof thing === "object" && typeof thing.kind === "string";
}
function $be549b04944e3aa9$var$toMarkdownString(entry) {
    if (typeof entry === "string") return {
        value: entry
    };
    if ($be549b04944e3aa9$var$isMarkupContent(entry)) {
        if (entry.kind === "plaintext") return {
            value: entry.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
        };
        return {
            value: entry.value
        };
    }
    return {
        value: "```" + entry.language + "\n" + entry.value + "\n```\n"
    };
}
function $be549b04944e3aa9$var$toMarkedStringArray(contents) {
    if (!contents) return void 0;
    if (Array.isArray(contents)) return contents.map($be549b04944e3aa9$var$toMarkdownString);
    return [
        $be549b04944e3aa9$var$toMarkdownString(contents)
    ];
}
var $be549b04944e3aa9$var$DocumentSymbolAdapter = class {
    provideDocumentSymbols(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentSymbols(resource.toString())).then((items)=>{
            if (!items) return;
            return items.map((item)=>({
                    name: item.name,
                    detail: "",
                    containerName: item.containerName,
                    kind: $be549b04944e3aa9$var$toSymbolKind(item.kind),
                    range: $be549b04944e3aa9$var$toRange(item.location.range),
                    selectionRange: $be549b04944e3aa9$var$toRange(item.location.range),
                    tags: []
                }));
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $be549b04944e3aa9$var$toSymbolKind(kind) {
    let mKind = $be549b04944e3aa9$var$monaco_editor_core_exports.languages.SymbolKind;
    switch(kind){
        case $be549b04944e3aa9$var$SymbolKind.File:
            return mKind.Array;
        case $be549b04944e3aa9$var$SymbolKind.Module:
            return mKind.Module;
        case $be549b04944e3aa9$var$SymbolKind.Namespace:
            return mKind.Namespace;
        case $be549b04944e3aa9$var$SymbolKind.Package:
            return mKind.Package;
        case $be549b04944e3aa9$var$SymbolKind.Class:
            return mKind.Class;
        case $be549b04944e3aa9$var$SymbolKind.Method:
            return mKind.Method;
        case $be549b04944e3aa9$var$SymbolKind.Property:
            return mKind.Property;
        case $be549b04944e3aa9$var$SymbolKind.Field:
            return mKind.Field;
        case $be549b04944e3aa9$var$SymbolKind.Constructor:
            return mKind.Constructor;
        case $be549b04944e3aa9$var$SymbolKind.Enum:
            return mKind.Enum;
        case $be549b04944e3aa9$var$SymbolKind.Interface:
            return mKind.Interface;
        case $be549b04944e3aa9$var$SymbolKind.Function:
            return mKind.Function;
        case $be549b04944e3aa9$var$SymbolKind.Variable:
            return mKind.Variable;
        case $be549b04944e3aa9$var$SymbolKind.Constant:
            return mKind.Constant;
        case $be549b04944e3aa9$var$SymbolKind.String:
            return mKind.String;
        case $be549b04944e3aa9$var$SymbolKind.Number:
            return mKind.Number;
        case $be549b04944e3aa9$var$SymbolKind.Boolean:
            return mKind.Boolean;
        case $be549b04944e3aa9$var$SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var $be549b04944e3aa9$var$DocumentFormattingEditProvider = class {
    provideDocumentFormattingEdits(model, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.format(resource.toString(), null, $be549b04944e3aa9$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($be549b04944e3aa9$var$toTextEdit);
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $be549b04944e3aa9$var$DocumentRangeFormattingEditProvider = class {
    provideDocumentRangeFormattingEdits(model, range, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.format(resource.toString(), $be549b04944e3aa9$var$fromRange(range), $be549b04944e3aa9$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($be549b04944e3aa9$var$toTextEdit);
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $be549b04944e3aa9$var$fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var $be549b04944e3aa9$var$DocumentColorAdapter = class {
    provideDocumentColors(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentColors(resource.toString())).then((infos)=>{
            if (!infos) return;
            return infos.map((item)=>({
                    color: item.color,
                    range: $be549b04944e3aa9$var$toRange(item.range)
                }));
        });
    }
    provideColorPresentations(model, info, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getColorPresentations(resource.toString(), info.color, $be549b04944e3aa9$var$fromRange(info.range))).then((presentations)=>{
            if (!presentations) return;
            return presentations.map((presentation)=>{
                let item = {
                    label: presentation.label
                };
                if (presentation.textEdit) item.textEdit = $be549b04944e3aa9$var$toTextEdit(presentation.textEdit);
                if (presentation.additionalTextEdits) item.additionalTextEdits = presentation.additionalTextEdits.map($be549b04944e3aa9$var$toTextEdit);
                return item;
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $be549b04944e3aa9$var$FoldingRangeAdapter = class {
    provideFoldingRanges(model, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getFoldingRanges(resource.toString(), context)).then((ranges)=>{
            if (!ranges) return;
            return ranges.map((range)=>{
                const result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== "undefined") result.kind = $be549b04944e3aa9$var$toFoldingRangeKind(range.kind);
                return result;
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $be549b04944e3aa9$var$toFoldingRangeKind(kind) {
    switch(kind){
        case $be549b04944e3aa9$var$FoldingRangeKind.Comment:
            return $be549b04944e3aa9$var$monaco_editor_core_exports.languages.FoldingRangeKind.Comment;
        case $be549b04944e3aa9$var$FoldingRangeKind.Imports:
            return $be549b04944e3aa9$var$monaco_editor_core_exports.languages.FoldingRangeKind.Imports;
        case $be549b04944e3aa9$var$FoldingRangeKind.Region:
            return $be549b04944e3aa9$var$monaco_editor_core_exports.languages.FoldingRangeKind.Region;
    }
    return void 0;
}
var $be549b04944e3aa9$var$SelectionRangeAdapter = class {
    provideSelectionRanges(model, positions, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getSelectionRanges(resource.toString(), positions.map($be549b04944e3aa9$var$fromPosition))).then((selectionRanges)=>{
            if (!selectionRanges) return;
            return selectionRanges.map((selectionRange)=>{
                const result = [];
                while(selectionRange){
                    result.push({
                        range: $be549b04944e3aa9$var$toRange(selectionRange.range)
                    });
                    selectionRange = selectionRange.parent;
                }
                return result;
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $be549b04944e3aa9$var$createScanner(text, ignoreTrivia) {
    if (ignoreTrivia === void 0) ignoreTrivia = false;
    var len = text.length;
    var pos = 0, value = "", tokenOffset = 0, token = 16, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0;
    function scanHexDigits(count, exact) {
        var digits = 0;
        var value2 = 0;
        while(digits < count || !exact){
            var ch = text.charCodeAt(pos);
            if (ch >= 48 && ch <= 57) value2 = value2 * 16 + ch - 48;
            else if (ch >= 65 && ch <= 70) value2 = value2 * 16 + ch - 65 + 10;
            else if (ch >= 97 && ch <= 102) value2 = value2 * 16 + ch - 97 + 10;
            else break;
            pos++;
            digits++;
        }
        if (digits < count) value2 = -1;
        return value2;
    }
    function setPosition(newPosition) {
        pos = newPosition;
        value = "";
        tokenOffset = 0;
        token = 16;
        scanError = 0;
    }
    function scanNumber() {
        var start = pos;
        if (text.charCodeAt(pos) === 48) pos++;
        else {
            pos++;
            while(pos < text.length && $be549b04944e3aa9$var$isDigit(text.charCodeAt(pos)))pos++;
        }
        if (pos < text.length && text.charCodeAt(pos) === 46) {
            pos++;
            if (pos < text.length && $be549b04944e3aa9$var$isDigit(text.charCodeAt(pos))) {
                pos++;
                while(pos < text.length && $be549b04944e3aa9$var$isDigit(text.charCodeAt(pos)))pos++;
            } else {
                scanError = 3;
                return text.substring(start, pos);
            }
        }
        var end = pos;
        if (pos < text.length && (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101)) {
            pos++;
            if (pos < text.length && text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45) pos++;
            if (pos < text.length && $be549b04944e3aa9$var$isDigit(text.charCodeAt(pos))) {
                pos++;
                while(pos < text.length && $be549b04944e3aa9$var$isDigit(text.charCodeAt(pos)))pos++;
                end = pos;
            } else scanError = 3;
        }
        return text.substring(start, end);
    }
    function scanString() {
        var result = "", start = pos;
        while(true){
            if (pos >= len) {
                result += text.substring(start, pos);
                scanError = 2;
                break;
            }
            var ch = text.charCodeAt(pos);
            if (ch === 34) {
                result += text.substring(start, pos);
                pos++;
                break;
            }
            if (ch === 92) {
                result += text.substring(start, pos);
                pos++;
                if (pos >= len) {
                    scanError = 2;
                    break;
                }
                var ch2 = text.charCodeAt(pos++);
                switch(ch2){
                    case 34:
                        result += '"';
                        break;
                    case 92:
                        result += "\\";
                        break;
                    case 47:
                        result += "/";
                        break;
                    case 98:
                        result += "\b";
                        break;
                    case 102:
                        result += "\f";
                        break;
                    case 110:
                        result += "\n";
                        break;
                    case 114:
                        result += "\r";
                        break;
                    case 116:
                        result += "	";
                        break;
                    case 117:
                        var ch3 = scanHexDigits(4, true);
                        if (ch3 >= 0) result += String.fromCharCode(ch3);
                        else scanError = 4;
                        break;
                    default:
                        scanError = 5;
                }
                start = pos;
                continue;
            }
            if (ch >= 0 && ch <= 31) {
                if ($be549b04944e3aa9$var$isLineBreak(ch)) {
                    result += text.substring(start, pos);
                    scanError = 2;
                    break;
                } else scanError = 6;
            }
            pos++;
        }
        return result;
    }
    function scanNext() {
        value = "";
        scanError = 0;
        tokenOffset = pos;
        lineStartOffset = lineNumber;
        prevTokenLineStartOffset = tokenLineStartOffset;
        if (pos >= len) {
            tokenOffset = len;
            return token = 17;
        }
        var code = text.charCodeAt(pos);
        if ($be549b04944e3aa9$var$isWhiteSpace(code)) {
            do {
                pos++;
                value += String.fromCharCode(code);
                code = text.charCodeAt(pos);
            }while ($be549b04944e3aa9$var$isWhiteSpace(code));
            return token = 15;
        }
        if ($be549b04944e3aa9$var$isLineBreak(code)) {
            pos++;
            value += String.fromCharCode(code);
            if (code === 13 && text.charCodeAt(pos) === 10) {
                pos++;
                value += "\n";
            }
            lineNumber++;
            tokenLineStartOffset = pos;
            return token = 14;
        }
        switch(code){
            case 123:
                pos++;
                return token = 1;
            case 125:
                pos++;
                return token = 2;
            case 91:
                pos++;
                return token = 3;
            case 93:
                pos++;
                return token = 4;
            case 58:
                pos++;
                return token = 6;
            case 44:
                pos++;
                return token = 5;
            case 34:
                pos++;
                value = scanString();
                return token = 10;
            case 47:
                var start = pos - 1;
                if (text.charCodeAt(pos + 1) === 47) {
                    pos += 2;
                    while(pos < len){
                        if ($be549b04944e3aa9$var$isLineBreak(text.charCodeAt(pos))) break;
                        pos++;
                    }
                    value = text.substring(start, pos);
                    return token = 12;
                }
                if (text.charCodeAt(pos + 1) === 42) {
                    pos += 2;
                    var safeLength = len - 1;
                    var commentClosed = false;
                    while(pos < safeLength){
                        var ch = text.charCodeAt(pos);
                        if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
                            pos += 2;
                            commentClosed = true;
                            break;
                        }
                        pos++;
                        if ($be549b04944e3aa9$var$isLineBreak(ch)) {
                            if (ch === 13 && text.charCodeAt(pos) === 10) pos++;
                            lineNumber++;
                            tokenLineStartOffset = pos;
                        }
                    }
                    if (!commentClosed) {
                        pos++;
                        scanError = 1;
                    }
                    value = text.substring(start, pos);
                    return token = 13;
                }
                value += String.fromCharCode(code);
                pos++;
                return token = 16;
            case 45:
                value += String.fromCharCode(code);
                pos++;
                if (pos === len || !$be549b04944e3aa9$var$isDigit(text.charCodeAt(pos))) return token = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                value += scanNumber();
                return token = 11;
            default:
                while(pos < len && isUnknownContentCharacter(code)){
                    pos++;
                    code = text.charCodeAt(pos);
                }
                if (tokenOffset !== pos) {
                    value = text.substring(tokenOffset, pos);
                    switch(value){
                        case "true":
                            return token = 8;
                        case "false":
                            return token = 9;
                        case "null":
                            return token = 7;
                    }
                    return token = 16;
                }
                value += String.fromCharCode(code);
                pos++;
                return token = 16;
        }
    }
    function isUnknownContentCharacter(code) {
        if ($be549b04944e3aa9$var$isWhiteSpace(code) || $be549b04944e3aa9$var$isLineBreak(code)) return false;
        switch(code){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return false;
        }
        return true;
    }
    function scanNextNonTrivia() {
        var result;
        do result = scanNext();
        while (result >= 12 && result <= 15);
        return result;
    }
    return {
        setPosition: setPosition,
        getPosition: function() {
            return pos;
        },
        scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
        getToken: function() {
            return token;
        },
        getTokenValue: function() {
            return value;
        },
        getTokenOffset: function() {
            return tokenOffset;
        },
        getTokenLength: function() {
            return pos - tokenOffset;
        },
        getTokenStartLine: function() {
            return lineStartOffset;
        },
        getTokenStartCharacter: function() {
            return tokenOffset - prevTokenLineStartOffset;
        },
        getTokenError: function() {
            return scanError;
        }
    };
}
function $be549b04944e3aa9$var$isWhiteSpace(ch) {
    return ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch === 5760 || ch >= 8192 && ch <= 8203 || ch === 8239 || ch === 8287 || ch === 12288 || ch === 65279;
}
function $be549b04944e3aa9$var$isLineBreak(ch) {
    return ch === 10 || ch === 13 || ch === 8232 || ch === 8233;
}
function $be549b04944e3aa9$var$isDigit(ch) {
    return ch >= 48 && ch <= 57;
}
var $be549b04944e3aa9$var$ParseOptions;
(function(ParseOptions2) {
    ParseOptions2.DEFAULT = {
        allowTrailingComma: false
    };
})($be549b04944e3aa9$var$ParseOptions || ($be549b04944e3aa9$var$ParseOptions = {}));
var $be549b04944e3aa9$var$createScanner2 = $be549b04944e3aa9$var$createScanner;
// src/json/tokenization.ts
function $be549b04944e3aa9$var$createTokenizationSupport(supportComments) {
    return {
        getInitialState: ()=>new $be549b04944e3aa9$var$JSONState(null, null, false, null),
        tokenize: (line, state)=>$be549b04944e3aa9$var$tokenize(supportComments, line, state)
    };
}
var $be549b04944e3aa9$var$TOKEN_DELIM_OBJECT = "delimiter.bracket.json";
var $be549b04944e3aa9$var$TOKEN_DELIM_ARRAY = "delimiter.array.json";
var $be549b04944e3aa9$var$TOKEN_DELIM_COLON = "delimiter.colon.json";
var $be549b04944e3aa9$var$TOKEN_DELIM_COMMA = "delimiter.comma.json";
var $be549b04944e3aa9$var$TOKEN_VALUE_BOOLEAN = "keyword.json";
var $be549b04944e3aa9$var$TOKEN_VALUE_NULL = "keyword.json";
var $be549b04944e3aa9$var$TOKEN_VALUE_STRING = "string.value.json";
var $be549b04944e3aa9$var$TOKEN_VALUE_NUMBER = "number.json";
var $be549b04944e3aa9$var$TOKEN_PROPERTY_NAME = "string.key.json";
var $be549b04944e3aa9$var$TOKEN_COMMENT_BLOCK = "comment.block.json";
var $be549b04944e3aa9$var$TOKEN_COMMENT_LINE = "comment.line.json";
var $be549b04944e3aa9$var$JSONParent;
(function(JSONParent2) {
    JSONParent2[JSONParent2["Object"] = 0] = "Object";
    JSONParent2[JSONParent2["Array"] = 1] = "Array";
})($be549b04944e3aa9$var$JSONParent || ($be549b04944e3aa9$var$JSONParent = {}));
var $be549b04944e3aa9$var$ParentsStack = class {
    static pop(parents) {
        if (parents) return parents.parent;
        return null;
    }
    static push(parents, type) {
        return new $be549b04944e3aa9$var$ParentsStack(parents, type);
    }
    static equals(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;
        while(a && b){
            if (a === b) return true;
            if (a.type !== b.type) return false;
            a = a.parent;
            b = b.parent;
        }
        return true;
    }
    constructor(parent, type){
        this.parent = parent;
        this.type = type;
    }
};
var $be549b04944e3aa9$var$JSONState = class {
    clone() {
        return new $be549b04944e3aa9$var$JSONState(this._state, this.scanError, this.lastWasColon, this.parents);
    }
    equals(other) {
        if (other === this) return true;
        if (!other || !(other instanceof $be549b04944e3aa9$var$JSONState)) return false;
        return this.scanError === other.scanError && this.lastWasColon === other.lastWasColon && $be549b04944e3aa9$var$ParentsStack.equals(this.parents, other.parents);
    }
    getStateData() {
        return this._state;
    }
    setStateData(state) {
        this._state = state;
    }
    constructor(state, scanError, lastWasColon, parents){
        this._state = state;
        this.scanError = scanError;
        this.lastWasColon = lastWasColon;
        this.parents = parents;
    }
};
var $be549b04944e3aa9$var$ScanError;
(function(ScanError2) {
    ScanError2[ScanError2["None"] = 0] = "None";
    ScanError2[ScanError2["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
    ScanError2[ScanError2["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
    ScanError2[ScanError2["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
    ScanError2[ScanError2["InvalidUnicode"] = 4] = "InvalidUnicode";
    ScanError2[ScanError2["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
    ScanError2[ScanError2["InvalidCharacter"] = 6] = "InvalidCharacter";
})($be549b04944e3aa9$var$ScanError || ($be549b04944e3aa9$var$ScanError = {}));
var $be549b04944e3aa9$var$SyntaxKind;
(function(SyntaxKind2) {
    SyntaxKind2[SyntaxKind2["OpenBraceToken"] = 1] = "OpenBraceToken";
    SyntaxKind2[SyntaxKind2["CloseBraceToken"] = 2] = "CloseBraceToken";
    SyntaxKind2[SyntaxKind2["OpenBracketToken"] = 3] = "OpenBracketToken";
    SyntaxKind2[SyntaxKind2["CloseBracketToken"] = 4] = "CloseBracketToken";
    SyntaxKind2[SyntaxKind2["CommaToken"] = 5] = "CommaToken";
    SyntaxKind2[SyntaxKind2["ColonToken"] = 6] = "ColonToken";
    SyntaxKind2[SyntaxKind2["NullKeyword"] = 7] = "NullKeyword";
    SyntaxKind2[SyntaxKind2["TrueKeyword"] = 8] = "TrueKeyword";
    SyntaxKind2[SyntaxKind2["FalseKeyword"] = 9] = "FalseKeyword";
    SyntaxKind2[SyntaxKind2["StringLiteral"] = 10] = "StringLiteral";
    SyntaxKind2[SyntaxKind2["NumericLiteral"] = 11] = "NumericLiteral";
    SyntaxKind2[SyntaxKind2["LineCommentTrivia"] = 12] = "LineCommentTrivia";
    SyntaxKind2[SyntaxKind2["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
    SyntaxKind2[SyntaxKind2["LineBreakTrivia"] = 14] = "LineBreakTrivia";
    SyntaxKind2[SyntaxKind2["Trivia"] = 15] = "Trivia";
    SyntaxKind2[SyntaxKind2["Unknown"] = 16] = "Unknown";
    SyntaxKind2[SyntaxKind2["EOF"] = 17] = "EOF";
})($be549b04944e3aa9$var$SyntaxKind || ($be549b04944e3aa9$var$SyntaxKind = {}));
function $be549b04944e3aa9$var$tokenize(comments, line, state, offsetDelta = 0) {
    let numberOfInsertedCharacters = 0;
    let adjustOffset = false;
    switch(state.scanError){
        case 2:
            line = '"' + line;
            numberOfInsertedCharacters = 1;
            break;
        case 1:
            line = "/*" + line;
            numberOfInsertedCharacters = 2;
            break;
    }
    const scanner2 = $be549b04944e3aa9$var$createScanner2(line);
    let lastWasColon = state.lastWasColon;
    let parents = state.parents;
    const ret = {
        tokens: [],
        endState: state.clone()
    };
    while(true){
        let offset = offsetDelta + scanner2.getPosition();
        let type = "";
        const kind = scanner2.scan();
        if (kind === 17) break;
        if (offset === offsetDelta + scanner2.getPosition()) throw new Error("Scanner did not advance, next 3 characters are: " + line.substr(scanner2.getPosition(), 3));
        if (adjustOffset) offset -= numberOfInsertedCharacters;
        adjustOffset = numberOfInsertedCharacters > 0;
        switch(kind){
            case 1:
                parents = $be549b04944e3aa9$var$ParentsStack.push(parents, 0);
                type = $be549b04944e3aa9$var$TOKEN_DELIM_OBJECT;
                lastWasColon = false;
                break;
            case 2:
                parents = $be549b04944e3aa9$var$ParentsStack.pop(parents);
                type = $be549b04944e3aa9$var$TOKEN_DELIM_OBJECT;
                lastWasColon = false;
                break;
            case 3:
                parents = $be549b04944e3aa9$var$ParentsStack.push(parents, 1);
                type = $be549b04944e3aa9$var$TOKEN_DELIM_ARRAY;
                lastWasColon = false;
                break;
            case 4:
                parents = $be549b04944e3aa9$var$ParentsStack.pop(parents);
                type = $be549b04944e3aa9$var$TOKEN_DELIM_ARRAY;
                lastWasColon = false;
                break;
            case 6:
                type = $be549b04944e3aa9$var$TOKEN_DELIM_COLON;
                lastWasColon = true;
                break;
            case 5:
                type = $be549b04944e3aa9$var$TOKEN_DELIM_COMMA;
                lastWasColon = false;
                break;
            case 8:
            case 9:
                type = $be549b04944e3aa9$var$TOKEN_VALUE_BOOLEAN;
                lastWasColon = false;
                break;
            case 7:
                type = $be549b04944e3aa9$var$TOKEN_VALUE_NULL;
                lastWasColon = false;
                break;
            case 10:
                const currentParent = parents ? parents.type : 0;
                const inArray = currentParent === 1;
                type = lastWasColon || inArray ? $be549b04944e3aa9$var$TOKEN_VALUE_STRING : $be549b04944e3aa9$var$TOKEN_PROPERTY_NAME;
                lastWasColon = false;
                break;
            case 11:
                type = $be549b04944e3aa9$var$TOKEN_VALUE_NUMBER;
                lastWasColon = false;
                break;
        }
        if (comments) switch(kind){
            case 12:
                type = $be549b04944e3aa9$var$TOKEN_COMMENT_LINE;
                break;
            case 13:
                type = $be549b04944e3aa9$var$TOKEN_COMMENT_BLOCK;
                break;
        }
        ret.endState = new $be549b04944e3aa9$var$JSONState(state.getStateData(), scanner2.getTokenError(), lastWasColon, parents);
        ret.tokens.push({
            startIndex: offset,
            scopes: type
        });
    }
    return ret;
}
// src/json/jsonMode.ts
var $be549b04944e3aa9$var$JSONDiagnosticsAdapter = class extends $be549b04944e3aa9$var$DiagnosticsAdapter {
    _resetSchema(resource) {
        this._worker().then((worker)=>{
            worker.resetSchema(resource.toString());
        });
    }
    constructor(languageId, worker, defaults){
        super(languageId, worker, defaults.onDidChange);
        this._disposables.push($be549b04944e3aa9$var$monaco_editor_core_exports.editor.onWillDisposeModel((model)=>{
            this._resetSchema(model.uri);
        }));
        this._disposables.push($be549b04944e3aa9$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            this._resetSchema(event.model.uri);
        }));
    }
};
function $be549b04944e3aa9$export$6df00d141df42469(defaults) {
    const disposables = [];
    const providers = [];
    const client = new $be549b04944e3aa9$var$WorkerManager(defaults);
    disposables.push(client);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    function registerProviders() {
        const { languageId: languageId , modeConfiguration: modeConfiguration2  } = defaults;
        $be549b04944e3aa9$var$disposeAll(providers);
        if (modeConfiguration2.documentFormattingEdits) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $be549b04944e3aa9$var$DocumentFormattingEditProvider(worker)));
        if (modeConfiguration2.documentRangeFormattingEdits) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $be549b04944e3aa9$var$DocumentRangeFormattingEditProvider(worker)));
        if (modeConfiguration2.completionItems) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $be549b04944e3aa9$var$CompletionAdapter(worker, [
            " ",
            ":",
            '"'
        ])));
        if (modeConfiguration2.hovers) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $be549b04944e3aa9$var$HoverAdapter(worker)));
        if (modeConfiguration2.documentSymbols) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $be549b04944e3aa9$var$DocumentSymbolAdapter(worker)));
        if (modeConfiguration2.tokens) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.setTokensProvider(languageId, $be549b04944e3aa9$var$createTokenizationSupport(true)));
        if (modeConfiguration2.colors) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.registerColorProvider(languageId, new $be549b04944e3aa9$var$DocumentColorAdapter(worker)));
        if (modeConfiguration2.foldingRanges) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $be549b04944e3aa9$var$FoldingRangeAdapter(worker)));
        if (modeConfiguration2.diagnostics) providers.push(new $be549b04944e3aa9$var$JSONDiagnosticsAdapter(languageId, worker, defaults));
        if (modeConfiguration2.selectionRanges) providers.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $be549b04944e3aa9$var$SelectionRangeAdapter(worker)));
    }
    registerProviders();
    disposables.push($be549b04944e3aa9$var$monaco_editor_core_exports.languages.setLanguageConfiguration(defaults.languageId, $be549b04944e3aa9$var$richEditConfiguration));
    let modeConfiguration = defaults.modeConfiguration;
    defaults.onDidChange((newDefaults)=>{
        if (newDefaults.modeConfiguration !== modeConfiguration) {
            modeConfiguration = newDefaults.modeConfiguration;
            registerProviders();
        }
    });
    disposables.push($be549b04944e3aa9$var$asDisposable(providers));
    return $be549b04944e3aa9$var$asDisposable(disposables);
}
function $be549b04944e3aa9$var$asDisposable(disposables) {
    return {
        dispose: ()=>$be549b04944e3aa9$var$disposeAll(disposables)
    };
}
function $be549b04944e3aa9$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}
var $be549b04944e3aa9$var$richEditConfiguration = {
    wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
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
        ]
    ],
    autoClosingPairs: [
        {
            open: "{",
            close: "}",
            notIn: [
                "string"
            ]
        },
        {
            open: "[",
            close: "]",
            notIn: [
                "string"
            ]
        },
        {
            open: '"',
            close: '"',
            notIn: [
                "string"
            ]
        }
    ]
};

});

})();
