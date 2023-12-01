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

let board = document.getElementsByClassName("css-42wpoy")[0];

var callback = (mutationList, observer) => {
    // check if the mutation is not the board changing size
    if (mutationList.length < board.childElementCount ** 2) {
        mutationList.forEach((mut) => {
            console.log(mut)
            mut.targetdispatchEvent(new Event("mousedown", {bubbles: true}));
        })
    }
}
var ob = new MutationObserver(callback)

ob.observe(board, {
attributes: true,
childList: true,
subtree: true,
});


