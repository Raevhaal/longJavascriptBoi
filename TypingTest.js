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




// #Creating the keyboard event
// vTest = new KeyboardEvent('keydown', 
//     {
//         key:"t", 
//         keyCode:84, 
//         isComposing: true, 
//         view:window, 
//         sourceCapabilities: vMouseEvent.sourceCapabilities
//     });
// document.getElementsByClassName("letters")[0].dispatchEvent(vTest)