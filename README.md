![unknown](https://user-images.githubusercontent.com/19529767/186768847-1f1abcbc-49da-4e39-895f-606b326890a8.png)
# To edit a package:
You must include this script in one server file to allow the editor to view and manage your files:

`Server/Index.lua`
```lua
local editor = Package.Require("nanos-editor/hook.lua")
editor.setup()
```
You can now press `F8` to open the editor in the game
