local function buildFilePath(pkgName, filePath)
    return "Packages/"..pkgName.."/"..filePath
end

Events.Subscribe("NIDE:JS_ASK_FILE_CONTENTS", function (ply, pkgName, filePath)
    local path = buildFilePath(pkgName, filePath)
    Package.Log("Opening : "..path)
    local file = File(path)
    file:ReadAsync(file:Size(), function(fileContent)
        -- Package.Log("File content : "..fileContent)
        Events.CallRemote("NIDE:CLIENT_SEND_FILE_CONTENTS", ply, fileContent)
        file:Close()
    end)
end)

Events.Subscribe("NIDE:SERVER_DELETE_FILE", function(ply, fileData)
    Package.Log("Asked to delete file with data : "..NanosUtils.Dump(fileData))
    local ret = File.Remove(buildFilePath(fileData.packageName, fileData.filePath))
    Package.Log("Returned : "..ret)
end)

Events.Subscribe("NIDE:SERVER_SAVE_FILE", function(ply, fileData, fileContent)
    local file = File(buildFilePath(fileData.packageName, fileData.filePath), true)
    file:Seek(0)
    file:Write(fileContent)
    file:Flush()
    file:Close()
end)

Events.Subscribe("NIDE:SERVER_PKG_RELOAD", function(ply, pkgName)
    Package.Log("Reloading package "..pkgName)
    Server.ReloadPackage(pkgName)
end)