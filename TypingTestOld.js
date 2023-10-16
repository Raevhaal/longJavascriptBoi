let vTarget = document.getElementsByClassName("letters")[0]
let vKeyEvents = {}
document.addEventListener("keydown", 
    function(e){
        vKeyEvents[e.key] = e
    }
);

function run(){
    vText = vTarget.innerText
    for (let index = 0; index < vText.length; index++) {
        vTarget.dispatchEvent(vKeyEvents[vText[index]])
    }
}
