
bx = document.getElementsByClassName("desktop-only")[0]
let vMouseEvent = document.addEventListener("mousedown", function(e){vMouseEvent = e})
new MutationObserver(
    function(e){ 
        setTimeout(() => {
            document.getElementsByClassName("e6yfngs1")[0].dispatchEvent(vMouseEvent)
        }, 5);
    }
).observe(
    bx,
    {
        attributes: true
        , subtree:true
        , childList: true
    }
)
