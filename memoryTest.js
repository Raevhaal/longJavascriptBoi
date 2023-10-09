let vMouseEvent = document.addEventListener("mousedown", function(e){vMouseEvent = e})

let vMemory = [];
let vTimer;
new MutationObserver(
    function(e){ 
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
    console.log(`Clicking`);
    if(vMemory.length == 0){ return; }
    // while(vMemory.length > 0){
    //     vMemory[0].dispatchEvent(vMouseEvent);
    //     vMemory.shift()
    // }
    vMemory[0].dispatchEvent(vMouseEvent);
    vMemory.shift()
    setTimeout(clicker,1)
}