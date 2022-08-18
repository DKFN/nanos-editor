local fr = Package.Require("FileReader.lua")

local pkgData = {}

Events.Subscribe("NIDE:SEND_PKG_INFOS", function(pkgName, infos)
    Package.Log("Received package infos : "..NanosUtils.Dump(infos))
    pkgData[pkgName] = infos
end)

Events.Subscribe("NIDE:GET_FILE_CONTENTS", function(packageName, packageFiles)
    local stringContent = loadFileContent(packageName, packageFiles)
end)

local function loadFileContent(packageName, packageFiles)
    local fileHandle = io.open( "Packages/"..packageName..packageFiles, "r" )
    local sContents = fileHandle:read( "*all" )
    Package.Log("File content : "..sContents)
end


Package.Subscribe("Load", function()
    Events.Call("NIDE:GET_PKG_FILES", nil)
    Timer.SetInterval(function()
        Events.Call("NIDE:ON_ASK_PKG_INFOS")
    end, 1000)

    Timer.SetInterval(function()
        Events.BroadcastRemote("NIDE:CLIENT_SEND_PKG_INFOS", JSON.stringify(pkgData))
    end, 1000)
end)