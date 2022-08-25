return {
    setup = function()
        Events.Subscribe("NIDE:ON_ASK_PKG_INFOS", function()
            Events.Call("NIDE:SEND_PKG_INFOS", Package.GetPath(), {
                files = Package.GetFiles()
            })
        end)
    end
}