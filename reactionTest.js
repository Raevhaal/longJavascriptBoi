bx=document.getElementsByClassName("e18o0sx0")[0];
bx.addEventListener("mousedown", function(e){mouseEvent = e})
new MutationObserver(function(e){ if(e[0].target.classList.contains('view-go')){ e[0].target.dispatchEvent(mouseEvent)} }).observe(bx,{attributes: true})
