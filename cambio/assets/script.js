const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-list")
const resposta = document.querySelector(".resposta")

burger.addEventListener("click", () => nav.classList.toggle("is-active"));


const URL = 'https://economia.awesomeapi.com.br/last/USD-BRL';
let valorDolar;

// Função para buscar o valor do dólar
async function chamarApi() {
    const resp = await fetch(URL);
    if (resp.status === 200) {
        const obj = await resp.json();
        valorDolar = parseFloat(obj.USDBRL.bid); // Pegando o valor do dólar e convertendo para número
        document.getElementById('dolar').innerHTML = `Cotação do Dólar Atual = R$ ${valorDolar}`;
    } else {
        document.getElementById('dolar').innerHTML = 'Erro ao carregar o valor do dólar';
    }
}

// Função para converter reais para dólares
function converter() {
    event.preventDefault()
    const valorEmReais = document.getElementById('reais').value; // Pegando o valor inserido no input
    if (valorEmReais && valorDolar) {
        resposta.style.marginTop = "1em"
        const valorConvertido = valorEmReais / valorDolar; // Fazendo a conversão
        document.querySelector(".resposta").innerHTML = `<h2>${valorEmReais} Reais = ${valorConvertido.toFixed(2)} USD</h2>`;

        
    } else {
        document.getElementById('conversao').innerHTML = 'Por favor, insira um valor válido.';
    }
}


chamarApi(); // Chamar a API assim que a página carrega