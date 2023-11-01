// demo version
function run(){
    if(state != 1){return true};
    if(document.querySelector(`div[data-cellnumber = "40"]`) != null){ return true }
    let index = 1
    let vCurrent = document.querySelector(`div[data-cellnumber = "${index}"]`)

    while (vCurrent !== null) {
        vCurrent.click()
        index += 1
        vCurrent = document.querySelector(`div[data-cellnumber = "${index}"]`)
    }

    setTimeout(() => {
        document.getElementsByClassName("css-de05nr")[0].click()
        run()
    }, 10);
}

state = 1;
run()


// Twitter version aka less than 280 chars?
// while(1){
//     function gt(pI){return document.querySelector(`div[data-cellnumber = "${pI}"]`)}
//     i = 1
//     cu = gt(i)
//     while (cu != null){
//         cu.click()
//         i += 1
//         cu = gt(i)
//     }

//     document.getElementsByClassName("css-de05nr")[0].click()
// }