box = document.getElementsByClassName("e18o0sx0")[0];
new MutationObserver(
    function (e) { 
        if (e[0].target.classList.contains('view-go')) { box.dispatchEvent(new Event("mousedown", {bubbles: true})) } 
    }
).observe(box, { attributes: true })
