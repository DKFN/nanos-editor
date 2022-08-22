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
parcelRequire.register("c1R23", function(module, exports) {

$parcel$export(module.exports, "setupTypeScript", function () { return $8c1eb71cc00dabf7$export$fe02e3e074fe0a0e; });
$parcel$export(module.exports, "setupJavaScript", function () { return $8c1eb71cc00dabf7$export$4911c01acb361b94; });
$parcel$export(module.exports, "getJavaScriptWorker", function () { return $8c1eb71cc00dabf7$export$42142bcd5970f8e8; });
$parcel$export(module.exports, "getTypeScriptWorker", function () { return $8c1eb71cc00dabf7$export$f4433c6b950b070e; });

var $8Axbx = parcelRequire("8Axbx");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.0(252e010eb73ddc2fa1a37c1dade7bf35d87106cd)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $8c1eb71cc00dabf7$var$__defProp = Object.defineProperty;
var $8c1eb71cc00dabf7$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $8c1eb71cc00dabf7$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $8c1eb71cc00dabf7$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $8c1eb71cc00dabf7$var$__markAsModule = (target)=>$8c1eb71cc00dabf7$var$__defProp(target, "__esModule", {
        value: true
    });
var $8c1eb71cc00dabf7$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $8c1eb71cc00dabf7$var$__getOwnPropNames(module))if (!$8c1eb71cc00dabf7$var$__hasOwnProp.call(target, key) && key !== "default") $8c1eb71cc00dabf7$var$__defProp(target, key, {
            get: ()=>module[key],
            enumerable: !(desc = $8c1eb71cc00dabf7$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $8c1eb71cc00dabf7$var$monaco_editor_core_exports = {};
$8c1eb71cc00dabf7$var$__markAsModule($8c1eb71cc00dabf7$var$monaco_editor_core_exports);
$8c1eb71cc00dabf7$var$__reExport($8c1eb71cc00dabf7$var$monaco_editor_core_exports, $8Axbx);
// src/typescript/workerManager.ts
var $8c1eb71cc00dabf7$var$WorkerManager = class {
    _stopWorker() {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    }
    dispose() {
        this._configChangeListener.dispose();
        this._extraLibsChangeListener.dispose();
        this._stopWorker();
    }
    async _updateExtraLibs() {
        if (!this._worker) return;
        const myToken = ++this._updateExtraLibsToken;
        const proxy = await this._worker.getProxy();
        if (this._updateExtraLibsToken !== myToken) return;
        proxy.updateExtraLibs(this._defaults.getExtraLibs());
    }
    _getClient() {
        if (!this._client) {
            this._worker = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.createWebWorker({
                moduleId: "vs/language/typescript/tsWorker",
                label: this._modeId,
                keepIdleModels: true,
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs(),
                    customWorkerPath: this._defaults.workerOptions.customWorkerPath,
                    inlayHintsOptions: this._defaults.inlayHintsOptions
                }
            });
            let p = this._worker.getProxy();
            if (this._defaults.getEagerModelSync()) p = p.then((worker)=>{
                if (this._worker) return this._worker.withSyncedResources($8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.getModels().filter((model)=>model.getLanguageId() === this._modeId).map((model)=>model.uri));
                return worker;
            });
            this._client = p;
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
    constructor(modeId, defaults){
        this._modeId = modeId;
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._configChangeListener = this._defaults.onDidChange(()=>this._stopWorker());
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs());
    }
};
// src/typescript/lib/typescriptServicesMetadata.ts
var $8c1eb71cc00dabf7$var$typescriptVersion = "4.4.4";
// src/typescript/monaco.contribution.ts
var $8c1eb71cc00dabf7$var$ModuleKind;
(function(ModuleKind2) {
    ModuleKind2[ModuleKind2["None"] = 0] = "None";
    ModuleKind2[ModuleKind2["CommonJS"] = 1] = "CommonJS";
    ModuleKind2[ModuleKind2["AMD"] = 2] = "AMD";
    ModuleKind2[ModuleKind2["UMD"] = 3] = "UMD";
    ModuleKind2[ModuleKind2["System"] = 4] = "System";
    ModuleKind2[ModuleKind2["ES2015"] = 5] = "ES2015";
    ModuleKind2[ModuleKind2["ESNext"] = 99] = "ESNext";
})($8c1eb71cc00dabf7$var$ModuleKind || ($8c1eb71cc00dabf7$var$ModuleKind = {}));
var $8c1eb71cc00dabf7$var$JsxEmit;
(function(JsxEmit2) {
    JsxEmit2[JsxEmit2["None"] = 0] = "None";
    JsxEmit2[JsxEmit2["Preserve"] = 1] = "Preserve";
    JsxEmit2[JsxEmit2["React"] = 2] = "React";
    JsxEmit2[JsxEmit2["ReactNative"] = 3] = "ReactNative";
    JsxEmit2[JsxEmit2["ReactJSX"] = 4] = "ReactJSX";
    JsxEmit2[JsxEmit2["ReactJSXDev"] = 5] = "ReactJSXDev";
})($8c1eb71cc00dabf7$var$JsxEmit || ($8c1eb71cc00dabf7$var$JsxEmit = {}));
var $8c1eb71cc00dabf7$var$NewLineKind;
(function(NewLineKind2) {
    NewLineKind2[NewLineKind2["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
    NewLineKind2[NewLineKind2["LineFeed"] = 1] = "LineFeed";
})($8c1eb71cc00dabf7$var$NewLineKind || ($8c1eb71cc00dabf7$var$NewLineKind = {}));
var $8c1eb71cc00dabf7$var$ScriptTarget;
(function(ScriptTarget2) {
    ScriptTarget2[ScriptTarget2["ES3"] = 0] = "ES3";
    ScriptTarget2[ScriptTarget2["ES5"] = 1] = "ES5";
    ScriptTarget2[ScriptTarget2["ES2015"] = 2] = "ES2015";
    ScriptTarget2[ScriptTarget2["ES2016"] = 3] = "ES2016";
    ScriptTarget2[ScriptTarget2["ES2017"] = 4] = "ES2017";
    ScriptTarget2[ScriptTarget2["ES2018"] = 5] = "ES2018";
    ScriptTarget2[ScriptTarget2["ES2019"] = 6] = "ES2019";
    ScriptTarget2[ScriptTarget2["ES2020"] = 7] = "ES2020";
    ScriptTarget2[ScriptTarget2["ESNext"] = 99] = "ESNext";
    ScriptTarget2[ScriptTarget2["JSON"] = 100] = "JSON";
    ScriptTarget2[ScriptTarget2["Latest"] = 99] = "Latest";
})($8c1eb71cc00dabf7$var$ScriptTarget || ($8c1eb71cc00dabf7$var$ScriptTarget = {}));
var $8c1eb71cc00dabf7$var$ModuleResolutionKind;
(function(ModuleResolutionKind2) {
    ModuleResolutionKind2[ModuleResolutionKind2["Classic"] = 1] = "Classic";
    ModuleResolutionKind2[ModuleResolutionKind2["NodeJs"] = 2] = "NodeJs";
})($8c1eb71cc00dabf7$var$ModuleResolutionKind || ($8c1eb71cc00dabf7$var$ModuleResolutionKind = {}));
var $8c1eb71cc00dabf7$var$LanguageServiceDefaultsImpl = class {
    get onDidChange() {
        return this._onDidChange.event;
    }
    get onDidExtraLibsChange() {
        return this._onDidExtraLibsChange.event;
    }
    get workerOptions() {
        return this._workerOptions;
    }
    get inlayHintsOptions() {
        return this._inlayHintsOptions;
    }
    getExtraLibs() {
        return this._extraLibs;
    }
    addExtraLib(content, _filePath) {
        let filePath;
        if (typeof _filePath === "undefined") filePath = `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
        else filePath = _filePath;
        if (this._extraLibs[filePath] && this._extraLibs[filePath].content === content) return {
            dispose: ()=>{}
        };
        let myVersion = 1;
        if (this._removedExtraLibs[filePath]) myVersion = this._removedExtraLibs[filePath] + 1;
        if (this._extraLibs[filePath]) myVersion = this._extraLibs[filePath].version + 1;
        this._extraLibs[filePath] = {
            content: content,
            version: myVersion
        };
        this._fireOnDidExtraLibsChangeSoon();
        return {
            dispose: ()=>{
                let extraLib = this._extraLibs[filePath];
                if (!extraLib) return;
                if (extraLib.version !== myVersion) return;
                delete this._extraLibs[filePath];
                this._removedExtraLibs[filePath] = myVersion;
                this._fireOnDidExtraLibsChangeSoon();
            }
        };
    }
    setExtraLibs(libs) {
        for(const filePath in this._extraLibs)this._removedExtraLibs[filePath] = this._extraLibs[filePath].version;
        this._extraLibs = Object.create(null);
        if (libs && libs.length > 0) for (const lib of libs){
            const filePath1 = lib.filePath || `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
            const content = lib.content;
            let myVersion = 1;
            if (this._removedExtraLibs[filePath1]) myVersion = this._removedExtraLibs[filePath1] + 1;
            this._extraLibs[filePath1] = {
                content: content,
                version: myVersion
            };
        }
        this._fireOnDidExtraLibsChangeSoon();
    }
    _fireOnDidExtraLibsChangeSoon() {
        if (this._onDidExtraLibsChangeTimeout !== -1) return;
        this._onDidExtraLibsChangeTimeout = window.setTimeout(()=>{
            this._onDidExtraLibsChangeTimeout = -1;
            this._onDidExtraLibsChange.fire(void 0);
        }, 0);
    }
    getCompilerOptions() {
        return this._compilerOptions;
    }
    setCompilerOptions(options) {
        this._compilerOptions = options || Object.create(null);
        this._onDidChange.fire(void 0);
    }
    getDiagnosticsOptions() {
        return this._diagnosticsOptions;
    }
    setDiagnosticsOptions(options) {
        this._diagnosticsOptions = options || Object.create(null);
        this._onDidChange.fire(void 0);
    }
    setWorkerOptions(options) {
        this._workerOptions = options || Object.create(null);
        this._onDidChange.fire(void 0);
    }
    setInlayHintsOptions(options) {
        this._inlayHintsOptions = options || Object.create(null);
        this._onDidChange.fire(void 0);
    }
    setMaximumWorkerIdleTime(value) {}
    setEagerModelSync(value) {
        this._eagerModelSync = value;
    }
    getEagerModelSync() {
        return this._eagerModelSync;
    }
    constructor(compilerOptions, diagnosticsOptions, workerOptions, inlayHintsOptions){
        this._onDidChange = new $8c1eb71cc00dabf7$var$monaco_editor_core_exports.Emitter();
        this._onDidExtraLibsChange = new $8c1eb71cc00dabf7$var$monaco_editor_core_exports.Emitter();
        this._extraLibs = Object.create(null);
        this._removedExtraLibs = Object.create(null);
        this._eagerModelSync = false;
        this.setCompilerOptions(compilerOptions);
        this.setDiagnosticsOptions(diagnosticsOptions);
        this.setWorkerOptions(workerOptions);
        this.setInlayHintsOptions(inlayHintsOptions);
        this._onDidExtraLibsChangeTimeout = -1;
    }
};
var $8c1eb71cc00dabf7$var$typescriptVersion2 = $8c1eb71cc00dabf7$var$typescriptVersion;
var $8c1eb71cc00dabf7$var$typescriptDefaults = new $8c1eb71cc00dabf7$var$LanguageServiceDefaultsImpl({
    allowNonTsExtensions: true,
    target: 99
}, {
    noSemanticValidation: false,
    noSyntaxValidation: false,
    onlyVisible: false
}, {}, {});
var $8c1eb71cc00dabf7$var$javascriptDefaults = new $8c1eb71cc00dabf7$var$LanguageServiceDefaultsImpl({
    allowNonTsExtensions: true,
    allowJs: true,
    target: 99
}, {
    noSemanticValidation: true,
    noSyntaxValidation: false,
    onlyVisible: false
}, {}, {});
var $8c1eb71cc00dabf7$var$getTypeScriptWorker = ()=>{
    return $8c1eb71cc00dabf7$var$getMode().then((mode)=>mode.getTypeScriptWorker());
};
var $8c1eb71cc00dabf7$var$getJavaScriptWorker = ()=>{
    return $8c1eb71cc00dabf7$var$getMode().then((mode)=>mode.getJavaScriptWorker());
};
$8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.typescript = {
    ModuleKind: $8c1eb71cc00dabf7$var$ModuleKind,
    JsxEmit: $8c1eb71cc00dabf7$var$JsxEmit,
    NewLineKind: $8c1eb71cc00dabf7$var$NewLineKind,
    ScriptTarget: $8c1eb71cc00dabf7$var$ScriptTarget,
    ModuleResolutionKind: $8c1eb71cc00dabf7$var$ModuleResolutionKind,
    typescriptVersion: $8c1eb71cc00dabf7$var$typescriptVersion2,
    typescriptDefaults: $8c1eb71cc00dabf7$var$typescriptDefaults,
    javascriptDefaults: $8c1eb71cc00dabf7$var$javascriptDefaults,
    getTypeScriptWorker: $8c1eb71cc00dabf7$var$getTypeScriptWorker,
    getJavaScriptWorker: $8c1eb71cc00dabf7$var$getJavaScriptWorker
};

function $8c1eb71cc00dabf7$var$getMode() {
    var resolve, reject;
    return Promise.resolve(module.exports);
}
$8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.onLanguage("typescript", ()=>{
    return $8c1eb71cc00dabf7$var$getMode().then((mode)=>mode.setupTypeScript($8c1eb71cc00dabf7$var$typescriptDefaults));
});
$8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.onLanguage("javascript", ()=>{
    return $8c1eb71cc00dabf7$var$getMode().then((mode)=>mode.setupJavaScript($8c1eb71cc00dabf7$var$javascriptDefaults));
});
// src/typescript/lib/lib.index.ts
var $8c1eb71cc00dabf7$var$libFileSet = {};
$8c1eb71cc00dabf7$var$libFileSet["lib.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.dom.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.dom.iterable.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.collection.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.core.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.generator.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.iterable.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.promise.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.proxy.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.reflect.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.symbol.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2015.symbol.wellknown.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2016.array.include.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2016.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2016.full.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2017.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2017.full.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2017.intl.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2017.object.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2017.sharedmemory.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2017.string.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2017.typedarrays.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2018.asyncgenerator.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2018.asynciterable.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2018.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2018.full.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2018.intl.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2018.promise.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2018.regexp.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2019.array.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2019.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2019.full.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2019.object.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2019.string.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2019.symbol.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2020.bigint.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2020.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2020.full.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2020.intl.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2020.promise.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2020.sharedmemory.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2020.string.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2020.symbol.wellknown.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2021.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2021.full.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2021.promise.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2021.string.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es2021.weakref.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es5.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.es6.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.esnext.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.esnext.full.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.esnext.intl.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.esnext.promise.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.esnext.string.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.esnext.weakref.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.scripthost.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.webworker.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.webworker.importscripts.d.ts"] = true;
$8c1eb71cc00dabf7$var$libFileSet["lib.webworker.iterable.d.ts"] = true;
// src/typescript/languageFeatures.ts
var $8c1eb71cc00dabf7$var$IndentStyle;
(function(IndentStyle2) {
    IndentStyle2[IndentStyle2["None"] = 0] = "None";
    IndentStyle2[IndentStyle2["Block"] = 1] = "Block";
    IndentStyle2[IndentStyle2["Smart"] = 2] = "Smart";
})($8c1eb71cc00dabf7$var$IndentStyle || ($8c1eb71cc00dabf7$var$IndentStyle = {}));
function $8c1eb71cc00dabf7$var$flattenDiagnosticMessageText(diag, newLine, indent = 0) {
    if (typeof diag === "string") return diag;
    else if (diag === void 0) return "";
    let result = "";
    if (indent) {
        result += newLine;
        for(let i = 0; i < indent; i++)result += "  ";
    }
    result += diag.messageText;
    indent++;
    if (diag.next) for (const kid of diag.next)result += $8c1eb71cc00dabf7$var$flattenDiagnosticMessageText(kid, newLine, indent);
    return result;
}
function $8c1eb71cc00dabf7$var$displayPartsToString(displayParts) {
    if (displayParts) return displayParts.map((displayPart)=>displayPart.text).join("");
    return "";
}
var $8c1eb71cc00dabf7$var$Adapter = class {
    _textSpanToRange(model, span) {
        let p1 = model.getPositionAt(span.start);
        let p2 = model.getPositionAt(span.start + span.length);
        let { lineNumber: startLineNumber , column: startColumn  } = p1;
        let { lineNumber: endLineNumber , column: endColumn  } = p2;
        return {
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn
        };
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $8c1eb71cc00dabf7$var$LibFiles = class {
    isLibFile(uri) {
        if (!uri) return false;
        if (uri.path.indexOf("/lib.") === 0) return !!$8c1eb71cc00dabf7$var$libFileSet[uri.path.slice(1)];
        return false;
    }
    getOrCreateModel(fileName) {
        const uri = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.Uri.parse(fileName);
        const model = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.getModel(uri);
        if (model) return model;
        if (this.isLibFile(uri) && this._hasFetchedLibFiles) return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.createModel(this._libFiles[uri.path.slice(1)], "typescript", uri);
        const matchedLibFile = $8c1eb71cc00dabf7$var$typescriptDefaults.getExtraLibs()[fileName];
        if (matchedLibFile) return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.createModel(matchedLibFile.content, "typescript", uri);
        return null;
    }
    _containsLibFile(uris) {
        for (let uri of uris){
            if (this.isLibFile(uri)) return true;
        }
        return false;
    }
    async fetchLibFilesIfNecessary(uris) {
        if (!this._containsLibFile(uris)) return;
        await this._fetchLibFiles();
    }
    _fetchLibFiles() {
        if (!this._fetchLibFilesPromise) this._fetchLibFilesPromise = this._worker().then((w)=>w.getLibFiles()).then((libFiles)=>{
            this._hasFetchedLibFiles = true;
            this._libFiles = libFiles;
        });
        return this._fetchLibFilesPromise;
    }
    constructor(_worker){
        this._worker = _worker;
        this._libFiles = {};
        this._hasFetchedLibFiles = false;
        this._fetchLibFilesPromise = null;
    }
};
var $8c1eb71cc00dabf7$var$DiagnosticCategory;
(function(DiagnosticCategory2) {
    DiagnosticCategory2[DiagnosticCategory2["Warning"] = 0] = "Warning";
    DiagnosticCategory2[DiagnosticCategory2["Error"] = 1] = "Error";
    DiagnosticCategory2[DiagnosticCategory2["Suggestion"] = 2] = "Suggestion";
    DiagnosticCategory2[DiagnosticCategory2["Message"] = 3] = "Message";
})($8c1eb71cc00dabf7$var$DiagnosticCategory || ($8c1eb71cc00dabf7$var$DiagnosticCategory = {}));
var $8c1eb71cc00dabf7$var$DiagnosticsAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    dispose() {
        this._disposables.forEach((d)=>d && d.dispose());
        this._disposables = [];
    }
    async _doValidate(model) {
        const worker = await this._worker(model.uri);
        if (model.isDisposed()) return;
        const promises = [];
        const { noSyntaxValidation: noSyntaxValidation , noSemanticValidation: noSemanticValidation , noSuggestionDiagnostics: noSuggestionDiagnostics  } = this._defaults.getDiagnosticsOptions();
        if (!noSyntaxValidation) promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
        if (!noSemanticValidation) promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
        if (!noSuggestionDiagnostics) promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
        const allDiagnostics = await Promise.all(promises);
        if (!allDiagnostics || model.isDisposed()) return;
        const diagnostics = allDiagnostics.reduce((p, c)=>c.concat(p), []).filter((d)=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) === -1);
        const relatedUris = diagnostics.map((d)=>d.relatedInformation || []).reduce((p, c)=>c.concat(p), []).map((relatedInformation)=>relatedInformation.file ? $8c1eb71cc00dabf7$var$monaco_editor_core_exports.Uri.parse(relatedInformation.file.fileName) : null);
        await this._libFiles.fetchLibFilesIfNecessary(relatedUris);
        if (model.isDisposed()) return;
        $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, diagnostics.map((d)=>this._convertDiagnostics(model, d)));
    }
    _convertDiagnostics(model, diag) {
        const diagStart = diag.start || 0;
        const diagLength = diag.length || 1;
        const { lineNumber: startLineNumber , column: startColumn  } = model.getPositionAt(diagStart);
        const { lineNumber: endLineNumber , column: endColumn  } = model.getPositionAt(diagStart + diagLength);
        const tags = [];
        if (diag.reportsUnnecessary) tags.push($8c1eb71cc00dabf7$var$monaco_editor_core_exports.MarkerTag.Unnecessary);
        if (diag.reportsDeprecated) tags.push($8c1eb71cc00dabf7$var$monaco_editor_core_exports.MarkerTag.Deprecated);
        return {
            severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn,
            message: $8c1eb71cc00dabf7$var$flattenDiagnosticMessageText(diag.messageText, "\n"),
            code: diag.code.toString(),
            tags: tags,
            relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
        };
    }
    _convertRelatedInformation(model, relatedInformation) {
        if (!relatedInformation) return [];
        const result = [];
        relatedInformation.forEach((info)=>{
            let relatedResource = model;
            if (info.file) relatedResource = this._libFiles.getOrCreateModel(info.file.fileName);
            if (!relatedResource) return;
            const infoStart = info.start || 0;
            const infoLength = info.length || 1;
            const { lineNumber: startLineNumber , column: startColumn  } = relatedResource.getPositionAt(infoStart);
            const { lineNumber: endLineNumber , column: endColumn  } = relatedResource.getPositionAt(infoStart + infoLength);
            result.push({
                resource: relatedResource.uri,
                startLineNumber: startLineNumber,
                startColumn: startColumn,
                endLineNumber: endLineNumber,
                endColumn: endColumn,
                message: $8c1eb71cc00dabf7$var$flattenDiagnosticMessageText(info.messageText, "\n")
            });
        });
        return result;
    }
    _tsDiagnosticCategoryToMarkerSeverity(category) {
        switch(category){
            case 1:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.MarkerSeverity.Error;
            case 3:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.MarkerSeverity.Info;
            case 0:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.MarkerSeverity.Warning;
            case 2:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.MarkerSeverity.Hint;
        }
        return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.MarkerSeverity.Info;
    }
    constructor(_libFiles, _defaults, _selector, worker){
        super(worker);
        this._libFiles = _libFiles;
        this._defaults = _defaults;
        this._selector = _selector;
        this._disposables = [];
        this._listener = Object.create(null);
        const onModelAdd = (model)=>{
            if (model.getLanguageId() !== _selector) return;
            const maybeValidate = ()=>{
                const { onlyVisible: onlyVisible  } = this._defaults.getDiagnosticsOptions();
                if (onlyVisible) {
                    if (model.isAttachedToEditor()) this._doValidate(model);
                } else this._doValidate(model);
            };
            let handle;
            const changeSubscription = model.onDidChangeContent(()=>{
                clearTimeout(handle);
                handle = window.setTimeout(maybeValidate, 500);
            });
            const visibleSubscription = model.onDidChangeAttached(()=>{
                const { onlyVisible: onlyVisible  } = this._defaults.getDiagnosticsOptions();
                if (onlyVisible) {
                    if (model.isAttachedToEditor()) maybeValidate();
                    else $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, []);
                }
            });
            this._listener[model.uri.toString()] = {
                dispose () {
                    changeSubscription.dispose();
                    visibleSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            maybeValidate();
        };
        const onModelRemoved = (model)=>{
            $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, []);
            const key = model.uri.toString();
            if (this._listener[key]) {
                this._listener[key].dispose();
                delete this._listener[key];
            }
        };
        this._disposables.push($8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.onDidCreateModel((model)=>onModelAdd(model)));
        this._disposables.push($8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push($8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        this._disposables.push({
            dispose () {
                for (const model of $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.getModels())onModelRemoved(model);
            }
        });
        const recomputeDiagostics = ()=>{
            for (const model of $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.getModels()){
                onModelRemoved(model);
                onModelAdd(model);
            }
        };
        this._disposables.push(this._defaults.onDidChange(recomputeDiagostics));
        this._disposables.push(this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        $8c1eb71cc00dabf7$var$monaco_editor_core_exports.editor.getModels().forEach((model)=>onModelAdd(model));
    }
};
var $8c1eb71cc00dabf7$var$SuggestAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    get triggerCharacters() {
        return [
            "."
        ];
    }
    async provideCompletionItems(model, position, _context, token) {
        const wordInfo = model.getWordUntilPosition(position);
        const wordRange = new $8c1eb71cc00dabf7$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getCompletionsAtPosition(resource.toString(), offset);
        if (!info || model.isDisposed()) return;
        const suggestions = info.entries.map((entry)=>{
            var ref;
            let range = wordRange;
            if (entry.replacementSpan) {
                const p1 = model.getPositionAt(entry.replacementSpan.start);
                const p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                range = new $8c1eb71cc00dabf7$var$monaco_editor_core_exports.Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
            }
            const tags = [];
            if (((ref = entry.kindModifiers) === null || ref === void 0 ? void 0 : ref.indexOf("deprecated")) !== -1) tags.push($8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemTag.Deprecated);
            return {
                uri: resource,
                position: position,
                offset: offset,
                range: range,
                label: entry.name,
                insertText: entry.name,
                sortText: entry.sortText,
                kind: $8c1eb71cc00dabf7$var$SuggestAdapter.convertKind(entry.kind),
                tags: tags
            };
        });
        return {
            suggestions: suggestions
        };
    }
    async resolveCompletionItem(item, token) {
        const myItem = item;
        const resource = myItem.uri;
        const position = myItem.position;
        const offset = myItem.offset;
        const worker = await this._worker(resource);
        const details = await worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label);
        if (!details) return myItem;
        return {
            uri: resource,
            position: position,
            label: details.name,
            kind: $8c1eb71cc00dabf7$var$SuggestAdapter.convertKind(details.kind),
            detail: $8c1eb71cc00dabf7$var$displayPartsToString(details.displayParts),
            documentation: {
                value: $8c1eb71cc00dabf7$var$SuggestAdapter.createDocumentationString(details)
            }
        };
    }
    static convertKind(kind) {
        switch(kind){
            case $8c1eb71cc00dabf7$var$Kind.primitiveType:
            case $8c1eb71cc00dabf7$var$Kind.keyword:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Keyword;
            case $8c1eb71cc00dabf7$var$Kind.variable:
            case $8c1eb71cc00dabf7$var$Kind.localVariable:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Variable;
            case $8c1eb71cc00dabf7$var$Kind.memberVariable:
            case $8c1eb71cc00dabf7$var$Kind.memberGetAccessor:
            case $8c1eb71cc00dabf7$var$Kind.memberSetAccessor:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Field;
            case $8c1eb71cc00dabf7$var$Kind.function:
            case $8c1eb71cc00dabf7$var$Kind.memberFunction:
            case $8c1eb71cc00dabf7$var$Kind.constructSignature:
            case $8c1eb71cc00dabf7$var$Kind.callSignature:
            case $8c1eb71cc00dabf7$var$Kind.indexSignature:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Function;
            case $8c1eb71cc00dabf7$var$Kind.enum:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Enum;
            case $8c1eb71cc00dabf7$var$Kind.module:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Module;
            case $8c1eb71cc00dabf7$var$Kind.class:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Class;
            case $8c1eb71cc00dabf7$var$Kind.interface:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Interface;
            case $8c1eb71cc00dabf7$var$Kind.warning:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.File;
        }
        return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.CompletionItemKind.Property;
    }
    static createDocumentationString(details) {
        let documentationString = $8c1eb71cc00dabf7$var$displayPartsToString(details.documentation);
        if (details.tags) for (const tag of details.tags)documentationString += `

${$8c1eb71cc00dabf7$var$tagToString(tag)}`;
        return documentationString;
    }
};
function $8c1eb71cc00dabf7$var$tagToString(tag) {
    let tagLabel = `*@${tag.name}*`;
    if (tag.name === "param" && tag.text) {
        const [paramName, ...rest] = tag.text;
        tagLabel += `\`${paramName.text}\``;
        if (rest.length > 0) tagLabel += ` \u2014 ${rest.map((r)=>r.text).join(" ")}`;
    } else if (Array.isArray(tag.text)) tagLabel += ` \u2014 ${tag.text.map((r)=>r.text).join(" ")}`;
    else if (tag.text) tagLabel += ` \u2014 ${tag.text}`;
    return tagLabel;
}
var $8c1eb71cc00dabf7$var$SignatureHelpAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    static _toSignatureHelpTriggerReason(context) {
        switch(context.triggerKind){
            case $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.TriggerCharacter:
                if (context.triggerCharacter) {
                    if (context.isRetrigger) return {
                        kind: "retrigger",
                        triggerCharacter: context.triggerCharacter
                    };
                    else return {
                        kind: "characterTyped",
                        triggerCharacter: context.triggerCharacter
                    };
                } else return {
                    kind: "invoked"
                };
            case $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.ContentChange:
                return context.isRetrigger ? {
                    kind: "retrigger"
                } : {
                    kind: "invoked"
                };
            case $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.Invoke:
            default:
                return {
                    kind: "invoked"
                };
        }
    }
    async provideSignatureHelp(model, position, token, context) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getSignatureHelpItems(resource.toString(), offset, {
            triggerReason: $8c1eb71cc00dabf7$var$SignatureHelpAdapter._toSignatureHelpTriggerReason(context)
        });
        if (!info || model.isDisposed()) return;
        const ret = {
            activeSignature: info.selectedItemIndex,
            activeParameter: info.argumentIndex,
            signatures: []
        };
        info.items.forEach((item)=>{
            const signature = {
                label: "",
                parameters: []
            };
            signature.documentation = {
                value: $8c1eb71cc00dabf7$var$displayPartsToString(item.documentation)
            };
            signature.label += $8c1eb71cc00dabf7$var$displayPartsToString(item.prefixDisplayParts);
            item.parameters.forEach((p, i, a)=>{
                const label = $8c1eb71cc00dabf7$var$displayPartsToString(p.displayParts);
                const parameter = {
                    label: label,
                    documentation: {
                        value: $8c1eb71cc00dabf7$var$displayPartsToString(p.documentation)
                    }
                };
                signature.label += label;
                signature.parameters.push(parameter);
                if (i < a.length - 1) signature.label += $8c1eb71cc00dabf7$var$displayPartsToString(item.separatorDisplayParts);
            });
            signature.label += $8c1eb71cc00dabf7$var$displayPartsToString(item.suffixDisplayParts);
            ret.signatures.push(signature);
        });
        return {
            value: ret,
            dispose () {}
        };
    }
    constructor(){
        super(...arguments);
        this.signatureHelpTriggerCharacters = [
            "(",
            ","
        ];
    }
};
var $8c1eb71cc00dabf7$var$QuickInfoAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    async provideHover(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getQuickInfoAtPosition(resource.toString(), offset);
        if (!info || model.isDisposed()) return;
        const documentation = $8c1eb71cc00dabf7$var$displayPartsToString(info.documentation);
        const tags = info.tags ? info.tags.map((tag)=>$8c1eb71cc00dabf7$var$tagToString(tag)).join("  \n\n") : "";
        const contents = $8c1eb71cc00dabf7$var$displayPartsToString(info.displayParts);
        return {
            range: this._textSpanToRange(model, info.textSpan),
            contents: [
                {
                    value: "```typescript\n" + contents + "\n```\n"
                },
                {
                    value: documentation + (tags ? "\n\n" + tags : "")
                }
            ]
        };
    }
};
var $8c1eb71cc00dabf7$var$OccurrencesAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    async provideDocumentHighlights(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getOccurrencesAtPosition(resource.toString(), offset);
        if (!entries || model.isDisposed()) return;
        return entries.map((entry)=>{
            return {
                range: this._textSpanToRange(model, entry.textSpan),
                kind: entry.isWriteAccess ? $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write : $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text
            };
        });
    }
};
var $8c1eb71cc00dabf7$var$DefinitionAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    async provideDefinition(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getDefinitionAtPosition(resource.toString(), offset);
        if (!entries || model.isDisposed()) return;
        await this._libFiles.fetchLibFilesIfNecessary(entries.map((entry)=>$8c1eb71cc00dabf7$var$monaco_editor_core_exports.Uri.parse(entry.fileName)));
        if (model.isDisposed()) return;
        const result = [];
        for (let entry of entries){
            const refModel = this._libFiles.getOrCreateModel(entry.fileName);
            if (refModel) result.push({
                uri: refModel.uri,
                range: this._textSpanToRange(refModel, entry.textSpan)
            });
        }
        return result;
    }
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
};
var $8c1eb71cc00dabf7$var$ReferenceAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    async provideReferences(model, position, context, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getReferencesAtPosition(resource.toString(), offset);
        if (!entries || model.isDisposed()) return;
        await this._libFiles.fetchLibFilesIfNecessary(entries.map((entry)=>$8c1eb71cc00dabf7$var$monaco_editor_core_exports.Uri.parse(entry.fileName)));
        if (model.isDisposed()) return;
        const result = [];
        for (let entry of entries){
            const refModel = this._libFiles.getOrCreateModel(entry.fileName);
            if (refModel) result.push({
                uri: refModel.uri,
                range: this._textSpanToRange(refModel, entry.textSpan)
            });
        }
        return result;
    }
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
};
var $8c1eb71cc00dabf7$var$OutlineAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    async provideDocumentSymbols(model, token) {
        const resource = model.uri;
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const items = await worker.getNavigationBarItems(resource.toString());
        if (!items || model.isDisposed()) return;
        const convert = (bucket, item, containerLabel)=>{
            let result2 = {
                name: item.text,
                detail: "",
                kind: $8c1eb71cc00dabf7$var$outlineTypeTable[item.kind] || $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Variable,
                range: this._textSpanToRange(model, item.spans[0]),
                selectionRange: this._textSpanToRange(model, item.spans[0]),
                tags: []
            };
            if (containerLabel) result2.containerName = containerLabel;
            if (item.childItems && item.childItems.length > 0) for (let child of item.childItems)convert(bucket, child, result2.name);
            bucket.push(result2);
        };
        let result = [];
        items.forEach((item)=>convert(result, item));
        return result;
    }
};
var $8c1eb71cc00dabf7$var$Kind = class {
};
$8c1eb71cc00dabf7$var$Kind.unknown = "";
$8c1eb71cc00dabf7$var$Kind.keyword = "keyword";
$8c1eb71cc00dabf7$var$Kind.script = "script";
$8c1eb71cc00dabf7$var$Kind.module = "module";
$8c1eb71cc00dabf7$var$Kind.class = "class";
$8c1eb71cc00dabf7$var$Kind.interface = "interface";
$8c1eb71cc00dabf7$var$Kind.type = "type";
$8c1eb71cc00dabf7$var$Kind.enum = "enum";
$8c1eb71cc00dabf7$var$Kind.variable = "var";
$8c1eb71cc00dabf7$var$Kind.localVariable = "local var";
$8c1eb71cc00dabf7$var$Kind.function = "function";
$8c1eb71cc00dabf7$var$Kind.localFunction = "local function";
$8c1eb71cc00dabf7$var$Kind.memberFunction = "method";
$8c1eb71cc00dabf7$var$Kind.memberGetAccessor = "getter";
$8c1eb71cc00dabf7$var$Kind.memberSetAccessor = "setter";
$8c1eb71cc00dabf7$var$Kind.memberVariable = "property";
$8c1eb71cc00dabf7$var$Kind.constructorImplementation = "constructor";
$8c1eb71cc00dabf7$var$Kind.callSignature = "call";
$8c1eb71cc00dabf7$var$Kind.indexSignature = "index";
$8c1eb71cc00dabf7$var$Kind.constructSignature = "construct";
$8c1eb71cc00dabf7$var$Kind.parameter = "parameter";
$8c1eb71cc00dabf7$var$Kind.typeParameter = "type parameter";
$8c1eb71cc00dabf7$var$Kind.primitiveType = "primitive type";
$8c1eb71cc00dabf7$var$Kind.label = "label";
$8c1eb71cc00dabf7$var$Kind.alias = "alias";
$8c1eb71cc00dabf7$var$Kind.const = "const";
$8c1eb71cc00dabf7$var$Kind.let = "let";
$8c1eb71cc00dabf7$var$Kind.warning = "warning";
var $8c1eb71cc00dabf7$var$outlineTypeTable = Object.create(null);
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.module] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Module;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.class] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Class;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.enum] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Enum;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.interface] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Interface;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.memberFunction] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Method;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.memberVariable] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.memberGetAccessor] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.memberSetAccessor] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.variable] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.const] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.localVariable] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.variable] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.function] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Function;
$8c1eb71cc00dabf7$var$outlineTypeTable[$8c1eb71cc00dabf7$var$Kind.localFunction] = $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.SymbolKind.Function;
var $8c1eb71cc00dabf7$var$FormatHelper = class extends $8c1eb71cc00dabf7$var$Adapter {
    static _convertOptions(options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: 2,
            NewLineCharacter: "\n",
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    }
    _convertTextChanges(model, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(model, change.span)
        };
    }
};
var $8c1eb71cc00dabf7$var$FormatAdapter = class extends $8c1eb71cc00dabf7$var$FormatHelper {
    async provideDocumentRangeFormattingEdits(model, range, options, token) {
        const resource = model.uri;
        const startOffset = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const endOffset = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const edits = await worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, $8c1eb71cc00dabf7$var$FormatHelper._convertOptions(options));
        if (!edits || model.isDisposed()) return;
        return edits.map((edit)=>this._convertTextChanges(model, edit));
    }
};
var $8c1eb71cc00dabf7$var$FormatOnTypeAdapter = class extends $8c1eb71cc00dabf7$var$FormatHelper {
    get autoFormatTriggerCharacters() {
        return [
            ";",
            "}",
            "\n"
        ];
    }
    async provideOnTypeFormattingEdits(model, position, ch, options, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const edits = await worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, $8c1eb71cc00dabf7$var$FormatHelper._convertOptions(options));
        if (!edits || model.isDisposed()) return;
        return edits.map((edit)=>this._convertTextChanges(model, edit));
    }
};
var $8c1eb71cc00dabf7$var$CodeActionAdaptor = class extends $8c1eb71cc00dabf7$var$FormatHelper {
    async provideCodeActions(model, range, context, token) {
        const resource = model.uri;
        const start = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const end = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const formatOptions = $8c1eb71cc00dabf7$var$FormatHelper._convertOptions(model.getOptions());
        const errorCodes = context.markers.filter((m)=>m.code).map((m)=>m.code).map(Number);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const codeFixes = await worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions);
        if (!codeFixes || model.isDisposed()) return {
            actions: [],
            dispose: ()=>{}
        };
        const actions = codeFixes.filter((fix)=>{
            return fix.changes.filter((change)=>change.isNewFile).length === 0;
        }).map((fix)=>{
            return this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
        });
        return {
            actions: actions,
            dispose: ()=>{}
        };
    }
    _tsCodeFixActionToMonacoCodeAction(model, context, codeFix) {
        const edits = [];
        for (const change of codeFix.changes)for (const textChange of change.textChanges)edits.push({
            resource: model.uri,
            edit: {
                range: this._textSpanToRange(model, textChange.span),
                text: textChange.newText
            }
        });
        const action = {
            title: codeFix.description,
            edit: {
                edits: edits
            },
            diagnostics: context.markers,
            kind: "quickfix"
        };
        return action;
    }
};
var $8c1eb71cc00dabf7$var$RenameAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    async provideRenameEdits(model, position, newName, token) {
        const resource = model.uri;
        const fileName = resource.toString();
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const renameInfo = await worker.getRenameInfo(fileName, offset, {
            allowRenameOfImportPath: false
        });
        if (renameInfo.canRename === false) return {
            edits: [],
            rejectReason: renameInfo.localizedErrorMessage
        };
        if (renameInfo.fileToRename !== void 0) throw new Error("Renaming files is not supported.");
        const renameLocations = await worker.findRenameLocations(fileName, offset, false, false, false);
        if (!renameLocations || model.isDisposed()) return;
        const edits = [];
        for (const renameLocation of renameLocations){
            const model2 = this._libFiles.getOrCreateModel(renameLocation.fileName);
            if (model2) edits.push({
                resource: model2.uri,
                edit: {
                    range: this._textSpanToRange(model2, renameLocation.textSpan),
                    text: newName
                }
            });
            else throw new Error(`Unknown file ${renameLocation.fileName}.`);
        }
        return {
            edits: edits
        };
    }
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
};
var $8c1eb71cc00dabf7$var$InlayHintsAdapter = class extends $8c1eb71cc00dabf7$var$Adapter {
    async provideInlayHints(model, range, token) {
        const resource = model.uri;
        const fileName = resource.toString();
        const start = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const end = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const worker = await this._worker(resource);
        if (model.isDisposed()) return [];
        const hints = await worker.provideInlayHints(fileName, start, end);
        return hints.map((hint)=>{
            return {
                ...hint,
                position: model.getPositionAt(hint.position),
                kind: this._convertHintKind(hint.kind)
            };
        });
    }
    _convertHintKind(kind) {
        switch(kind){
            case "Parameter":
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.InlayHintKind.Parameter;
            case "Type":
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.InlayHintKind.Type;
            default:
                return $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.InlayHintKind.Other;
        }
    }
};
// src/typescript/tsMode.ts
var $8c1eb71cc00dabf7$var$javaScriptWorker;
var $8c1eb71cc00dabf7$var$typeScriptWorker;
function $8c1eb71cc00dabf7$export$fe02e3e074fe0a0e(defaults) {
    $8c1eb71cc00dabf7$var$typeScriptWorker = $8c1eb71cc00dabf7$var$setupMode(defaults, "typescript");
}
function $8c1eb71cc00dabf7$export$4911c01acb361b94(defaults) {
    $8c1eb71cc00dabf7$var$javaScriptWorker = $8c1eb71cc00dabf7$var$setupMode(defaults, "javascript");
}
function $8c1eb71cc00dabf7$export$42142bcd5970f8e8() {
    return new Promise((resolve, reject)=>{
        if (!$8c1eb71cc00dabf7$var$javaScriptWorker) return reject("JavaScript not registered!");
        resolve($8c1eb71cc00dabf7$var$javaScriptWorker);
    });
}
function $8c1eb71cc00dabf7$export$f4433c6b950b070e() {
    return new Promise((resolve, reject)=>{
        if (!$8c1eb71cc00dabf7$var$typeScriptWorker) return reject("TypeScript not registered!");
        resolve($8c1eb71cc00dabf7$var$typeScriptWorker);
    });
}
function $8c1eb71cc00dabf7$var$setupMode(defaults, modeId) {
    const client = new $8c1eb71cc00dabf7$var$WorkerManager(modeId, defaults);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    const libFiles = new $8c1eb71cc00dabf7$var$LibFiles(worker);
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(modeId, new $8c1eb71cc00dabf7$var$SuggestAdapter(worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerSignatureHelpProvider(modeId, new $8c1eb71cc00dabf7$var$SignatureHelpAdapter(worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerHoverProvider(modeId, new $8c1eb71cc00dabf7$var$QuickInfoAdapter(worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(modeId, new $8c1eb71cc00dabf7$var$OccurrencesAdapter(worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerDefinitionProvider(modeId, new $8c1eb71cc00dabf7$var$DefinitionAdapter(libFiles, worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerReferenceProvider(modeId, new $8c1eb71cc00dabf7$var$ReferenceAdapter(libFiles, worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(modeId, new $8c1eb71cc00dabf7$var$OutlineAdapter(worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(modeId, new $8c1eb71cc00dabf7$var$FormatAdapter(worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerOnTypeFormattingEditProvider(modeId, new $8c1eb71cc00dabf7$var$FormatOnTypeAdapter(worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerCodeActionProvider(modeId, new $8c1eb71cc00dabf7$var$CodeActionAdaptor(worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerRenameProvider(modeId, new $8c1eb71cc00dabf7$var$RenameAdapter(libFiles, worker));
    $8c1eb71cc00dabf7$var$monaco_editor_core_exports.languages.registerInlayHintsProvider(modeId, new $8c1eb71cc00dabf7$var$InlayHintsAdapter(worker));
    new $8c1eb71cc00dabf7$var$DiagnosticsAdapter(libFiles, defaults, modeId, worker);
    return worker;
}

});

