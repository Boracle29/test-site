const body = window.document.body
const win_height = window.innerHeight

function resize_element(element, height) {
    element.style.height = (height + "px")
    console.log("resized")
}

window.addEventListener("resize", resize_element(body, win_height))