//The version inspired by u/GainfulBirch228 is way better look elsewhere

let vMemory = [];
let vTimer;
let isClicking = 0
new MutationObserver(
    (e) => { 
        if(isClicking == 1){return}
        for (let index = 0; index < e.length; index++) {
            if(e[index].target.classList.contains("active")){
                vMemory.push(e[index].target);
            }
        }
        clearTimeout(vTimer)
        vTimer = setTimeout(()=> {
            clicker()
        }, 1500)
    }
).observe(
    document.getElementsByClassName("css-42wpoy")[0]
    ,{attributes: true, subtree:true}
)

function clicker(){
    isClicking = 1;
    while (vMemory.length > 0){
        vMemory.shift().dispatchEvent(new Event("mousedown", {bubbles: true}));
    }
    setTimeout(() => {
        isClicking = 0;
    }, 10);
}