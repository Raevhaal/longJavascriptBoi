let vTarget = document.getElementsByClassName("letters")[0];
let vKeyEvents = [];
function run(){
    vText = vTarget.innerText
    for (let index = 0; index < vText.length; index++) {
        vKeyEvents.push(
            new KeyboardEvent('keydown', 
                {
                    key:vText[index], 
                    isComposing: true, 
                    view:window,
                    bubbles: true
                }
            )
        );
    }

    for (let index = 0; index < vKeyEvents.length; index++) {
        vTarget.dispatchEvent(vKeyEvents[index])
    }
}
run()
