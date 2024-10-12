const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-list")

burger.addEventListener("click", () => nav.classList.toggle("is-active"));

function calcular(event) {
    event.preventDefault()
    
    const preco = document.querySelector("#produto").value 
    const desconto_porcetagem = document.querySelector("#desconto").value 
    const desconto = preco * desconto_porcetagem / 100
    const novo_preco = preco - desconto
    const resposta = document.querySelector(".resposta")
    resposta.style.marginTop = "1em"

    resposta.innerHTML = `<p>Valor do Produto: <strong>R$${preco}</strong></p>`
    resposta.innerHTML += `<p>Porcentagem de Desconto: <strong>${desconto_porcetagem}%</strong></p>`
    resposta.innerHTML += `<p>Valor Descontado: <strong>R$${desconto}</strong></p>`
    resposta.innerHTML += `<p>Novo valor do Produto: <strong>R$${novo_preco.toFixed(2)}</strong></p>`
   

}