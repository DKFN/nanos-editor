local IDE_DEV = true

if IDE_DEV then
    local __editor = Package.Require("../hook.lua")
    __editor.setup()
end

local _ = Package.Require("lodash.lua")
local fr = Package.Require("FileReader.lua")

local pkgData = {}

Events.Subscribe("NIDE:SEND_PKG_INFOS", function(pkgName, infos)
    local newFiles = _.filter(infos.files, function(file)
        return string.sub(file, 1, 4) ~= ".git"
    end)
    pkgData[pkgName] = {
        files = newFiles
    }
end)

local function loadFileContent(packageName, packageFiles)
    local fileHandle = io.open( "Packages/"..packageName..packageFiles, "r" )
    local sContents = fileHandle:read( "*all" )
    return sContents
end

Events.Subscribe("NIDE:GET_FILE_CONTENTS", loadFileContent)


Events.Subscribe("NIDE:CLIENT_INIT_IDE", function(player)
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