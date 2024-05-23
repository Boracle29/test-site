const body = document.querySelector("body")
if (body === null) {
    console.log("no body");
}

const win_height = window.innerHeight

function set_height(element, height) {
    element.style.height = height + "px"
}

window.addEventListener("resize", set_height(body, win_height))
set_height(body, win_height)

console.log("done")