let vSeenSet = new Set()
let vSeenBT = document.getElementsByClassName("e19owgy710")[0]
let vNewBT = document.getElementsByClassName("e19owgy710")[1]
let vText = document.getElementsByClassName("word")[0]

new MutationObserver(
    () => {setTimeout(solve, 1)}
).observe(
    vText,
    {attributes: true, characterData:true, subtree: true}
)

function solve(){
    if(vSeenSet.has(vText.innerText)){
        vSeenBT.click()
    } else {
        vSeenSet.add(vText.innerText)
        vNewBT.click()
    }
}