let vMemory = [];
let vTimer;
new MutationObserver(
    (e) => { 
        for (let index = 0; index < e.length; index++) {
            if(e[index].target.classList.contains("active")){
                vMemory.push(e[index].target);
            }
        }
        clearTimeout(vTimer)
        vTimer = setTimeout(()=> {
            clicker()
        }, 1000)
    }
).observe(
    document.getElementsByClassName("squares")[0]
    ,{attributes: true, subtree:true}
)


function clicker(){
    if(vMemory.length == 0){ return; }
    vMemory.shift().dispatchEvent(new Event("mousedown", {bubbles: true}));
    setTimeout(clicker,1)
}