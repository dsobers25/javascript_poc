window.addEventListener("load", init, false);

function init() {

    var addDivsion = document.getElementById("addDiv");
    
    var brandNewDiv = function () {
      
        console.log("hey I am going to figure this out");
        var newD = document.createElement("div");
        document.body.appendChild(newD);
        newD.id = 'newDiv';
        newD.innerHTML = "<h1>Hey I'm new</h1>";

        var newColumn1 = document.createElement("div");
        newDiv.appendChild(newColumn1);
        newColumn1.id = 'firstCol';

        var newfield1 = document.createElement("div");
        firstCol.appendChild(newfield1);
        newfield1.id = "child1"; 
        newfield1.className = "childCol1";
        newfield1.innerHTML= "<h2>I am child 1</h2>";

        var newfield2 = document.createElement("div");
        firstCol.appendChild(newfield2);
        newfield2.id = "child2"; 
        newfield2.className = "childCol1";
        newfield2.innerHTML= "<h2>I am child 2</h2>";

        var newfield3 = document.createElement("div");
        firstCol.appendChild(newfield3);
        newfield3.id = "child3"; 
        newfield3.className = "childCol1";
        newfield3.innerHTML= "<h2>I am child 3</h2>";

        var newfield4 = document.createElement("div");
        firstCol.appendChild(newfield4);
        newfield4.id = "child4"; 
        newfield4.className = "childCol1";
        newfield4.innerHTML= "<h2>I am child 4</h2>";

        var newfield5 = document.createElement("div");
        firstCol.appendChild(newfield5);
        newfield5.id = "child5"; 
        newfield5.className = "childCol1";
        newfield5.innerHTML= "<h2>I am child 5</h2>";
        
    
    };
    
    
    addDivsion.addEventListener("click", brandNewDiv, false);
}