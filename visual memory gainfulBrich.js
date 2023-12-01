/*
    Credit to u/GainfulBirch228
    https://www.reddit.com/r/CodeBullet/comments/187qkwb/rewrote_the_2nd_channel_videos_subject_in_js_got/
    https://pastebin.com/uSRvfsj3
*/

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


