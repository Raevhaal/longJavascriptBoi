
let board = document
    .getElementsByClassName("memory-test")[0]
    .firstChild
    .children[1]
    .firstChild
    .children[1]
    .firstChild;


let ob = new MutationObserver((mutationList, observer) => {
    // check if the mutation is not the board changing size
    if (mutationList.length < board.childElementCount ** 2) {
        mutationList.forEach((mut) => {
            mut.target.dispatchEvent(new Event("mousedown", {bubbles: true}));
        })
    }
});

ob.observe(board, {
    attributes: true,
    childList: true,
    subtree: true,
});


