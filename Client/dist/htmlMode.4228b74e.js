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
parcelRequire.register("kjoYl", function(module, exports) {

$parcel$export(module.exports, "setupMode1", function () { return $ec98f3fa42daea97$export$972c61cff7b1bac7; });
$parcel$export(module.exports, "setupMode", function () { return $ec98f3fa42daea97$export$6df00d141df42469; });

var $jBoEN = parcelRequire("jBoEN");
// node_modules/vscode-languageserver-types/lib/esm/main.js
"use strict";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $ec98f3fa42daea97$var$__defProp = Object.defineProperty;
var $ec98f3fa42daea97$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $ec98f3fa42daea97$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $ec98f3fa42daea97$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $ec98f3fa42daea97$var$__markAsModule = (target)=>$ec98f3fa42daea97$var$__defProp(target, "__esModule", {
        value: true
    });
var $ec98f3fa42daea97$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $ec98f3fa42daea97$var$__getOwnPropNames(module))if (!$ec98f3fa42daea97$var$__hasOwnProp.call(target, key) && key !== "default") $ec98f3fa42daea97$var$__defProp(target, key, {
            get: ()=>module[key],
            enumerable: !(desc = $ec98f3fa42daea97$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $ec98f3fa42daea97$var$monaco_editor_core_exports = {};
$ec98f3fa42daea97$var$__markAsModule($ec98f3fa42daea97$var$monaco_editor_core_exports);
$ec98f3fa42daea97$var$__reExport($ec98f3fa42daea97$var$monaco_editor_core_exports, $jBoEN);
// src/html/workerManager.ts
var $ec98f3fa42daea97$var$STOP_WHEN_IDLE_FOR = 120000;
var $ec98f3fa42daea97$var$WorkerManager = class {
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
        if (timePassedSinceLastUsed > $ec98f3fa42daea97$var$STOP_WHEN_IDLE_FOR) this._stopWorker();
    }
    _getClient() {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = $ec98f3fa42daea97$var$monaco_editor_core_exports.editor.createWebWorker({
                moduleId: "vs/language/html/htmlWorker",
                createData: {
                    languageSettings: this._defaults.options,
                    languageId: this._defaults.languageId
                },
                label: this._defaults.languageId
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
var $ec98f3fa42daea97$var$integer;
(function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
})($ec98f3fa42daea97$var$integer || ($ec98f3fa42daea97$var$integer = {}));
var $ec98f3fa42daea97$var$uinteger;
(function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
})($ec98f3fa42daea97$var$uinteger || ($ec98f3fa42daea97$var$uinteger = {}));
var $ec98f3fa42daea97$var$Position;
(function(Position3) {
    function create(line, character) {
        if (line === Number.MAX_VALUE) line = $ec98f3fa42daea97$var$uinteger.MAX_VALUE;
        if (character === Number.MAX_VALUE) character = $ec98f3fa42daea97$var$uinteger.MAX_VALUE;
        return {
            line: line,
            character: character
        };
    }
    Position3.create = create;
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.objectLiteral(candidate) && $ec98f3fa42daea97$var$Is.uinteger(candidate.line) && $ec98f3fa42daea97$var$Is.uinteger(candidate.character);
    }
    Position3.is = is;
})($ec98f3fa42daea97$var$Position || ($ec98f3fa42daea97$var$Position = {}));
var $ec98f3fa42daea97$var$Range;
(function(Range3) {
    function create(one, two, three, four) {
        if ($ec98f3fa42daea97$var$Is.uinteger(one) && $ec98f3fa42daea97$var$Is.uinteger(two) && $ec98f3fa42daea97$var$Is.uinteger(three) && $ec98f3fa42daea97$var$Is.uinteger(four)) return {
            start: $ec98f3fa42daea97$var$Position.create(one, two),
            end: $ec98f3fa42daea97$var$Position.create(three, four)
        };
        else if ($ec98f3fa42daea97$var$Position.is(one) && $ec98f3fa42daea97$var$Position.is(two)) return {
            start: one,
            end: two
        };
        else throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
    }
    Range3.create = create;
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.objectLiteral(candidate) && $ec98f3fa42daea97$var$Position.is(candidate.start) && $ec98f3fa42daea97$var$Position.is(candidate.end);
    }
    Range3.is = is;
})($ec98f3fa42daea97$var$Range || ($ec98f3fa42daea97$var$Range = {}));
var $ec98f3fa42daea97$var$Location;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Range.is(candidate.range) && ($ec98f3fa42daea97$var$Is.string(candidate.uri) || $ec98f3fa42daea97$var$Is.undefined(candidate.uri));
    }
    Location2.is = is;
})($ec98f3fa42daea97$var$Location || ($ec98f3fa42daea97$var$Location = {}));
var $ec98f3fa42daea97$var$LocationLink;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Range.is(candidate.targetRange) && $ec98f3fa42daea97$var$Is.string(candidate.targetUri) && ($ec98f3fa42daea97$var$Range.is(candidate.targetSelectionRange) || $ec98f3fa42daea97$var$Is.undefined(candidate.targetSelectionRange)) && ($ec98f3fa42daea97$var$Range.is(candidate.originSelectionRange) || $ec98f3fa42daea97$var$Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
})($ec98f3fa42daea97$var$LocationLink || ($ec98f3fa42daea97$var$LocationLink = {}));
var $ec98f3fa42daea97$var$Color;
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
        return $ec98f3fa42daea97$var$Is.numberRange(candidate.red, 0, 1) && $ec98f3fa42daea97$var$Is.numberRange(candidate.green, 0, 1) && $ec98f3fa42daea97$var$Is.numberRange(candidate.blue, 0, 1) && $ec98f3fa42daea97$var$Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
})($ec98f3fa42daea97$var$Color || ($ec98f3fa42daea97$var$Color = {}));
var $ec98f3fa42daea97$var$ColorInformation;
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
        return $ec98f3fa42daea97$var$Range.is(candidate.range) && $ec98f3fa42daea97$var$Color.is(candidate.color);
    }
    ColorInformation2.is = is;
})($ec98f3fa42daea97$var$ColorInformation || ($ec98f3fa42daea97$var$ColorInformation = {}));
var $ec98f3fa42daea97$var$ColorPresentation;
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
        return $ec98f3fa42daea97$var$Is.string(candidate.label) && ($ec98f3fa42daea97$var$Is.undefined(candidate.textEdit) || $ec98f3fa42daea97$var$TextEdit.is(candidate)) && ($ec98f3fa42daea97$var$Is.undefined(candidate.additionalTextEdits) || $ec98f3fa42daea97$var$Is.typedArray(candidate.additionalTextEdits, $ec98f3fa42daea97$var$TextEdit.is));
    }
    ColorPresentation2.is = is;
})($ec98f3fa42daea97$var$ColorPresentation || ($ec98f3fa42daea97$var$ColorPresentation = {}));
var $ec98f3fa42daea97$var$FoldingRangeKind;
(function(FoldingRangeKind2) {
    FoldingRangeKind2["Comment"] = "comment";
    FoldingRangeKind2["Imports"] = "imports";
    FoldingRangeKind2["Region"] = "region";
})($ec98f3fa42daea97$var$FoldingRangeKind || ($ec98f3fa42daea97$var$FoldingRangeKind = {}));
var $ec98f3fa42daea97$var$FoldingRange;
(function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if ($ec98f3fa42daea97$var$Is.defined(startCharacter)) result.startCharacter = startCharacter;
        if ($ec98f3fa42daea97$var$Is.defined(endCharacter)) result.endCharacter = endCharacter;
        if ($ec98f3fa42daea97$var$Is.defined(kind)) result.kind = kind;
        return result;
    }
    FoldingRange2.create = create;
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.uinteger(candidate.startLine) && $ec98f3fa42daea97$var$Is.uinteger(candidate.startLine) && ($ec98f3fa42daea97$var$Is.undefined(candidate.startCharacter) || $ec98f3fa42daea97$var$Is.uinteger(candidate.startCharacter)) && ($ec98f3fa42daea97$var$Is.undefined(candidate.endCharacter) || $ec98f3fa42daea97$var$Is.uinteger(candidate.endCharacter)) && ($ec98f3fa42daea97$var$Is.undefined(candidate.kind) || $ec98f3fa42daea97$var$Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
})($ec98f3fa42daea97$var$FoldingRange || ($ec98f3fa42daea97$var$FoldingRange = {}));
var $ec98f3fa42daea97$var$DiagnosticRelatedInformation;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Location.is(candidate.location) && $ec98f3fa42daea97$var$Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
})($ec98f3fa42daea97$var$DiagnosticRelatedInformation || ($ec98f3fa42daea97$var$DiagnosticRelatedInformation = {}));
var $ec98f3fa42daea97$var$DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
})($ec98f3fa42daea97$var$DiagnosticSeverity || ($ec98f3fa42daea97$var$DiagnosticSeverity = {}));
var $ec98f3fa42daea97$var$DiagnosticTag;
(function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
})($ec98f3fa42daea97$var$DiagnosticTag || ($ec98f3fa42daea97$var$DiagnosticTag = {}));
var $ec98f3fa42daea97$var$CodeDescription;
(function(CodeDescription2) {
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && $ec98f3fa42daea97$var$Is.string(candidate.href);
    }
    CodeDescription2.is = is;
})($ec98f3fa42daea97$var$CodeDescription || ($ec98f3fa42daea97$var$CodeDescription = {}));
var $ec98f3fa42daea97$var$Diagnostic;
(function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
        var result = {
            range: range,
            message: message
        };
        if ($ec98f3fa42daea97$var$Is.defined(severity)) result.severity = severity;
        if ($ec98f3fa42daea97$var$Is.defined(code)) result.code = code;
        if ($ec98f3fa42daea97$var$Is.defined(source)) result.source = source;
        if ($ec98f3fa42daea97$var$Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
        return result;
    }
    Diagnostic2.create = create;
    function is(value) {
        var _a;
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Range.is(candidate.range) && $ec98f3fa42daea97$var$Is.string(candidate.message) && ($ec98f3fa42daea97$var$Is.number(candidate.severity) || $ec98f3fa42daea97$var$Is.undefined(candidate.severity)) && ($ec98f3fa42daea97$var$Is.integer(candidate.code) || $ec98f3fa42daea97$var$Is.string(candidate.code) || $ec98f3fa42daea97$var$Is.undefined(candidate.code)) && ($ec98f3fa42daea97$var$Is.undefined(candidate.codeDescription) || $ec98f3fa42daea97$var$Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && ($ec98f3fa42daea97$var$Is.string(candidate.source) || $ec98f3fa42daea97$var$Is.undefined(candidate.source)) && ($ec98f3fa42daea97$var$Is.undefined(candidate.relatedInformation) || $ec98f3fa42daea97$var$Is.typedArray(candidate.relatedInformation, $ec98f3fa42daea97$var$DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
})($ec98f3fa42daea97$var$Diagnostic || ($ec98f3fa42daea97$var$Diagnostic = {}));
var $ec98f3fa42daea97$var$Command;
(function(Command2) {
    function create(title, command) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        var result = {
            title: title,
            command: command
        };
        if ($ec98f3fa42daea97$var$Is.defined(args) && args.length > 0) result.arguments = args;
        return result;
    }
    Command2.create = create;
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.title) && $ec98f3fa42daea97$var$Is.string(candidate.command);
    }
    Command2.is = is;
})($ec98f3fa42daea97$var$Command || ($ec98f3fa42daea97$var$Command = {}));
var $ec98f3fa42daea97$var$TextEdit;
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
        return $ec98f3fa42daea97$var$Is.objectLiteral(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.newText) && $ec98f3fa42daea97$var$Range.is(candidate.range);
    }
    TextEdit2.is = is;
})($ec98f3fa42daea97$var$TextEdit || ($ec98f3fa42daea97$var$TextEdit = {}));
var $ec98f3fa42daea97$var$ChangeAnnotation;
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
        return candidate !== void 0 && $ec98f3fa42daea97$var$Is.objectLiteral(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.label) && ($ec98f3fa42daea97$var$Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && ($ec98f3fa42daea97$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
})($ec98f3fa42daea97$var$ChangeAnnotation || ($ec98f3fa42daea97$var$ChangeAnnotation = {}));
var $ec98f3fa42daea97$var$ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
    function is(value) {
        var candidate = value;
        return typeof candidate === "string";
    }
    ChangeAnnotationIdentifier2.is = is;
})($ec98f3fa42daea97$var$ChangeAnnotationIdentifier || ($ec98f3fa42daea97$var$ChangeAnnotationIdentifier = {}));
var $ec98f3fa42daea97$var$AnnotatedTextEdit;
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
        return $ec98f3fa42daea97$var$TextEdit.is(candidate) && ($ec98f3fa42daea97$var$ChangeAnnotation.is(candidate.annotationId) || $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
})($ec98f3fa42daea97$var$AnnotatedTextEdit || ($ec98f3fa42daea97$var$AnnotatedTextEdit = {}));
var $ec98f3fa42daea97$var$TextDocumentEdit;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
})($ec98f3fa42daea97$var$TextDocumentEdit || ($ec98f3fa42daea97$var$TextDocumentEdit = {}));
var $ec98f3fa42daea97$var$CreateFile;
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
        return candidate && candidate.kind === "create" && $ec98f3fa42daea97$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $ec98f3fa42daea97$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $ec98f3fa42daea97$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
})($ec98f3fa42daea97$var$CreateFile || ($ec98f3fa42daea97$var$CreateFile = {}));
var $ec98f3fa42daea97$var$RenameFile;
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
        return candidate && candidate.kind === "rename" && $ec98f3fa42daea97$var$Is.string(candidate.oldUri) && $ec98f3fa42daea97$var$Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $ec98f3fa42daea97$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $ec98f3fa42daea97$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
})($ec98f3fa42daea97$var$RenameFile || ($ec98f3fa42daea97$var$RenameFile = {}));
var $ec98f3fa42daea97$var$DeleteFile;
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
        return candidate && candidate.kind === "delete" && $ec98f3fa42daea97$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || $ec98f3fa42daea97$var$Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || $ec98f3fa42daea97$var$Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
})($ec98f3fa42daea97$var$DeleteFile || ($ec98f3fa42daea97$var$DeleteFile = {}));
var $ec98f3fa42daea97$var$WorkspaceEdit;
(function(WorkspaceEdit2) {
    function is(value) {
        var candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if ($ec98f3fa42daea97$var$Is.string(change.kind)) return $ec98f3fa42daea97$var$CreateFile.is(change) || $ec98f3fa42daea97$var$RenameFile.is(change) || $ec98f3fa42daea97$var$DeleteFile.is(change);
            else return $ec98f3fa42daea97$var$TextDocumentEdit.is(change);
        }));
    }
    WorkspaceEdit2.is = is;
})($ec98f3fa42daea97$var$WorkspaceEdit || ($ec98f3fa42daea97$var$WorkspaceEdit = {}));
var $ec98f3fa42daea97$var$TextEditChangeImpl = function() {
    function TextEditChangeImpl2(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $ec98f3fa42daea97$var$TextEdit.insert(position, newText);
        else if ($ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $ec98f3fa42daea97$var$AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $ec98f3fa42daea97$var$AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $ec98f3fa42daea97$var$TextEdit.replace(range, newText);
        else if ($ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $ec98f3fa42daea97$var$AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $ec98f3fa42daea97$var$AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.delete = function(range, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $ec98f3fa42daea97$var$TextEdit.del(range);
        else if ($ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $ec98f3fa42daea97$var$AnnotatedTextEdit.del(range, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $ec98f3fa42daea97$var$AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.add = function(edit) {
        this.edits.push(edit);
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
var $ec98f3fa42daea97$var$ChangeAnnotations = function() {
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
        if ($ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(idOrAnnotation)) id = idOrAnnotation;
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
var $ec98f3fa42daea97$var$WorkspaceChange = function() {
    function WorkspaceChange2(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== void 0) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new $ec98f3fa42daea97$var$ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                    if ($ec98f3fa42daea97$var$TextDocumentEdit.is(change)) {
                        var textEditChange = new $ec98f3fa42daea97$var$TextEditChangeImpl(change.edits, _this._changeAnnotations);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            } else if (workspaceEdit.changes) Object.keys(workspaceEdit.changes).forEach(function(key) {
                var textEditChange = new $ec98f3fa42daea97$var$TextEditChangeImpl(workspaceEdit.changes[key]);
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
        if ($ec98f3fa42daea97$var$OptionalVersionedTextDocumentIdentifier.is(key)) {
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
                result = new $ec98f3fa42daea97$var$TextEditChangeImpl(edits, this._changeAnnotations);
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
                result = new $ec98f3fa42daea97$var$TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange2.prototype.initDocumentChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
            this._changeAnnotations = new $ec98f3fa42daea97$var$ChangeAnnotations();
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
        if ($ec98f3fa42daea97$var$ChangeAnnotation.is(optionsOrAnnotation) || $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $ec98f3fa42daea97$var$CreateFile.create(uri, options);
        else {
            id = $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $ec98f3fa42daea97$var$CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($ec98f3fa42daea97$var$ChangeAnnotation.is(optionsOrAnnotation) || $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $ec98f3fa42daea97$var$RenameFile.create(oldUri, newUri, options);
        else {
            id = $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $ec98f3fa42daea97$var$RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($ec98f3fa42daea97$var$ChangeAnnotation.is(optionsOrAnnotation) || $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $ec98f3fa42daea97$var$DeleteFile.create(uri, options);
        else {
            id = $ec98f3fa42daea97$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $ec98f3fa42daea97$var$DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    return WorkspaceChange2;
}();
var $ec98f3fa42daea97$var$TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
    function create(uri) {
        return {
            uri: uri
        };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
})($ec98f3fa42daea97$var$TextDocumentIdentifier || ($ec98f3fa42daea97$var$TextDocumentIdentifier = {}));
var $ec98f3fa42daea97$var$VersionedTextDocumentIdentifier;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.uri) && $ec98f3fa42daea97$var$Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
})($ec98f3fa42daea97$var$VersionedTextDocumentIdentifier || ($ec98f3fa42daea97$var$VersionedTextDocumentIdentifier = {}));
var $ec98f3fa42daea97$var$OptionalVersionedTextDocumentIdentifier;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.uri) && (candidate.version === null || $ec98f3fa42daea97$var$Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
})($ec98f3fa42daea97$var$OptionalVersionedTextDocumentIdentifier || ($ec98f3fa42daea97$var$OptionalVersionedTextDocumentIdentifier = {}));
var $ec98f3fa42daea97$var$TextDocumentItem;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.uri) && $ec98f3fa42daea97$var$Is.string(candidate.languageId) && $ec98f3fa42daea97$var$Is.integer(candidate.version) && $ec98f3fa42daea97$var$Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
})($ec98f3fa42daea97$var$TextDocumentItem || ($ec98f3fa42daea97$var$TextDocumentItem = {}));
var $ec98f3fa42daea97$var$MarkupKind;
(function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
})($ec98f3fa42daea97$var$MarkupKind || ($ec98f3fa42daea97$var$MarkupKind = {}));
(function(MarkupKind2) {
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
})($ec98f3fa42daea97$var$MarkupKind || ($ec98f3fa42daea97$var$MarkupKind = {}));
var $ec98f3fa42daea97$var$MarkupContent;
(function(MarkupContent2) {
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.objectLiteral(value) && $ec98f3fa42daea97$var$MarkupKind.is(candidate.kind) && $ec98f3fa42daea97$var$Is.string(candidate.value);
    }
    MarkupContent2.is = is;
})($ec98f3fa42daea97$var$MarkupContent || ($ec98f3fa42daea97$var$MarkupContent = {}));
var $ec98f3fa42daea97$var$CompletionItemKind;
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
})($ec98f3fa42daea97$var$CompletionItemKind || ($ec98f3fa42daea97$var$CompletionItemKind = {}));
var $ec98f3fa42daea97$var$InsertTextFormat;
(function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
})($ec98f3fa42daea97$var$InsertTextFormat || ($ec98f3fa42daea97$var$InsertTextFormat = {}));
var $ec98f3fa42daea97$var$CompletionItemTag;
(function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
})($ec98f3fa42daea97$var$CompletionItemTag || ($ec98f3fa42daea97$var$CompletionItemTag = {}));
var $ec98f3fa42daea97$var$InsertReplaceEdit;
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
        return candidate && $ec98f3fa42daea97$var$Is.string(candidate.newText) && $ec98f3fa42daea97$var$Range.is(candidate.insert) && $ec98f3fa42daea97$var$Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
})($ec98f3fa42daea97$var$InsertReplaceEdit || ($ec98f3fa42daea97$var$InsertReplaceEdit = {}));
var $ec98f3fa42daea97$var$InsertTextMode;
(function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
})($ec98f3fa42daea97$var$InsertTextMode || ($ec98f3fa42daea97$var$InsertTextMode = {}));
var $ec98f3fa42daea97$var$CompletionItem;
(function(CompletionItem2) {
    function create(label) {
        return {
            label: label
        };
    }
    CompletionItem2.create = create;
})($ec98f3fa42daea97$var$CompletionItem || ($ec98f3fa42daea97$var$CompletionItem = {}));
var $ec98f3fa42daea97$var$CompletionList;
(function(CompletionList2) {
    function create(items, isIncomplete) {
        return {
            items: items ? items : [],
            isIncomplete: !!isIncomplete
        };
    }
    CompletionList2.create = create;
})($ec98f3fa42daea97$var$CompletionList || ($ec98f3fa42daea97$var$CompletionList = {}));
var $ec98f3fa42daea97$var$MarkedString;
(function(MarkedString2) {
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.string(candidate) || $ec98f3fa42daea97$var$Is.objectLiteral(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.language) && $ec98f3fa42daea97$var$Is.string(candidate.value);
    }
    MarkedString2.is = is;
})($ec98f3fa42daea97$var$MarkedString || ($ec98f3fa42daea97$var$MarkedString = {}));
var $ec98f3fa42daea97$var$Hover;
(function(Hover2) {
    function is(value) {
        var candidate = value;
        return !!candidate && $ec98f3fa42daea97$var$Is.objectLiteral(candidate) && ($ec98f3fa42daea97$var$MarkupContent.is(candidate.contents) || $ec98f3fa42daea97$var$MarkedString.is(candidate.contents) || $ec98f3fa42daea97$var$Is.typedArray(candidate.contents, $ec98f3fa42daea97$var$MarkedString.is)) && (value.range === void 0 || $ec98f3fa42daea97$var$Range.is(value.range));
    }
    Hover2.is = is;
})($ec98f3fa42daea97$var$Hover || ($ec98f3fa42daea97$var$Hover = {}));
var $ec98f3fa42daea97$var$ParameterInformation;
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
})($ec98f3fa42daea97$var$ParameterInformation || ($ec98f3fa42daea97$var$ParameterInformation = {}));
var $ec98f3fa42daea97$var$SignatureInformation;
(function(SignatureInformation2) {
    function create(label, documentation) {
        var parameters = [];
        for(var _i = 2; _i < arguments.length; _i++)parameters[_i - 2] = arguments[_i];
        var result = {
            label: label
        };
        if ($ec98f3fa42daea97$var$Is.defined(documentation)) result.documentation = documentation;
        if ($ec98f3fa42daea97$var$Is.defined(parameters)) result.parameters = parameters;
        else result.parameters = [];
        return result;
    }
    SignatureInformation2.create = create;
})($ec98f3fa42daea97$var$SignatureInformation || ($ec98f3fa42daea97$var$SignatureInformation = {}));
var $ec98f3fa42daea97$var$DocumentHighlightKind;
(function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
})($ec98f3fa42daea97$var$DocumentHighlightKind || ($ec98f3fa42daea97$var$DocumentHighlightKind = {}));
var $ec98f3fa42daea97$var$DocumentHighlight;
(function(DocumentHighlight2) {
    function create(range, kind) {
        var result = {
            range: range
        };
        if ($ec98f3fa42daea97$var$Is.number(kind)) result.kind = kind;
        return result;
    }
    DocumentHighlight2.create = create;
})($ec98f3fa42daea97$var$DocumentHighlight || ($ec98f3fa42daea97$var$DocumentHighlight = {}));
var $ec98f3fa42daea97$var$SymbolKind;
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
})($ec98f3fa42daea97$var$SymbolKind || ($ec98f3fa42daea97$var$SymbolKind = {}));
var $ec98f3fa42daea97$var$SymbolTag;
(function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
})($ec98f3fa42daea97$var$SymbolTag || ($ec98f3fa42daea97$var$SymbolTag = {}));
var $ec98f3fa42daea97$var$SymbolInformation;
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
})($ec98f3fa42daea97$var$SymbolInformation || ($ec98f3fa42daea97$var$SymbolInformation = {}));
var $ec98f3fa42daea97$var$DocumentSymbol;
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
        return candidate && $ec98f3fa42daea97$var$Is.string(candidate.name) && $ec98f3fa42daea97$var$Is.number(candidate.kind) && $ec98f3fa42daea97$var$Range.is(candidate.range) && $ec98f3fa42daea97$var$Range.is(candidate.selectionRange) && (candidate.detail === void 0 || $ec98f3fa42daea97$var$Is.string(candidate.detail)) && (candidate.deprecated === void 0 || $ec98f3fa42daea97$var$Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
})($ec98f3fa42daea97$var$DocumentSymbol || ($ec98f3fa42daea97$var$DocumentSymbol = {}));
var $ec98f3fa42daea97$var$CodeActionKind;
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
})($ec98f3fa42daea97$var$CodeActionKind || ($ec98f3fa42daea97$var$CodeActionKind = {}));
var $ec98f3fa42daea97$var$CodeActionContext;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Is.typedArray(candidate.diagnostics, $ec98f3fa42daea97$var$Diagnostic.is) && (candidate.only === void 0 || $ec98f3fa42daea97$var$Is.typedArray(candidate.only, $ec98f3fa42daea97$var$Is.string));
    }
    CodeActionContext2.is = is;
})($ec98f3fa42daea97$var$CodeActionContext || ($ec98f3fa42daea97$var$CodeActionContext = {}));
var $ec98f3fa42daea97$var$CodeAction;
(function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
        var result = {
            title: title
        };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        } else if ($ec98f3fa42daea97$var$Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
        else result.edit = kindOrCommandOrEdit;
        if (checkKind && kind !== void 0) result.kind = kind;
        return result;
    }
    CodeAction2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $ec98f3fa42daea97$var$Is.string(candidate.title) && (candidate.diagnostics === void 0 || $ec98f3fa42daea97$var$Is.typedArray(candidate.diagnostics, $ec98f3fa42daea97$var$Diagnostic.is)) && (candidate.kind === void 0 || $ec98f3fa42daea97$var$Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || $ec98f3fa42daea97$var$Command.is(candidate.command)) && (candidate.isPreferred === void 0 || $ec98f3fa42daea97$var$Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || $ec98f3fa42daea97$var$WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
})($ec98f3fa42daea97$var$CodeAction || ($ec98f3fa42daea97$var$CodeAction = {}));
var $ec98f3fa42daea97$var$CodeLens;
(function(CodeLens2) {
    function create(range, data) {
        var result = {
            range: range
        };
        if ($ec98f3fa42daea97$var$Is.defined(data)) result.data = data;
        return result;
    }
    CodeLens2.create = create;
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Range.is(candidate.range) && ($ec98f3fa42daea97$var$Is.undefined(candidate.command) || $ec98f3fa42daea97$var$Command.is(candidate.command));
    }
    CodeLens2.is = is;
})($ec98f3fa42daea97$var$CodeLens || ($ec98f3fa42daea97$var$CodeLens = {}));
var $ec98f3fa42daea97$var$FormattingOptions;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Is.uinteger(candidate.tabSize) && $ec98f3fa42daea97$var$Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
})($ec98f3fa42daea97$var$FormattingOptions || ($ec98f3fa42daea97$var$FormattingOptions = {}));
var $ec98f3fa42daea97$var$DocumentLink;
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
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Range.is(candidate.range) && ($ec98f3fa42daea97$var$Is.undefined(candidate.target) || $ec98f3fa42daea97$var$Is.string(candidate.target));
    }
    DocumentLink2.is = is;
})($ec98f3fa42daea97$var$DocumentLink || ($ec98f3fa42daea97$var$DocumentLink = {}));
var $ec98f3fa42daea97$var$SelectionRange;
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
        return candidate !== void 0 && $ec98f3fa42daea97$var$Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
})($ec98f3fa42daea97$var$SelectionRange || ($ec98f3fa42daea97$var$SelectionRange = {}));
var $ec98f3fa42daea97$var$TextDocument;
(function(TextDocument2) {
    function create(uri, languageId, version, content) {
        return new $ec98f3fa42daea97$var$FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
        var candidate = value;
        return $ec98f3fa42daea97$var$Is.defined(candidate) && $ec98f3fa42daea97$var$Is.string(candidate.uri) && ($ec98f3fa42daea97$var$Is.undefined(candidate.languageId) || $ec98f3fa42daea97$var$Is.string(candidate.languageId)) && $ec98f3fa42daea97$var$Is.uinteger(candidate.lineCount) && $ec98f3fa42daea97$var$Is.func(candidate.getText) && $ec98f3fa42daea97$var$Is.func(candidate.positionAt) && $ec98f3fa42daea97$var$Is.func(candidate.offsetAt) ? true : false;
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
})($ec98f3fa42daea97$var$TextDocument || ($ec98f3fa42daea97$var$TextDocument = {}));
var $ec98f3fa42daea97$var$FullTextDocument = function() {
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
        if (high === 0) return $ec98f3fa42daea97$var$Position.create(0, offset);
        while(low < high){
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) high = mid;
            else low = mid + 1;
        }
        var line = low - 1;
        return $ec98f3fa42daea97$var$Position.create(line, offset - lineOffsets[line]);
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
var $ec98f3fa42daea97$var$Is;
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
})($ec98f3fa42daea97$var$Is || ($ec98f3fa42daea97$var$Is = {}));
// src/common/lspLanguageFeatures.ts
var $ec98f3fa42daea97$var$CompletionAdapter = class {
    get triggerCharacters() {
        return this._triggerCharacters;
    }
    provideCompletionItems(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doComplete(resource.toString(), $ec98f3fa42daea97$var$fromPosition(position));
        }).then((info)=>{
            if (!info) return;
            const wordInfo = model.getWordUntilPosition(position);
            const wordRange = new $ec98f3fa42daea97$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            const items = info.items.map((entry)=>{
                const item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    command: $ec98f3fa42daea97$var$toCommand(entry.command),
                    range: wordRange,
                    kind: $ec98f3fa42daea97$var$toCompletionItemKind(entry.kind)
                };
                if (entry.textEdit) {
                    if ($ec98f3fa42daea97$var$isInsertReplaceEdit(entry.textEdit)) item.range = {
                        insert: $ec98f3fa42daea97$var$toRange(entry.textEdit.insert),
                        replace: $ec98f3fa42daea97$var$toRange(entry.textEdit.replace)
                    };
                    else item.range = $ec98f3fa42daea97$var$toRange(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) item.additionalTextEdits = entry.additionalTextEdits.map($ec98f3fa42daea97$var$toTextEdit);
                if (entry.insertTextFormat === $ec98f3fa42daea97$var$InsertTextFormat.Snippet) item.insertTextRules = $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.CompletionItemInsertTextRule.InsertAsSnippet;
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
function $ec98f3fa42daea97$var$fromPosition(position) {
    if (!position) return void 0;
    return {
        character: position.column - 1,
        line: position.lineNumber - 1
    };
}
function $ec98f3fa42daea97$var$fromRange(range) {
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
function $ec98f3fa42daea97$var$toRange(range) {
    if (!range) return void 0;
    return new $ec98f3fa42daea97$var$monaco_editor_core_exports.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function $ec98f3fa42daea97$var$isInsertReplaceEdit(edit) {
    return typeof edit.insert !== "undefined" && typeof edit.replace !== "undefined";
}
function $ec98f3fa42daea97$var$toCompletionItemKind(kind) {
    const mItemKind = $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.CompletionItemKind;
    switch(kind){
        case $ec98f3fa42daea97$var$CompletionItemKind.Text:
            return mItemKind.Text;
        case $ec98f3fa42daea97$var$CompletionItemKind.Method:
            return mItemKind.Method;
        case $ec98f3fa42daea97$var$CompletionItemKind.Function:
            return mItemKind.Function;
        case $ec98f3fa42daea97$var$CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case $ec98f3fa42daea97$var$CompletionItemKind.Field:
            return mItemKind.Field;
        case $ec98f3fa42daea97$var$CompletionItemKind.Variable:
            return mItemKind.Variable;
        case $ec98f3fa42daea97$var$CompletionItemKind.Class:
            return mItemKind.Class;
        case $ec98f3fa42daea97$var$CompletionItemKind.Interface:
            return mItemKind.Interface;
        case $ec98f3fa42daea97$var$CompletionItemKind.Module:
            return mItemKind.Module;
        case $ec98f3fa42daea97$var$CompletionItemKind.Property:
            return mItemKind.Property;
        case $ec98f3fa42daea97$var$CompletionItemKind.Unit:
            return mItemKind.Unit;
        case $ec98f3fa42daea97$var$CompletionItemKind.Value:
            return mItemKind.Value;
        case $ec98f3fa42daea97$var$CompletionItemKind.Enum:
            return mItemKind.Enum;
        case $ec98f3fa42daea97$var$CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case $ec98f3fa42daea97$var$CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case $ec98f3fa42daea97$var$CompletionItemKind.Color:
            return mItemKind.Color;
        case $ec98f3fa42daea97$var$CompletionItemKind.File:
            return mItemKind.File;
        case $ec98f3fa42daea97$var$CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function $ec98f3fa42daea97$var$toTextEdit(textEdit) {
    if (!textEdit) return void 0;
    return {
        range: $ec98f3fa42daea97$var$toRange(textEdit.range),
        text: textEdit.newText
    };
}
function $ec98f3fa42daea97$var$toCommand(c) {
    return c && c.command === "editor.action.triggerSuggest" ? {
        id: c.command,
        title: c.title,
        arguments: c.arguments
    } : void 0;
}
var $ec98f3fa42daea97$var$HoverAdapter = class {
    provideHover(model, position, token) {
        let resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doHover(resource.toString(), $ec98f3fa42daea97$var$fromPosition(position));
        }).then((info)=>{
            if (!info) return;
            return {
                range: $ec98f3fa42daea97$var$toRange(info.range),
                contents: $ec98f3fa42daea97$var$toMarkedStringArray(info.contents)
            };
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $ec98f3fa42daea97$var$isMarkupContent(thing) {
    return thing && typeof thing === "object" && typeof thing.kind === "string";
}
function $ec98f3fa42daea97$var$toMarkdownString(entry) {
    if (typeof entry === "string") return {
        value: entry
    };
    if ($ec98f3fa42daea97$var$isMarkupContent(entry)) {
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
function $ec98f3fa42daea97$var$toMarkedStringArray(contents) {
    if (!contents) return void 0;
    if (Array.isArray(contents)) return contents.map($ec98f3fa42daea97$var$toMarkdownString);
    return [
        $ec98f3fa42daea97$var$toMarkdownString(contents)
    ];
}
var $ec98f3fa42daea97$var$DocumentHighlightAdapter = class {
    provideDocumentHighlights(model, position, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentHighlights(resource.toString(), $ec98f3fa42daea97$var$fromPosition(position))).then((entries)=>{
            if (!entries) return;
            return entries.map((entry)=>{
                return {
                    range: $ec98f3fa42daea97$var$toRange(entry.range),
                    kind: $ec98f3fa42daea97$var$toDocumentHighlightKind(entry.kind)
                };
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $ec98f3fa42daea97$var$toDocumentHighlightKind(kind) {
    switch(kind){
        case $ec98f3fa42daea97$var$DocumentHighlightKind.Read:
            return $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Read;
        case $ec98f3fa42daea97$var$DocumentHighlightKind.Write:
            return $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write;
        case $ec98f3fa42daea97$var$DocumentHighlightKind.Text:
            return $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
    }
    return $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
}
var $ec98f3fa42daea97$var$RenameAdapter = class {
    provideRenameEdits(model, position, newName, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doRename(resource.toString(), $ec98f3fa42daea97$var$fromPosition(position), newName);
        }).then((edit)=>{
            return $ec98f3fa42daea97$var$toWorkspaceEdit(edit);
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $ec98f3fa42daea97$var$toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) return void 0;
    let resourceEdits = [];
    for(let uri in edit.changes){
        const _uri = $ec98f3fa42daea97$var$monaco_editor_core_exports.Uri.parse(uri);
        for (let e of edit.changes[uri])resourceEdits.push({
            resource: _uri,
            edit: {
                range: $ec98f3fa42daea97$var$toRange(e.range),
                text: e.newText
            }
        });
    }
    return {
        edits: resourceEdits
    };
}
var $ec98f3fa42daea97$var$DocumentSymbolAdapter = class {
    provideDocumentSymbols(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentSymbols(resource.toString())).then((items)=>{
            if (!items) return;
            return items.map((item)=>({
                    name: item.name,
                    detail: "",
                    containerName: item.containerName,
                    kind: $ec98f3fa42daea97$var$toSymbolKind(item.kind),
                    range: $ec98f3fa42daea97$var$toRange(item.location.range),
                    selectionRange: $ec98f3fa42daea97$var$toRange(item.location.range),
                    tags: []
                }));
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $ec98f3fa42daea97$var$toSymbolKind(kind) {
    let mKind = $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.SymbolKind;
    switch(kind){
        case $ec98f3fa42daea97$var$SymbolKind.File:
            return mKind.Array;
        case $ec98f3fa42daea97$var$SymbolKind.Module:
            return mKind.Module;
        case $ec98f3fa42daea97$var$SymbolKind.Namespace:
            return mKind.Namespace;
        case $ec98f3fa42daea97$var$SymbolKind.Package:
            return mKind.Package;
        case $ec98f3fa42daea97$var$SymbolKind.Class:
            return mKind.Class;
        case $ec98f3fa42daea97$var$SymbolKind.Method:
            return mKind.Method;
        case $ec98f3fa42daea97$var$SymbolKind.Property:
            return mKind.Property;
        case $ec98f3fa42daea97$var$SymbolKind.Field:
            return mKind.Field;
        case $ec98f3fa42daea97$var$SymbolKind.Constructor:
            return mKind.Constructor;
        case $ec98f3fa42daea97$var$SymbolKind.Enum:
            return mKind.Enum;
        case $ec98f3fa42daea97$var$SymbolKind.Interface:
            return mKind.Interface;
        case $ec98f3fa42daea97$var$SymbolKind.Function:
            return mKind.Function;
        case $ec98f3fa42daea97$var$SymbolKind.Variable:
            return mKind.Variable;
        case $ec98f3fa42daea97$var$SymbolKind.Constant:
            return mKind.Constant;
        case $ec98f3fa42daea97$var$SymbolKind.String:
            return mKind.String;
        case $ec98f3fa42daea97$var$SymbolKind.Number:
            return mKind.Number;
        case $ec98f3fa42daea97$var$SymbolKind.Boolean:
            return mKind.Boolean;
        case $ec98f3fa42daea97$var$SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var $ec98f3fa42daea97$var$DocumentLinkAdapter = class {
    provideLinks(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentLinks(resource.toString())).then((items)=>{
            if (!items) return;
            return {
                links: items.map((item)=>({
                        range: $ec98f3fa42daea97$var$toRange(item.range),
                        url: item.target
                    }))
            };
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $ec98f3fa42daea97$var$DocumentFormattingEditProvider = class {
    provideDocumentFormattingEdits(model, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.format(resource.toString(), null, $ec98f3fa42daea97$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($ec98f3fa42daea97$var$toTextEdit);
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $ec98f3fa42daea97$var$DocumentRangeFormattingEditProvider = class {
    provideDocumentRangeFormattingEdits(model, range, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.format(resource.toString(), $ec98f3fa42daea97$var$fromRange(range), $ec98f3fa42daea97$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($ec98f3fa42daea97$var$toTextEdit);
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $ec98f3fa42daea97$var$fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var $ec98f3fa42daea97$var$FoldingRangeAdapter = class {
    provideFoldingRanges(model, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getFoldingRanges(resource.toString(), context)).then((ranges)=>{
            if (!ranges) return;
            return ranges.map((range)=>{
                const result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== "undefined") result.kind = $ec98f3fa42daea97$var$toFoldingRangeKind(range.kind);
                return result;
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $ec98f3fa42daea97$var$toFoldingRangeKind(kind) {
    switch(kind){
        case $ec98f3fa42daea97$var$FoldingRangeKind.Comment:
            return $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.FoldingRangeKind.Comment;
        case $ec98f3fa42daea97$var$FoldingRangeKind.Imports:
            return $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.FoldingRangeKind.Imports;
        case $ec98f3fa42daea97$var$FoldingRangeKind.Region:
            return $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.FoldingRangeKind.Region;
    }
    return void 0;
}
var $ec98f3fa42daea97$var$SelectionRangeAdapter = class {
    provideSelectionRanges(model, positions, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getSelectionRanges(resource.toString(), positions.map($ec98f3fa42daea97$var$fromPosition))).then((selectionRanges)=>{
            if (!selectionRanges) return;
            return selectionRanges.map((selectionRange)=>{
                const result = [];
                while(selectionRange){
                    result.push({
                        range: $ec98f3fa42daea97$var$toRange(selectionRange.range)
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
// src/html/htmlMode.ts
var $ec98f3fa42daea97$var$HTMLCompletionAdapter = class extends $ec98f3fa42daea97$var$CompletionAdapter {
    constructor(worker){
        super(worker, [
            ".",
            ":",
            "<",
            '"',
            "=",
            "/"
        ]);
    }
};
function $ec98f3fa42daea97$export$972c61cff7b1bac7(defaults) {
    const client = new $ec98f3fa42daea97$var$WorkerManager(defaults);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    let languageId = defaults.languageId;
    $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $ec98f3fa42daea97$var$HTMLCompletionAdapter(worker));
    $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $ec98f3fa42daea97$var$HoverAdapter(worker));
    $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $ec98f3fa42daea97$var$DocumentHighlightAdapter(worker));
    $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $ec98f3fa42daea97$var$DocumentLinkAdapter(worker));
    $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $ec98f3fa42daea97$var$FoldingRangeAdapter(worker));
    $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $ec98f3fa42daea97$var$DocumentSymbolAdapter(worker));
    $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $ec98f3fa42daea97$var$SelectionRangeAdapter(worker));
    $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $ec98f3fa42daea97$var$RenameAdapter(worker));
    if (languageId === "html") {
        $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $ec98f3fa42daea97$var$DocumentFormattingEditProvider(worker));
        $ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $ec98f3fa42daea97$var$DocumentRangeFormattingEditProvider(worker));
    }
}
function $ec98f3fa42daea97$export$6df00d141df42469(defaults) {
    const disposables = [];
    const providers = [];
    const client = new $ec98f3fa42daea97$var$WorkerManager(defaults);
    disposables.push(client);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    function registerProviders() {
        const { languageId: languageId , modeConfiguration: modeConfiguration  } = defaults;
        $ec98f3fa42daea97$var$disposeAll(providers);
        if (modeConfiguration.completionItems) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $ec98f3fa42daea97$var$HTMLCompletionAdapter(worker)));
        if (modeConfiguration.hovers) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $ec98f3fa42daea97$var$HoverAdapter(worker)));
        if (modeConfiguration.documentHighlights) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $ec98f3fa42daea97$var$DocumentHighlightAdapter(worker)));
        if (modeConfiguration.links) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $ec98f3fa42daea97$var$DocumentLinkAdapter(worker)));
        if (modeConfiguration.documentSymbols) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $ec98f3fa42daea97$var$DocumentSymbolAdapter(worker)));
        if (modeConfiguration.rename) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $ec98f3fa42daea97$var$RenameAdapter(worker)));
        if (modeConfiguration.foldingRanges) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $ec98f3fa42daea97$var$FoldingRangeAdapter(worker)));
        if (modeConfiguration.selectionRanges) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $ec98f3fa42daea97$var$SelectionRangeAdapter(worker)));
        if (modeConfiguration.documentFormattingEdits) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $ec98f3fa42daea97$var$DocumentFormattingEditProvider(worker)));
        if (modeConfiguration.documentRangeFormattingEdits) providers.push($ec98f3fa42daea97$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $ec98f3fa42daea97$var$DocumentRangeFormattingEditProvider(worker)));
    }
    registerProviders();
    disposables.push($ec98f3fa42daea97$var$asDisposable(providers));
    return $ec98f3fa42daea97$var$asDisposable(disposables);
}
function $ec98f3fa42daea97$var$asDisposable(disposables) {
    return {
        dispose: ()=>$ec98f3fa42daea97$var$disposeAll(disposables)
    };
}
function $ec98f3fa42daea97$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}

});

})();