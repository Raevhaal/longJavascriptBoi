let vTarget = document.getElementsByClassName("letters")[0];
vText = vTarget.innerText
for (let index = 0; index < vText.length; index++) {
    vTarget.dispatchEvent(
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


