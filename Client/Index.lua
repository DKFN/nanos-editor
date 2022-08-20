local EDITOR_GUI_DEV = true;
local editorWindowOpen = false;
local crtlMode = false

local editorWebUi;

local pkgData;

Input.Register("OpenEditor", "F8")
Input.Register("CrtlEditor", "LeftControl")
Input.Register("CrtlEditor_ReloadAllPackages", "R")
Input.Register("CrtlEditor_SaveCurrentFile", "S")

local handleAsKFileContents = function(data)
    local parsedData = JSON.parse(data)
    Package.Log("Received asked content from parsed content"..NanosUtils.Dump(parsedData))
    Events.CallRemote("NIDE:JS_ASK_FILE_CONTENTS", parsedData.packageName, parsedData.filePath)
end

-- Editor init
Input.Bind("OpenEditor", InputEvent.Pressed, function()
    if (editorWebUi == nil) then
        editorWebUi = WebUI(
            "NanosIDE",
            EDITOR_GUI_DEV and "http://localhost:1234/" or "file://gui/index.html",
            true
        )

        editorWebUi:Subscribe("NIDE:CLIENT_ASK_FILE_CONTENTS", handleAsKFileContents)
        editorWebUi:Subscribe("Ready", function()
            Events.CallRemote("NIDE:CLIENT_INIT_IDE")
            Client.SetMouseEnabled(true)
            Client.SetInputEnabled(true)
        end)
        editorWebUi:SetFocus()
    else
        if (editorWebUi:IsValid()) then
            -- editorWebUi:Unsuscribe("NIDE:CLIENT_ASK_FILE_CONTENTS", handleAsKFileContents)
            editorWebUi:RemoveFocus()
            Timer.SetTimeout(function()
                editorWebUi:Destroy()
                editorWebUi = nil
            end, 100)
            Client.SetMouseEnabled(false)
            Client.SetInputEnabled(true)
        end
    end
end)

Events.Subscribe("NIDE:CLIENT_SEND_PKG_INFOS", function(_pkgData)
    Package.Log("Received frontend data for pkg :< "..NanosUtils.Dump(_pkgData))
    if editorWebUi then
        pkgData = JSON.parse(_pkgData)
        editorWebUi:CallEvent("NIDE:JS_SEND_PKG_INFOS", _pkgData)
    end
end)

-- File browsing
Events.Subscribe("NIDE:CLIENT_SEND_FILE_CONTENTS", function(fileContent)
    editorWebUi:CallEvent("NIDE:JS_SEND_SEND_FILE_CONTENTS", fileContent)
end)

-- Control actions
Input.Bind("ControlMode", Input.Pressed, function()
    crtlMode = true
end)


Input.Bind("ControlMode", Input.Released, function()
    crtlMode = false
end)