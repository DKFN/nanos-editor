Events.Subscribe("NIDE:JS_ASK_FILE_CONTENTS", function (ply, pkgName, filePath)
    local path = "Packages/"..pkgName.."/"..filePath
    Package.Log("Opening : "..path)
    local file = File(path)
    local fileContent = file:Read()
    Package.Log("File content : "..fileContent)
    Events.CallRemote("NIDE:CLIENT_SEND_FILE_CONTENTS", ply, fileContent)
end)