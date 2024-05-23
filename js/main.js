var count = 0;
const body = document.querySelector("body")
if (body === null) {
    console.log("no body");
}

var win_height = window.innerHeight

function set_height() {
    body.style.height = win_height + "px";
    console.log(count);
    count = count + 1;
}

window.addEventListener("resize", set_height());
window.onresize = set_height();
set_height(body, win_height);

console.log("done");