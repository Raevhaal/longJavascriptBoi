let vClickEvent = document.addEventListener("mousedown", function(e){vClickEvent = e})



document.querySelector("#__layout > div > div > main > section > div").dispatchEvent(
    new MouseEvent(
        "mousedown", 
        {
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