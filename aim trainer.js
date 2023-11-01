new MutationObserver(
    () =>{ 
        document.getElementsByClassName("e6yfngs1")[0].dispatchEvent(
            new Event("mousedown", {bubbles: true})
        )
    }
).observe(
    document.getElementsByClassName("desktop-only")[0],
    {
        attributes: true
        , subtree:true
        , childList: true
    }
)

//Slow down
// setTimeout(() => {
//     document.getElementsByClassName("e6yfngs1")[0].dispatchEvent(
//         new Event("mousedown", {bubbles: true})
//     )
// }, 5);