


bx = document.getElementsByClassName("anim-slide-fade-in")[0]
//vAnswerBox = document.getElementsByClassName("big-number")[0].innerText
let vAnswer = undefined;
let vMouseEvent = document.addEventListener("mousedown", function(e){vMouseEvent = e})
let vKeyUp = document.addEventListener("keypress", function(e){vKeyUp = e})
new MutationObserver(
    function(e){ 
        console.log(e)
        if(document.getElementsByClassName("big-number")[0] !== undefined){
            vAnswer = document.getElementsByClassName("big-number")[0].innerText
        } else {
            document.querySelector(".e19owgy78 input").value = vAnswer
            document.querySelector(".e19owgy78 input").dispatchEvent(new Event('change'));
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
