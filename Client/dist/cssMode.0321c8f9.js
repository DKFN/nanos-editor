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
parcelRequire.register("aWdDD", function(module, exports) {

$parcel$export(module.exports, "setupMode", function () { return $7f69e6739acc1e13$export$6df00d141df42469; });

var $jBoEN = parcelRequire("jBoEN");
// node_modules/vscode-languageserver-types/lib/esm/main.js
"use strict";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $7f69e6739acc1e13$var$__defProp = Object.defineProperty;
var $7f69e6739acc1e13$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $7f69e6739acc1e13$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $7f69e6739acc1e13$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $7f69e6739acc1e13$var$__markAsModule = (target)=>$7f69e6739acc1e13$var$__defProp(target, "__esModule", {
        value: true
    });
var $7f69e6739acc1e13$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $7f69e6739acc1e13$var$__getOwnPropNames(module))if (!$7f69e6739acc1e13$var$__hasOwnProp.call(target, key) && key !== "default") $7f69e6739acc1e13$var$__defProp(target, key, {
            get: ()=>module[key],
            enumerable: !(desc = $7f69e6739acc1e13$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $7f69e6739acc1e13$var$monaco_editor_core_exports = {};
$7f69e6739acc1e13$var$__markAsModule($7f69e6739acc1e13$var$monaco_editor_core_exports);
$7f69e6739acc1e13$var$__reExport($7f69e6739acc1e13$var$monaco_editor_core_exports, $jBoEN);
// src/css/workerManager.ts
var $7f69e6739acc1e13$var$STOP_WHEN_IDLE_FOR = 120000;
var $7f69e6739acc1e13$var$WorkerManager = class {
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
        if (timePassedSinceLastUsed > $7f69e6739acc1e13$var$STOP_WHEN_IDLE_FOR) this._stopWorker();
    }
    _getClient() {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = $7f69e6739acc1e13$var$monaco_editor_core_exports.editor.createWebWorker({
                moduleId: "vs/language/css/cssWorker",
                label: this._defaults.languageId,
                createData: {
                    options: this._defaults.options,
                    languageId: this._defaults.languageId
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
var $7f69e6739acc1e13$var$integer;
(function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
})($7f69e6739acc1e13$var$integer || ($7f69e6739acc1e13$var$integer = {}));
var $7f69e6739acc1e13$var$uinteger;
(function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
})($7f69e6739acc1e13$var$uinteger || ($7f69e6739acc1e13$var$uinteger = {}));
var $7f69e6739acc1e13$var$Position;
(function(Position3) {
    function create(line, character) {
        if (line === Number.MAX_VALUE) line = $7f69e6739acc1e13$var$uinteger.MAX_VALUE;
        if (character === Number.MAX_VALUE) character = $7f69e6739acc1e13$var$uinteger.MAX_VALUE;
        return {
            line: line,
            character: character
        };
    }
    Position3.create = create;
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.objectLiteral(candidate) && $7f69e6739acc1e13$var$Is.uinteger(candidate.line) && $7f69e6739acc1e13$var$Is.uinteger(candidate.character);
    }
    Position3.is = is;
})($7f69e6739acc1e13$var$Position || ($7f69e6739acc1e13$var$Position = {}));
var $7f69e6739acc1e13$var$Range;
(function(Range3) {
    function create(one, two, three, four) {
        if ($7f69e6739acc1e13$var$Is.uinteger(one) && $7f69e6739acc1e13$var$Is.uinteger(two) && $7f69e6739acc1e13$var$Is.uinteger(three) && $7f69e6739acc1e13$var$Is.uinteger(four)) return {
            start: $7f69e6739acc1e13$var$Position.create(one, two),
            end: $7f69e6739acc1e13$var$Position.create(three, four)
        };
        else if ($7f69e6739acc1e13$var$Position.is(one) && $7f69e6739acc1e13$var$Position.is(two)) return {
            start: one,
            end: two
        };
        else throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
    }
    Range3.create = create;
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.objectLiteral(candidate) && $7f69e6739acc1e13$var$Position.is(candidate.start) && $7f69e6739acc1e13$var$Position.is(candidate.end);
    }
    Range3.is = is;
})($7f69e6739acc1e13$var$Range || ($7f69e6739acc1e13$var$Range = {}));
var $7f69e6739acc1e13$var$Location;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Range.is(candidate.range) && ($7f69e6739acc1e13$var$Is.string(candidate.uri) || $7f69e6739acc1e13$var$Is.undefined(candidate.uri));
    }
    Location2.is = is;
})($7f69e6739acc1e13$var$Location || ($7f69e6739acc1e13$var$Location = {}));
var $7f69e6739acc1e13$var$LocationLink;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Range.is(candidate.targetRange) && $7f69e6739acc1e13$var$Is.string(candidate.targetUri) && ($7f69e6739acc1e13$var$Range.is(candidate.targetSelectionRange) || $7f69e6739acc1e13$var$Is.undefined(candidate.targetSelectionRange)) && ($7f69e6739acc1e13$var$Range.is(candidate.originSelectionRange) || $7f69e6739acc1e13$var$Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
})($7f69e6739acc1e13$var$LocationLink || ($7f69e6739acc1e13$var$LocationLink = {}));
var $7f69e6739acc1e13$var$Color;
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
        return $7f69e6739acc1e13$var$Is.numberRange(candidate.red, 0, 1) && $7f69e6739acc1e13$var$Is.numberRange(candidate.green, 0, 1) && $7f69e6739acc1e13$var$Is.numberRange(candidate.blue, 0, 1) && $7f69e6739acc1e13$var$Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
})($7f69e6739acc1e13$var$Color || ($7f69e6739acc1e13$var$Color = {}));
var $7f69e6739acc1e13$var$ColorInformation;
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
        return $7f69e6739acc1e13$var$Range.is(candidate.range) && $7f69e6739acc1e13$var$Color.is(candidate.color);
    }
    ColorInformation2.is = is;
})($7f69e6739acc1e13$var$ColorInformation || ($7f69e6739acc1e13$var$ColorInformation = {}));
var $7f69e6739acc1e13$var$ColorPresentation;
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
        return $7f69e6739acc1e13$var$Is.string(candidate.label) && ($7f69e6739acc1e13$var$Is.undefined(candidate.textEdit) || $7f69e6739acc1e13$var$TextEdit.is(candidate)) && ($7f69e6739acc1e13$var$Is.undefined(candidate.additionalTextEdits) || $7f69e6739acc1e13$var$Is.typedArray(candidate.additionalTextEdits, $7f69e6739acc1e13$var$TextEdit.is));
    }
    ColorPresentation2.is = is;
})($7f69e6739acc1e13$var$ColorPresentation || ($7f69e6739acc1e13$var$ColorPresentation = {}));
var $7f69e6739acc1e13$var$FoldingRangeKind;
(function(FoldingRangeKind2) {
    FoldingRangeKind2["Comment"] = "comment";
    FoldingRangeKind2["Imports"] = "imports";
    FoldingRangeKind2["Region"] = "region";
})($7f69e6739acc1e13$var$FoldingRangeKind || ($7f69e6739acc1e13$var$FoldingRangeKind = {}));
var $7f69e6739acc1e13$var$FoldingRange;
(function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if ($7f69e6739acc1e13$var$Is.defined(startCharacter)) result.startCharacter = startCharacter;
        if ($7f69e6739acc1e13$var$Is.defined(endCharacter)) result.endCharacter = endCharacter;
        if ($7f69e6739acc1e13$var$Is.defined(kind)) result.kind = kind;
        return result;
    }
    FoldingRange2.create = create;
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.uinteger(candidate.startLine) && $7f69e6739acc1e13$var$Is.uinteger(candidate.startLine) && ($7f69e6739acc1e13$var$Is.undefined(candidate.startCharacter) || $7f69e6739acc1e13$var$Is.uinteger(candidate.startCharacter)) && ($7f69e6739acc1e13$var$Is.undefined(candidate.endCharacter) || $7f69e6739acc1e13$var$Is.uinteger(candidate.endCharacter)) && ($7f69e6739acc1e13$var$Is.undefined(candidate.kind) || $7f69e6739acc1e13$var$Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
})($7f69e6739acc1e13$var$FoldingRange || ($7f69e6739acc1e13$var$FoldingRange = {}));
var $7f69e6739acc1e13$var$DiagnosticRelatedInformation;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Location.is(candidate.location) && $7f69e6739acc1e13$var$Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
})($7f69e6739acc1e13$var$DiagnosticRelatedInformation || ($7f69e6739acc1e13$var$DiagnosticRelatedInformation = {}));
var $7f69e6739acc1e13$var$DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
})($7f69e6739acc1e13$var$DiagnosticSeverity || ($7f69e6739acc1e13$var$DiagnosticSeverity = {}));
var $7f69e6739acc1e13$var$DiagnosticTag;
(function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
})($7f69e6739acc1e13$var$DiagnosticTag || ($7f69e6739acc1e13$var$DiagnosticTag = {}));
var $7f69e6739acc1e13$var$CodeDescription;
(function(CodeDescription2) {
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && $7f69e6739acc1e13$var$Is.string(candidate.href);
    }
    CodeDescription2.is = is;
})($7f69e6739acc1e13$var$CodeDescription || ($7f69e6739acc1e13$var$CodeDescription = {}));
var $7f69e6739acc1e13$var$Diagnostic;
(function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
        var result = {
            range: range,
            message: message
        };
        if ($7f69e6739acc1e13$var$Is.defined(severity)) result.severity = severity;
        if ($7f69e6739acc1e13$var$Is.defined(code)) result.code = code;
        if ($7f69e6739acc1e13$var$Is.defined(source)) result.source = source;
        if ($7f69e6739acc1e13$var$Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
        return result;
    }
    Diagnostic2.create = create;
    function is(value) {
        var _a;
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Range.is(candidate.range) && $7f69e6739acc1e13$var$Is.string(candidate.message) && ($7f69e6739acc1e13$var$Is.number(candidate.severity) || $7f69e6739acc1e13$var$Is.undefined(candidate.severity)) && ($7f69e6739acc1e13$var$Is.integer(candidate.code) || $7f69e6739acc1e13$var$Is.string(candidate.code) || $7f69e6739acc1e13$var$Is.undefined(candidate.code)) && ($7f69e6739acc1e13$var$Is.undefined(candidate.codeDescription) || $7f69e6739acc1e13$var$Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && ($7f69e6739acc1e13$var$Is.string(candidate.source) || $7f69e6739acc1e13$var$Is.undefined(candidate.source)) && ($7f69e6739acc1e13$var$Is.undefined(candidate.relatedInformation) || $7f69e6739acc1e13$var$Is.typedArray(candidate.relatedInformation, $7f69e6739acc1e13$var$DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
})($7f69e6739acc1e13$var$Diagnostic || ($7f69e6739acc1e13$var$Diagnostic = {}));
var $7f69e6739acc1e13$var$Command;
(function(Command2) {
    function create(title, command) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        var result = {
            title: title,
            command: command
        };
        if ($7f69e6739acc1e13$var$Is.defined(args) && args.length > 0) result.arguments = args;
        return result;
    }
    Command2.create = create;
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.title) && $7f69e6739acc1e13$var$Is.string(candidate.command);
    }
    Command2.is = is;
})($7f69e6739acc1e13$var$Command || ($7f69e6739acc1e13$var$Command = {}));
var $7f69e6739acc1e13$var$TextEdit;
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
        return $7f69e6739acc1e13$var$Is.objectLiteral(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.newText) && $7f69e6739acc1e13$var$Range.is(candidate.range);
    }
    TextEdit2.is = is;
})($7f69e6739acc1e13$var$TextEdit || ($7f69e6739acc1e13$var$TextEdit = {}));
var $7f69e6739acc1e13$var$ChangeAnnotation;
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
        return candidate !== void 0 && $7f69e6739acc1e13$var$Is.objectLiteral(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.label) && ($7f69e6739acc1e13$var$Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && ($7f69e6739acc1e13$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
})($7f69e6739acc1e13$var$ChangeAnnotation || ($7f69e6739acc1e13$var$ChangeAnnotation = {}));
var $7f69e6739acc1e13$var$ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
    function is(value) {
        var candidate = value;
        return typeof candidate === "string";
    }
    ChangeAnnotationIdentifier2.is = is;
})($7f69e6739acc1e13$var$ChangeAnnotationIdentifier || ($7f69e6739acc1e13$var$ChangeAnnotationIdentifier = {}));
var $7f69e6739acc1e13$var$AnnotatedTextEdit;
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
        return $7f69e6739acc1e13$var$TextEdit.is(candidate) && ($7f69e6739acc1e13$var$ChangeAnnotation.is(candidate.annotationId) || $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
})($7f69e6739acc1e13$var$AnnotatedTextEdit || ($7f69e6739acc1e13$var$AnnotatedTextEdit = {}));
var $7f69e6739acc1e13$var$TextDocumentEdit;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
})($7f69e6739acc1e13$var$TextDocumentEdit || ($7f69e6739acc1e13$var$TextDocumentEdit = {}));
var $7f69e6739acc1e13$var$CreateFile;
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
        return candidate && candidate.kind === "create" && $7f69e6739acc1e13$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $7f69e6739acc1e13$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $7f69e6739acc1e13$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
})($7f69e6739acc1e13$var$CreateFile || ($7f69e6739acc1e13$var$CreateFile = {}));
var $7f69e6739acc1e13$var$RenameFile;
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
        return candidate && candidate.kind === "rename" && $7f69e6739acc1e13$var$Is.string(candidate.oldUri) && $7f69e6739acc1e13$var$Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $7f69e6739acc1e13$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $7f69e6739acc1e13$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
})($7f69e6739acc1e13$var$RenameFile || ($7f69e6739acc1e13$var$RenameFile = {}));
var $7f69e6739acc1e13$var$DeleteFile;
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
        return candidate && candidate.kind === "delete" && $7f69e6739acc1e13$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || $7f69e6739acc1e13$var$Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || $7f69e6739acc1e13$var$Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
})($7f69e6739acc1e13$var$DeleteFile || ($7f69e6739acc1e13$var$DeleteFile = {}));
var $7f69e6739acc1e13$var$WorkspaceEdit;
(function(WorkspaceEdit2) {
    function is(value) {
        var candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if ($7f69e6739acc1e13$var$Is.string(change.kind)) return $7f69e6739acc1e13$var$CreateFile.is(change) || $7f69e6739acc1e13$var$RenameFile.is(change) || $7f69e6739acc1e13$var$DeleteFile.is(change);
            else return $7f69e6739acc1e13$var$TextDocumentEdit.is(change);
        }));
    }
    WorkspaceEdit2.is = is;
})($7f69e6739acc1e13$var$WorkspaceEdit || ($7f69e6739acc1e13$var$WorkspaceEdit = {}));
var $7f69e6739acc1e13$var$TextEditChangeImpl = function() {
    function TextEditChangeImpl2(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $7f69e6739acc1e13$var$TextEdit.insert(position, newText);
        else if ($7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $7f69e6739acc1e13$var$AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $7f69e6739acc1e13$var$AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $7f69e6739acc1e13$var$TextEdit.replace(range, newText);
        else if ($7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $7f69e6739acc1e13$var$AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $7f69e6739acc1e13$var$AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.delete = function(range, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $7f69e6739acc1e13$var$TextEdit.del(range);
        else if ($7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $7f69e6739acc1e13$var$AnnotatedTextEdit.del(range, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $7f69e6739acc1e13$var$AnnotatedTextEdit.del(range, id);
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
var $7f69e6739acc1e13$var$ChangeAnnotations = function() {
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
        if ($7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(idOrAnnotation)) id = idOrAnnotation;
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
var $7f69e6739acc1e13$var$WorkspaceChange = function() {
    function WorkspaceChange2(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== void 0) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new $7f69e6739acc1e13$var$ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                    if ($7f69e6739acc1e13$var$TextDocumentEdit.is(change)) {
                        var textEditChange = new $7f69e6739acc1e13$var$TextEditChangeImpl(change.edits, _this._changeAnnotations);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            } else if (workspaceEdit.changes) Object.keys(workspaceEdit.changes).forEach(function(key) {
                var textEditChange = new $7f69e6739acc1e13$var$TextEditChangeImpl(workspaceEdit.changes[key]);
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
        if ($7f69e6739acc1e13$var$OptionalVersionedTextDocumentIdentifier.is(key)) {
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
                result = new $7f69e6739acc1e13$var$TextEditChangeImpl(edits, this._changeAnnotations);
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
                result = new $7f69e6739acc1e13$var$TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange2.prototype.initDocumentChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
            this._changeAnnotations = new $7f69e6739acc1e13$var$ChangeAnnotations();
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
        if ($7f69e6739acc1e13$var$ChangeAnnotation.is(optionsOrAnnotation) || $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $7f69e6739acc1e13$var$CreateFile.create(uri, options);
        else {
            id = $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $7f69e6739acc1e13$var$CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($7f69e6739acc1e13$var$ChangeAnnotation.is(optionsOrAnnotation) || $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $7f69e6739acc1e13$var$RenameFile.create(oldUri, newUri, options);
        else {
            id = $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $7f69e6739acc1e13$var$RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($7f69e6739acc1e13$var$ChangeAnnotation.is(optionsOrAnnotation) || $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $7f69e6739acc1e13$var$DeleteFile.create(uri, options);
        else {
            id = $7f69e6739acc1e13$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $7f69e6739acc1e13$var$DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    return WorkspaceChange2;
}();
var $7f69e6739acc1e13$var$TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
    function create(uri) {
        return {
            uri: uri
        };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
})($7f69e6739acc1e13$var$TextDocumentIdentifier || ($7f69e6739acc1e13$var$TextDocumentIdentifier = {}));
var $7f69e6739acc1e13$var$VersionedTextDocumentIdentifier;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.uri) && $7f69e6739acc1e13$var$Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
})($7f69e6739acc1e13$var$VersionedTextDocumentIdentifier || ($7f69e6739acc1e13$var$VersionedTextDocumentIdentifier = {}));
var $7f69e6739acc1e13$var$OptionalVersionedTextDocumentIdentifier;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.uri) && (candidate.version === null || $7f69e6739acc1e13$var$Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
})($7f69e6739acc1e13$var$OptionalVersionedTextDocumentIdentifier || ($7f69e6739acc1e13$var$OptionalVersionedTextDocumentIdentifier = {}));
var $7f69e6739acc1e13$var$TextDocumentItem;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.uri) && $7f69e6739acc1e13$var$Is.string(candidate.languageId) && $7f69e6739acc1e13$var$Is.integer(candidate.version) && $7f69e6739acc1e13$var$Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
})($7f69e6739acc1e13$var$TextDocumentItem || ($7f69e6739acc1e13$var$TextDocumentItem = {}));
var $7f69e6739acc1e13$var$MarkupKind;
(function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
})($7f69e6739acc1e13$var$MarkupKind || ($7f69e6739acc1e13$var$MarkupKind = {}));
(function(MarkupKind2) {
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
})($7f69e6739acc1e13$var$MarkupKind || ($7f69e6739acc1e13$var$MarkupKind = {}));
var $7f69e6739acc1e13$var$MarkupContent;
(function(MarkupContent2) {
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.objectLiteral(value) && $7f69e6739acc1e13$var$MarkupKind.is(candidate.kind) && $7f69e6739acc1e13$var$Is.string(candidate.value);
    }
    MarkupContent2.is = is;
})($7f69e6739acc1e13$var$MarkupContent || ($7f69e6739acc1e13$var$MarkupContent = {}));
var $7f69e6739acc1e13$var$CompletionItemKind;
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
})($7f69e6739acc1e13$var$CompletionItemKind || ($7f69e6739acc1e13$var$CompletionItemKind = {}));
var $7f69e6739acc1e13$var$InsertTextFormat;
(function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
})($7f69e6739acc1e13$var$InsertTextFormat || ($7f69e6739acc1e13$var$InsertTextFormat = {}));
var $7f69e6739acc1e13$var$CompletionItemTag;
(function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
})($7f69e6739acc1e13$var$CompletionItemTag || ($7f69e6739acc1e13$var$CompletionItemTag = {}));
var $7f69e6739acc1e13$var$InsertReplaceEdit;
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
        return candidate && $7f69e6739acc1e13$var$Is.string(candidate.newText) && $7f69e6739acc1e13$var$Range.is(candidate.insert) && $7f69e6739acc1e13$var$Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
})($7f69e6739acc1e13$var$InsertReplaceEdit || ($7f69e6739acc1e13$var$InsertReplaceEdit = {}));
var $7f69e6739acc1e13$var$InsertTextMode;
(function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
})($7f69e6739acc1e13$var$InsertTextMode || ($7f69e6739acc1e13$var$InsertTextMode = {}));
var $7f69e6739acc1e13$var$CompletionItem;
(function(CompletionItem2) {
    function create(label) {
        return {
            label: label
        };
    }
    CompletionItem2.create = create;
})($7f69e6739acc1e13$var$CompletionItem || ($7f69e6739acc1e13$var$CompletionItem = {}));
var $7f69e6739acc1e13$var$CompletionList;
(function(CompletionList2) {
    function create(items, isIncomplete) {
        return {
            items: items ? items : [],
            isIncomplete: !!isIncomplete
        };
    }
    CompletionList2.create = create;
})($7f69e6739acc1e13$var$CompletionList || ($7f69e6739acc1e13$var$CompletionList = {}));
var $7f69e6739acc1e13$var$MarkedString;
(function(MarkedString2) {
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.string(candidate) || $7f69e6739acc1e13$var$Is.objectLiteral(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.language) && $7f69e6739acc1e13$var$Is.string(candidate.value);
    }
    MarkedString2.is = is;
})($7f69e6739acc1e13$var$MarkedString || ($7f69e6739acc1e13$var$MarkedString = {}));
var $7f69e6739acc1e13$var$Hover;
(function(Hover2) {
    function is(value) {
        var candidate = value;
        return !!candidate && $7f69e6739acc1e13$var$Is.objectLiteral(candidate) && ($7f69e6739acc1e13$var$MarkupContent.is(candidate.contents) || $7f69e6739acc1e13$var$MarkedString.is(candidate.contents) || $7f69e6739acc1e13$var$Is.typedArray(candidate.contents, $7f69e6739acc1e13$var$MarkedString.is)) && (value.range === void 0 || $7f69e6739acc1e13$var$Range.is(value.range));
    }
    Hover2.is = is;
})($7f69e6739acc1e13$var$Hover || ($7f69e6739acc1e13$var$Hover = {}));
var $7f69e6739acc1e13$var$ParameterInformation;
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
})($7f69e6739acc1e13$var$ParameterInformation || ($7f69e6739acc1e13$var$ParameterInformation = {}));
var $7f69e6739acc1e13$var$SignatureInformation;
(function(SignatureInformation2) {
    function create(label, documentation) {
        var parameters = [];
        for(var _i = 2; _i < arguments.length; _i++)parameters[_i - 2] = arguments[_i];
        var result = {
            label: label
        };
        if ($7f69e6739acc1e13$var$Is.defined(documentation)) result.documentation = documentation;
        if ($7f69e6739acc1e13$var$Is.defined(parameters)) result.parameters = parameters;
        else result.parameters = [];
        return result;
    }
    SignatureInformation2.create = create;
})($7f69e6739acc1e13$var$SignatureInformation || ($7f69e6739acc1e13$var$SignatureInformation = {}));
var $7f69e6739acc1e13$var$DocumentHighlightKind;
(function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
})($7f69e6739acc1e13$var$DocumentHighlightKind || ($7f69e6739acc1e13$var$DocumentHighlightKind = {}));
var $7f69e6739acc1e13$var$DocumentHighlight;
(function(DocumentHighlight2) {
    function create(range, kind) {
        var result = {
            range: range
        };
        if ($7f69e6739acc1e13$var$Is.number(kind)) result.kind = kind;
        return result;
    }
    DocumentHighlight2.create = create;
})($7f69e6739acc1e13$var$DocumentHighlight || ($7f69e6739acc1e13$var$DocumentHighlight = {}));
var $7f69e6739acc1e13$var$SymbolKind;
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
})($7f69e6739acc1e13$var$SymbolKind || ($7f69e6739acc1e13$var$SymbolKind = {}));
var $7f69e6739acc1e13$var$SymbolTag;
(function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
})($7f69e6739acc1e13$var$SymbolTag || ($7f69e6739acc1e13$var$SymbolTag = {}));
var $7f69e6739acc1e13$var$SymbolInformation;
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
})($7f69e6739acc1e13$var$SymbolInformation || ($7f69e6739acc1e13$var$SymbolInformation = {}));
var $7f69e6739acc1e13$var$DocumentSymbol;
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
        return candidate && $7f69e6739acc1e13$var$Is.string(candidate.name) && $7f69e6739acc1e13$var$Is.number(candidate.kind) && $7f69e6739acc1e13$var$Range.is(candidate.range) && $7f69e6739acc1e13$var$Range.is(candidate.selectionRange) && (candidate.detail === void 0 || $7f69e6739acc1e13$var$Is.string(candidate.detail)) && (candidate.deprecated === void 0 || $7f69e6739acc1e13$var$Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
})($7f69e6739acc1e13$var$DocumentSymbol || ($7f69e6739acc1e13$var$DocumentSymbol = {}));
var $7f69e6739acc1e13$var$CodeActionKind;
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
})($7f69e6739acc1e13$var$CodeActionKind || ($7f69e6739acc1e13$var$CodeActionKind = {}));
var $7f69e6739acc1e13$var$CodeActionContext;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Is.typedArray(candidate.diagnostics, $7f69e6739acc1e13$var$Diagnostic.is) && (candidate.only === void 0 || $7f69e6739acc1e13$var$Is.typedArray(candidate.only, $7f69e6739acc1e13$var$Is.string));
    }
    CodeActionContext2.is = is;
})($7f69e6739acc1e13$var$CodeActionContext || ($7f69e6739acc1e13$var$CodeActionContext = {}));
var $7f69e6739acc1e13$var$CodeAction;
(function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
        var result = {
            title: title
        };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        } else if ($7f69e6739acc1e13$var$Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
        else result.edit = kindOrCommandOrEdit;
        if (checkKind && kind !== void 0) result.kind = kind;
        return result;
    }
    CodeAction2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $7f69e6739acc1e13$var$Is.string(candidate.title) && (candidate.diagnostics === void 0 || $7f69e6739acc1e13$var$Is.typedArray(candidate.diagnostics, $7f69e6739acc1e13$var$Diagnostic.is)) && (candidate.kind === void 0 || $7f69e6739acc1e13$var$Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || $7f69e6739acc1e13$var$Command.is(candidate.command)) && (candidate.isPreferred === void 0 || $7f69e6739acc1e13$var$Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || $7f69e6739acc1e13$var$WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
})($7f69e6739acc1e13$var$CodeAction || ($7f69e6739acc1e13$var$CodeAction = {}));
var $7f69e6739acc1e13$var$CodeLens;
(function(CodeLens2) {
    function create(range, data) {
        var result = {
            range: range
        };
        if ($7f69e6739acc1e13$var$Is.defined(data)) result.data = data;
        return result;
    }
    CodeLens2.create = create;
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Range.is(candidate.range) && ($7f69e6739acc1e13$var$Is.undefined(candidate.command) || $7f69e6739acc1e13$var$Command.is(candidate.command));
    }
    CodeLens2.is = is;
})($7f69e6739acc1e13$var$CodeLens || ($7f69e6739acc1e13$var$CodeLens = {}));
var $7f69e6739acc1e13$var$FormattingOptions;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Is.uinteger(candidate.tabSize) && $7f69e6739acc1e13$var$Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
})($7f69e6739acc1e13$var$FormattingOptions || ($7f69e6739acc1e13$var$FormattingOptions = {}));
var $7f69e6739acc1e13$var$DocumentLink;
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
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Range.is(candidate.range) && ($7f69e6739acc1e13$var$Is.undefined(candidate.target) || $7f69e6739acc1e13$var$Is.string(candidate.target));
    }
    DocumentLink2.is = is;
})($7f69e6739acc1e13$var$DocumentLink || ($7f69e6739acc1e13$var$DocumentLink = {}));
var $7f69e6739acc1e13$var$SelectionRange;
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
        return candidate !== void 0 && $7f69e6739acc1e13$var$Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
})($7f69e6739acc1e13$var$SelectionRange || ($7f69e6739acc1e13$var$SelectionRange = {}));
var $7f69e6739acc1e13$var$TextDocument;
(function(TextDocument2) {
    function create(uri, languageId, version, content) {
        return new $7f69e6739acc1e13$var$FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
        var candidate = value;
        return $7f69e6739acc1e13$var$Is.defined(candidate) && $7f69e6739acc1e13$var$Is.string(candidate.uri) && ($7f69e6739acc1e13$var$Is.undefined(candidate.languageId) || $7f69e6739acc1e13$var$Is.string(candidate.languageId)) && $7f69e6739acc1e13$var$Is.uinteger(candidate.lineCount) && $7f69e6739acc1e13$var$Is.func(candidate.getText) && $7f69e6739acc1e13$var$Is.func(candidate.positionAt) && $7f69e6739acc1e13$var$Is.func(candidate.offsetAt) ? true : false;
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
})($7f69e6739acc1e13$var$TextDocument || ($7f69e6739acc1e13$var$TextDocument = {}));
var $7f69e6739acc1e13$var$FullTextDocument = function() {
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
        if (high === 0) return $7f69e6739acc1e13$var$Position.create(0, offset);
        while(low < high){
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) high = mid;
            else low = mid + 1;
        }
        var line = low - 1;
        return $7f69e6739acc1e13$var$Position.create(line, offset - lineOffsets[line]);
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
var $7f69e6739acc1e13$var$Is;
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
})($7f69e6739acc1e13$var$Is || ($7f69e6739acc1e13$var$Is = {}));
// src/common/lspLanguageFeatures.ts
var $7f69e6739acc1e13$var$DiagnosticsAdapter = class {
    dispose() {
        this._disposables.forEach((d)=>d && d.dispose());
        this._disposables.length = 0;
    }
    _doValidate(resource, languageId) {
        this._worker(resource).then((worker)=>{
            return worker.doValidation(resource.toString());
        }).then((diagnostics)=>{
            const markers = diagnostics.map((d)=>$7f69e6739acc1e13$var$toDiagnostics(resource, d));
            let model = $7f69e6739acc1e13$var$monaco_editor_core_exports.editor.getModel(resource);
            if (model && model.getLanguageId() === languageId) $7f69e6739acc1e13$var$monaco_editor_core_exports.editor.setModelMarkers(model, languageId, markers);
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
            $7f69e6739acc1e13$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._languageId, []);
            let uriStr = model.uri.toString();
            let listener = this._listener[uriStr];
            if (listener) {
                listener.dispose();
                delete this._listener[uriStr];
            }
        };
        this._disposables.push($7f69e6739acc1e13$var$monaco_editor_core_exports.editor.onDidCreateModel(onModelAdd));
        this._disposables.push($7f69e6739acc1e13$var$monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push($7f69e6739acc1e13$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        this._disposables.push(configChangeEvent((_)=>{
            $7f69e6739acc1e13$var$monaco_editor_core_exports.editor.getModels().forEach((model)=>{
                if (model.getLanguageId() === this._languageId) {
                    onModelRemoved(model);
                    onModelAdd(model);
                }
            });
        }));
        this._disposables.push({
            dispose: ()=>{
                $7f69e6739acc1e13$var$monaco_editor_core_exports.editor.getModels().forEach(onModelRemoved);
                for(let key in this._listener)this._listener[key].dispose();
            }
        });
        $7f69e6739acc1e13$var$monaco_editor_core_exports.editor.getModels().forEach(onModelAdd);
    }
};
function $7f69e6739acc1e13$var$toSeverity(lsSeverity) {
    switch(lsSeverity){
        case $7f69e6739acc1e13$var$DiagnosticSeverity.Error:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.MarkerSeverity.Error;
        case $7f69e6739acc1e13$var$DiagnosticSeverity.Warning:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.MarkerSeverity.Warning;
        case $7f69e6739acc1e13$var$DiagnosticSeverity.Information:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.MarkerSeverity.Info;
        case $7f69e6739acc1e13$var$DiagnosticSeverity.Hint:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.MarkerSeverity.Hint;
        default:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.MarkerSeverity.Info;
    }
}
function $7f69e6739acc1e13$var$toDiagnostics(resource, diag) {
    let code = typeof diag.code === "number" ? String(diag.code) : diag.code;
    return {
        severity: $7f69e6739acc1e13$var$toSeverity(diag.severity),
        startLineNumber: diag.range.start.line + 1,
        startColumn: diag.range.start.character + 1,
        endLineNumber: diag.range.end.line + 1,
        endColumn: diag.range.end.character + 1,
        message: diag.message,
        code: code,
        source: diag.source
    };
}
var $7f69e6739acc1e13$var$CompletionAdapter = class {
    get triggerCharacters() {
        return this._triggerCharacters;
    }
    provideCompletionItems(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doComplete(resource.toString(), $7f69e6739acc1e13$var$fromPosition(position));
        }).then((info)=>{
            if (!info) return;
            const wordInfo = model.getWordUntilPosition(position);
            const wordRange = new $7f69e6739acc1e13$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            const items = info.items.map((entry)=>{
                const item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    command: $7f69e6739acc1e13$var$toCommand(entry.command),
                    range: wordRange,
                    kind: $7f69e6739acc1e13$var$toCompletionItemKind(entry.kind)
                };
                if (entry.textEdit) {
                    if ($7f69e6739acc1e13$var$isInsertReplaceEdit(entry.textEdit)) item.range = {
                        insert: $7f69e6739acc1e13$var$toRange(entry.textEdit.insert),
                        replace: $7f69e6739acc1e13$var$toRange(entry.textEdit.replace)
                    };
                    else item.range = $7f69e6739acc1e13$var$toRange(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) item.additionalTextEdits = entry.additionalTextEdits.map($7f69e6739acc1e13$var$toTextEdit);
                if (entry.insertTextFormat === $7f69e6739acc1e13$var$InsertTextFormat.Snippet) item.insertTextRules = $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.CompletionItemInsertTextRule.InsertAsSnippet;
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
function $7f69e6739acc1e13$var$fromPosition(position) {
    if (!position) return void 0;
    return {
        character: position.column - 1,
        line: position.lineNumber - 1
    };
}
function $7f69e6739acc1e13$var$fromRange(range) {
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
function $7f69e6739acc1e13$var$toRange(range) {
    if (!range) return void 0;
    return new $7f69e6739acc1e13$var$monaco_editor_core_exports.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function $7f69e6739acc1e13$var$isInsertReplaceEdit(edit) {
    return typeof edit.insert !== "undefined" && typeof edit.replace !== "undefined";
}
function $7f69e6739acc1e13$var$toCompletionItemKind(kind) {
    const mItemKind = $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.CompletionItemKind;
    switch(kind){
        case $7f69e6739acc1e13$var$CompletionItemKind.Text:
            return mItemKind.Text;
        case $7f69e6739acc1e13$var$CompletionItemKind.Method:
            return mItemKind.Method;
        case $7f69e6739acc1e13$var$CompletionItemKind.Function:
            return mItemKind.Function;
        case $7f69e6739acc1e13$var$CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case $7f69e6739acc1e13$var$CompletionItemKind.Field:
            return mItemKind.Field;
        case $7f69e6739acc1e13$var$CompletionItemKind.Variable:
            return mItemKind.Variable;
        case $7f69e6739acc1e13$var$CompletionItemKind.Class:
            return mItemKind.Class;
        case $7f69e6739acc1e13$var$CompletionItemKind.Interface:
            return mItemKind.Interface;
        case $7f69e6739acc1e13$var$CompletionItemKind.Module:
            return mItemKind.Module;
        case $7f69e6739acc1e13$var$CompletionItemKind.Property:
            return mItemKind.Property;
        case $7f69e6739acc1e13$var$CompletionItemKind.Unit:
            return mItemKind.Unit;
        case $7f69e6739acc1e13$var$CompletionItemKind.Value:
            return mItemKind.Value;
        case $7f69e6739acc1e13$var$CompletionItemKind.Enum:
            return mItemKind.Enum;
        case $7f69e6739acc1e13$var$CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case $7f69e6739acc1e13$var$CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case $7f69e6739acc1e13$var$CompletionItemKind.Color:
            return mItemKind.Color;
        case $7f69e6739acc1e13$var$CompletionItemKind.File:
            return mItemKind.File;
        case $7f69e6739acc1e13$var$CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function $7f69e6739acc1e13$var$toTextEdit(textEdit) {
    if (!textEdit) return void 0;
    return {
        range: $7f69e6739acc1e13$var$toRange(textEdit.range),
        text: textEdit.newText
    };
}
function $7f69e6739acc1e13$var$toCommand(c) {
    return c && c.command === "editor.action.triggerSuggest" ? {
        id: c.command,
        title: c.title,
        arguments: c.arguments
    } : void 0;
}
var $7f69e6739acc1e13$var$HoverAdapter = class {
    provideHover(model, position, token) {
        let resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doHover(resource.toString(), $7f69e6739acc1e13$var$fromPosition(position));
        }).then((info)=>{
            if (!info) return;
            return {
                range: $7f69e6739acc1e13$var$toRange(info.range),
                contents: $7f69e6739acc1e13$var$toMarkedStringArray(info.contents)
            };
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $7f69e6739acc1e13$var$isMarkupContent(thing) {
    return thing && typeof thing === "object" && typeof thing.kind === "string";
}
function $7f69e6739acc1e13$var$toMarkdownString(entry) {
    if (typeof entry === "string") return {
        value: entry
    };
    if ($7f69e6739acc1e13$var$isMarkupContent(entry)) {
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
function $7f69e6739acc1e13$var$toMarkedStringArray(contents) {
    if (!contents) return void 0;
    if (Array.isArray(contents)) return contents.map($7f69e6739acc1e13$var$toMarkdownString);
    return [
        $7f69e6739acc1e13$var$toMarkdownString(contents)
    ];
}
var $7f69e6739acc1e13$var$DocumentHighlightAdapter = class {
    provideDocumentHighlights(model, position, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentHighlights(resource.toString(), $7f69e6739acc1e13$var$fromPosition(position))).then((entries)=>{
            if (!entries) return;
            return entries.map((entry)=>{
                return {
                    range: $7f69e6739acc1e13$var$toRange(entry.range),
                    kind: $7f69e6739acc1e13$var$toDocumentHighlightKind(entry.kind)
                };
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $7f69e6739acc1e13$var$toDocumentHighlightKind(kind) {
    switch(kind){
        case $7f69e6739acc1e13$var$DocumentHighlightKind.Read:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Read;
        case $7f69e6739acc1e13$var$DocumentHighlightKind.Write:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write;
        case $7f69e6739acc1e13$var$DocumentHighlightKind.Text:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
    }
    return $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
}
var $7f69e6739acc1e13$var$DefinitionAdapter = class {
    provideDefinition(model, position, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.findDefinition(resource.toString(), $7f69e6739acc1e13$var$fromPosition(position));
        }).then((definition)=>{
            if (!definition) return;
            return [
                $7f69e6739acc1e13$var$toLocation(definition)
            ];
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $7f69e6739acc1e13$var$toLocation(location) {
    return {
        uri: $7f69e6739acc1e13$var$monaco_editor_core_exports.Uri.parse(location.uri),
        range: $7f69e6739acc1e13$var$toRange(location.range)
    };
}
var $7f69e6739acc1e13$var$ReferenceAdapter = class {
    provideReferences(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.findReferences(resource.toString(), $7f69e6739acc1e13$var$fromPosition(position));
        }).then((entries)=>{
            if (!entries) return;
            return entries.map($7f69e6739acc1e13$var$toLocation);
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $7f69e6739acc1e13$var$RenameAdapter = class {
    provideRenameEdits(model, position, newName, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doRename(resource.toString(), $7f69e6739acc1e13$var$fromPosition(position), newName);
        }).then((edit)=>{
            return $7f69e6739acc1e13$var$toWorkspaceEdit(edit);
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $7f69e6739acc1e13$var$toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) return void 0;
    let resourceEdits = [];
    for(let uri in edit.changes){
        const _uri = $7f69e6739acc1e13$var$monaco_editor_core_exports.Uri.parse(uri);
        for (let e of edit.changes[uri])resourceEdits.push({
            resource: _uri,
            edit: {
                range: $7f69e6739acc1e13$var$toRange(e.range),
                text: e.newText
            }
        });
    }
    return {
        edits: resourceEdits
    };
}
var $7f69e6739acc1e13$var$DocumentSymbolAdapter = class {
    provideDocumentSymbols(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentSymbols(resource.toString())).then((items)=>{
            if (!items) return;
            return items.map((item)=>({
                    name: item.name,
                    detail: "",
                    containerName: item.containerName,
                    kind: $7f69e6739acc1e13$var$toSymbolKind(item.kind),
                    range: $7f69e6739acc1e13$var$toRange(item.location.range),
                    selectionRange: $7f69e6739acc1e13$var$toRange(item.location.range),
                    tags: []
                }));
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $7f69e6739acc1e13$var$toSymbolKind(kind) {
    let mKind = $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.SymbolKind;
    switch(kind){
        case $7f69e6739acc1e13$var$SymbolKind.File:
            return mKind.Array;
        case $7f69e6739acc1e13$var$SymbolKind.Module:
            return mKind.Module;
        case $7f69e6739acc1e13$var$SymbolKind.Namespace:
            return mKind.Namespace;
        case $7f69e6739acc1e13$var$SymbolKind.Package:
            return mKind.Package;
        case $7f69e6739acc1e13$var$SymbolKind.Class:
            return mKind.Class;
        case $7f69e6739acc1e13$var$SymbolKind.Method:
            return mKind.Method;
        case $7f69e6739acc1e13$var$SymbolKind.Property:
            return mKind.Property;
        case $7f69e6739acc1e13$var$SymbolKind.Field:
            return mKind.Field;
        case $7f69e6739acc1e13$var$SymbolKind.Constructor:
            return mKind.Constructor;
        case $7f69e6739acc1e13$var$SymbolKind.Enum:
            return mKind.Enum;
        case $7f69e6739acc1e13$var$SymbolKind.Interface:
            return mKind.Interface;
        case $7f69e6739acc1e13$var$SymbolKind.Function:
            return mKind.Function;
        case $7f69e6739acc1e13$var$SymbolKind.Variable:
            return mKind.Variable;
        case $7f69e6739acc1e13$var$SymbolKind.Constant:
            return mKind.Constant;
        case $7f69e6739acc1e13$var$SymbolKind.String:
            return mKind.String;
        case $7f69e6739acc1e13$var$SymbolKind.Number:
            return mKind.Number;
        case $7f69e6739acc1e13$var$SymbolKind.Boolean:
            return mKind.Boolean;
        case $7f69e6739acc1e13$var$SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var $7f69e6739acc1e13$var$DocumentColorAdapter = class {
    provideDocumentColors(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentColors(resource.toString())).then((infos)=>{
            if (!infos) return;
            return infos.map((item)=>({
                    color: item.color,
                    range: $7f69e6739acc1e13$var$toRange(item.range)
                }));
        });
    }
    provideColorPresentations(model, info, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getColorPresentations(resource.toString(), info.color, $7f69e6739acc1e13$var$fromRange(info.range))).then((presentations)=>{
            if (!presentations) return;
            return presentations.map((presentation)=>{
                let item = {
                    label: presentation.label
                };
                if (presentation.textEdit) item.textEdit = $7f69e6739acc1e13$var$toTextEdit(presentation.textEdit);
                if (presentation.additionalTextEdits) item.additionalTextEdits = presentation.additionalTextEdits.map($7f69e6739acc1e13$var$toTextEdit);
                return item;
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $7f69e6739acc1e13$var$FoldingRangeAdapter = class {
    provideFoldingRanges(model, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getFoldingRanges(resource.toString(), context)).then((ranges)=>{
            if (!ranges) return;
            return ranges.map((range)=>{
                const result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== "undefined") result.kind = $7f69e6739acc1e13$var$toFoldingRangeKind(range.kind);
                return result;
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $7f69e6739acc1e13$var$toFoldingRangeKind(kind) {
    switch(kind){
        case $7f69e6739acc1e13$var$FoldingRangeKind.Comment:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.FoldingRangeKind.Comment;
        case $7f69e6739acc1e13$var$FoldingRangeKind.Imports:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.FoldingRangeKind.Imports;
        case $7f69e6739acc1e13$var$FoldingRangeKind.Region:
            return $7f69e6739acc1e13$var$monaco_editor_core_exports.languages.FoldingRangeKind.Region;
    }
    return void 0;
}
var $7f69e6739acc1e13$var$SelectionRangeAdapter = class {
    provideSelectionRanges(model, positions, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getSelectionRanges(resource.toString(), positions.map($7f69e6739acc1e13$var$fromPosition))).then((selectionRanges)=>{
            if (!selectionRanges) return;
            return selectionRanges.map((selectionRange)=>{
                const result = [];
                while(selectionRange){
                    result.push({
                        range: $7f69e6739acc1e13$var$toRange(selectionRange.range)
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
// src/css/cssMode.ts
function $7f69e6739acc1e13$export$6df00d141df42469(defaults) {
    const disposables = [];
    const providers = [];
    const client = new $7f69e6739acc1e13$var$WorkerManager(defaults);
    disposables.push(client);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    function registerProviders() {
        const { languageId: languageId , modeConfiguration: modeConfiguration  } = defaults;
        $7f69e6739acc1e13$var$disposeAll(providers);
        if (modeConfiguration.completionItems) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $7f69e6739acc1e13$var$CompletionAdapter(worker, [
            "/",
            "-",
            ":"
        ])));
        if (modeConfiguration.hovers) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $7f69e6739acc1e13$var$HoverAdapter(worker)));
        if (modeConfiguration.documentHighlights) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $7f69e6739acc1e13$var$DocumentHighlightAdapter(worker)));
        if (modeConfiguration.definitions) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerDefinitionProvider(languageId, new $7f69e6739acc1e13$var$DefinitionAdapter(worker)));
        if (modeConfiguration.references) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerReferenceProvider(languageId, new $7f69e6739acc1e13$var$ReferenceAdapter(worker)));
        if (modeConfiguration.documentSymbols) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $7f69e6739acc1e13$var$DocumentSymbolAdapter(worker)));
        if (modeConfiguration.rename) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $7f69e6739acc1e13$var$RenameAdapter(worker)));
        if (modeConfiguration.colors) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerColorProvider(languageId, new $7f69e6739acc1e13$var$DocumentColorAdapter(worker)));
        if (modeConfiguration.foldingRanges) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $7f69e6739acc1e13$var$FoldingRangeAdapter(worker)));
        if (modeConfiguration.diagnostics) providers.push(new $7f69e6739acc1e13$var$DiagnosticsAdapter(languageId, worker, defaults.onDidChange));
        if (modeConfiguration.selectionRanges) providers.push($7f69e6739acc1e13$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $7f69e6739acc1e13$var$SelectionRangeAdapter(worker)));
    }
    registerProviders();
    disposables.push($7f69e6739acc1e13$var$asDisposable(providers));
    return $7f69e6739acc1e13$var$asDisposable(disposables);
}
function $7f69e6739acc1e13$var$asDisposable(disposables) {
    return {
        dispose: ()=>$7f69e6739acc1e13$var$disposeAll(disposables)
    };
}
function $7f69e6739acc1e13$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}

});

})();
