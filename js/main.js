const win_height = window.innerHeight;
console.log(win_height);

function set_height() {
    document.body.style.height = win_height + "px";
    console.log(win_height);
    console.log(document.body.style.height);
}

window.addEventListener("resize", set_height);
window.onresize = set_height();