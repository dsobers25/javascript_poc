window.addEventListener("load", init, false);

function init() {
    
    var magicBtn = document.getElementById("magicBtn");

    var onMagicBtnFunc = function (e) {
        console.log("Boooooom!!!");
        var magicText = document.getElementById("poof");
        magicText.innerHTML = "Hey Foo!";
        
    }
    
    magicBtn.addEventListener("click", onMagicBtnFunc, false);
}