function attachEventsToWebUi(webUi)
    webUi:Subscribe("NIDE:CLIENT_ASK_FILE_CONTENTS", handleAsKFileContents)
    webUi:Subscribe("NIDE:DELETE_FILE", function()
        if (currentEditingFile == nil) then
            Package.Error("No file is selected")
        else
            Events.CallRemote("NIDE:SERVER_DELETE_FILE", currentEditingFile)
        end
    end)
    webUi:Subscribe("NIDE:SAVE_FILE", function(fileContent)
        Events.CallRemote("NIDE:SERVER_SAVE_FILE", currentEditingFile, fileContent)
    end)
    webUi:Subscribe("NIDE:PKG_RELOAD", function()
        Events.CallRemote("NIDE:SERVER_PKG_RELOAD", currentEditingFile.packageName)
    end)
    webUi:Subscribe("Ready", function()
        Events.CallRemote("NIDE:CLIENT_INIT_IDE")
        Client.SetMouseEnabled(true)
        Client.SetInputEnabled(true)
        Client.SetChatVisibility(false)
    end)
    webUi:SetFocus()
end