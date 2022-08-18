local EDITOR_GUI_DEV = true;
local editorWindowOpen = false;

local editorWebUi;

local pkgData;

Input.Register("OpenEditor", "F8")

Input.Bind("OpenEditor", InputEvent.Pressed, function()
    if (editorWindowOpen) then
        editorWebUi:Destroy()
    else
            editorWebUi = WebUI(
                    "NanosIDE",
                    EDITOR_GUI_DEV and "http://localhost:1234/" or "file://gui/index.html",
                    true
            )

            editorWebUi:Subscribe("NIDE:CLIENT_ASK_FILE_CONTENTS", function(data)
                local parsedData = JSON.parse(data)
                Package.Log("Received asked content from parsed content"..NanosUtils.Dump(parsedData))
                Events.CallRemote("NIDE:JS_ASK_FILE_CONTENTS", parsedData.packageName, parsedData.filePath)
            end)
        end
    end)

Events.Subscribe("NIDE:CLIENT_SEND_PKG_INFOS", function(_pkgData)
    -- Package.Log("Received frontend data for pkg : "..NanosUtils.Dump(_pkgData))
    pkgData = JSON.parse(_pkgData)
    editorWebUi:CallEvent("NIDE:JS_SEND_PKG_INFOS", _pkgData)
end)

Events.Subscribe("NIDE:CLIENT_SEND_FILE_CONTENTS", function(fileContent)
    editorWebUi:CallEvent("NIDE:JS_SEND_SEND_FILE_CONTENTS", fileContent)

end)