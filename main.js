/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** Simple extension that adds a "File > Hello World" menu item. Inserts "Hello, world!" at cursor pos. */
define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");
        


    // Function to run when the menu item is clicked
    function handle_contextshowinfiletree() {
        var ProjectManager = brackets.getModule("project/ProjectManager"),
            editor = EditorManager.getFocusedEditor();
                
        //revealing the file
        if(editor){
            
            var file = editor.getFile();
            console.log(file);
            ProjectManager.showInTree (editor.getFile());    
        }        
    }


    // First, register a command - a UI-less object associating an id to a handler
    var CMD_SWIFT_CONTEXT = "dbe.qsift.context";   // package-style naming to avoid collisions
    CommandManager.register("Show In File Tree", CMD_SWIFT_CONTEXT, handle_contextshowinfiletree);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)        
    var menu = Menus.getContextMenu( Menus.ContextMenuIds.EDITOR_MENU );
    menu.addMenuItem( CMD_SWIFT_CONTEXT, "Ctrl-ALT-F" );
    
    console.log("testing");
});