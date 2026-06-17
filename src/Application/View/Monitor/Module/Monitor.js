//{{RAX}}
import { version } from "/Module/Priya.js";
import { root } from "/Module/Web.js";
import { dialog } from "/Dialog/Module/Dialog.js";
import { monitor } from "/Application/Monitor/Module/Monitor.js"
import { taskbar } from "/Application/Desktop/Module/Taskbar.js";
require(
    [
        root() + 'Application/Monitor/Css/Monitor.css?' + version(),
        root() + 'Dialog/Css/Dialog.css?' + version(),
    ],
    function(){
        monitor.init("{{$id}}");
        dialog.init("{{$id}}");
        taskbar.active("{{$id}}");
    }
);