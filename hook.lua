return {
    setup = function()
        Events.Subscribe("NIDE:ON_ASK_PKG_INFOS", function()
            Package.Log("Aksed for infos in children package")
            Events.Call("NIDE:SEND_PKG_INFOS", Package.GetPath(), {
                files = Package.GetFiles()
            })
        end)
    end
}