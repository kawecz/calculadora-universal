const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-list")

burger.addEventListener("click", () => nav.classList.toggle("is-active"));

function calcular(event) {
    event.preventDefault()

    const a = document.querySelector("#a").value
    const b = document.querySelector("#b").value
    const c = document.querySelector("#c").value
    const delta = b**2 - 4 * a * c
    const resposta = document.querySelector(".resposta")
    resposta.style.marginTop = "1em"
    resposta.innerHTML = ''
    resposta.innerHTML += `<h1>Δ = ${delta}</h1>`


}