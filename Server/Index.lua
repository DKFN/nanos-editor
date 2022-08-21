local fr = Package.Require("FileReader.lua")

local pkgData = {}

Events.Subscribe("NIDE:SEND_PKG_INFOS", function(pkgName, infos)
    Package.Log("Received package infos : "..NanosUtils.Dump(infos))
    pkgData[pkgName] = infos
end)

local function loadFileContent(packageName, packageFiles)
    local fileHandle = io.open( "Packages/"..packageName..packageFiles, "r" )
    local sContents = fileHandle:read( "*all" )
    Package.Log("File content : "..sContents)
    return sContents
end

Events.Subscribe("NIDE:GET_FILE_CONTENTS", function(packageName, packageFiles)
    local stringContent = loadFileContent(packageName, packageFiles)
end)


Events.Subscribe("NIDE:CLIENT_INIT_IDE", function(player)
    Package.Log("Current pkg data : "..NanosUtils.Dump(pkgData))
    Package.Log("Client has initied the IDE"..NanosUtils.Dump(player))
    Events.CallRemote("NIDE:CLIENT_SEND_PKG_INFOS", player, JSON.stringify(pkgData))
end)


Package.Subscribe("Load", function()
    Events.Call("NIDE:GET_PKG_FILES", nil)
    Events.Call("NIDE:ON_ASK_PKG_INFOS")
    Timer.SetInterval(function()
        Events.Call("NIDE:ON_ASK_PKG_INFOS")
    end, 10000)

    Timer.SetInterval(function()
        Events.BroadcastRemote("NIDE:CLIENT_SEND_PKG_INFOS", JSON.stringify(pkgData))
    end, 10000)
end)