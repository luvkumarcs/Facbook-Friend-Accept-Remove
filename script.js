let btn = document.querySelector("button")
let abc = document.querySelector("h4")
let check = 0
btn.addEventListener("click", function () {
    if (check == 0) {
        abc.innerText = "Friend"
        btn.innerText = "Remove"
        abc.style.color = "green"
        check = 1
    }
    else {
        abc.innerText = "Stranger"
        btn.innerText = "Add Friend"
        abc.style.color = "red"
        check=0
    }
})