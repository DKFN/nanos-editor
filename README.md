# To edit a package:
You must include this script in one server file to allow the editor to view and manage your files:

`Server/Index.lua`
```lua
local editor = Package.Require("nanos-editor/hook.lua")
editor.setup()
```
