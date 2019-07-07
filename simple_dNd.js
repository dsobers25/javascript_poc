window.addEventListener("load", init, false);

function init() {

    var dragItem = document.getElementById("dragItem");
    var dropArea = document.getElementById("dropArea");
    
    function startDragItemFunc(e) {
        e.dataTransfer.setData("text", e.target.id);
        console.log("Starting Drag");
    }

    function dropItemFunc(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        var dragEl = document.getElementById(data)
        e.target.innerHTML = dragEl.innerHTML;
        dragEl.innerHTML = "";
    }
    
    function dragOverItemFunc(e) {
        e.preventDefault();
        console.log("Starting Drag");
    }

    dragItem.addEventListener("dragstart", startDragItemFunc, false);
	dropArea.addEventListener("drop", dropItemFunc, false);
	dropArea.addEventListener("dragover", dragOverItemFunc, false);
				

}