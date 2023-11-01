

//Site doesnt seem to be reading mouseposition from event

let vClickEvent = document.addEventListener("mousedown", function(e){vClickEvent = e})
document.querySelector("#__layout > div > div > main > section > div").dispatchEvent(vClickEvent)


document.querySelector("#__layout > div > div > main > section > div").dispatchEvent(
    new MouseEvent(
        "mousedown", 
        {
            bubbles: true,
            x:10, 
            y:10
        }
    )
)





vCustomMouseEvent = new MouseEvent(
    "mousedown", 
    {
        pageX:775,
        pageY:384
    }
)
run()

function run(){
    document.querySelector("#__layout > div > div > main > section > div").dispatchEvent(vCustomMouseEvent)
}