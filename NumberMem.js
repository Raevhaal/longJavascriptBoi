


bx = document.getElementsByClassName("anim-slide-fade-in")[0]
//vAnswerBox = document.getElementsByClassName("big-number")[0].innerText
let vAnswer = undefined;
let vMouseEvent = document.addEventListener("mousedown", function(e){vMouseEvent = e})
let vTarget = document.querySelector(".e19owgy78 input")

let vKeyEvents = {}
document.addEventListener("keydown", 
    function(e){
        vKeyEvents[e.key] = e
    }
);

new MutationObserver(
    function(e){ 
        if(document.getElementsByClassName("big-number")[0] !== undefined){
            vAnswer = document.getElementsByClassName("big-number")[0].innerText
        } else {
            console.log(e)
            for (let index = 0; index < vAnswer.length; index++) {
                console.log(vKeyEvents[vAnswer[index]])
                vTarget.dispatchEvent(vKeyEvents[vAnswer[index]])
            }
        }

        //document.getElementsByClassName("e6yfngs1")[0].dispatchEvent(vMouseEvent)
    }
).observe(
    bx,
    {
        attributes: true
        , subtree:true
        , childList: true
    }
)
