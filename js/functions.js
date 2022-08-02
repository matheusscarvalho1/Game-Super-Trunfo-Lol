var cartaUm = {
    nome: "Lulu",
    imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
    atributos: {
        ataque: 40,
        defesa: 30,
        magia: 70
    }
}

var cartaDois = {
    nome: "Malphite",
    imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
    atributos: {
        ataque: 40,
        defesa: 80,
        magia: 50
    }
}

var cartaTres = {
    nome: "Syndra",
    imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
    atributos: {
        ataque: 30,
        defesa: 20,
        magia: 85
    }
}

var cartaQuatro = {
    nome: "Draven",
    imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
    atributos: {
        ataque: 90,
        defesa: 35,
        magia: 10
    }
}

var cartaCinco = {
    nome: "Galio",
    imagem: "https://noticias.maisesports.com.br/wp-content/uploads/2017/10/Galio-AP.jpg",
    atributos: {
        ataque: 30,
        defesa: 60,
        magia: 60
    }
}

var cartaSeis = {
    nome: "Kai'sa",
    imagem: "https://i1.wp.com/streamie.com.br/wp-content/uploads/2018/02/img-kaisa-capa.png",
    atributos: {
        ataque: 70,
        defesa: 20,
        magia: 60
    }
}

var cartaSete = {
    nome: "Blitzcrank",
    imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
    atributos: {
        ataque: 20,
        defesa: 50,
        magia: 50
    }
}

var cartaOito = {
    nome: "Twisted Fate",
    imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg",
    atributos: {
        ataque: 50,
        defesa: 35,
        magia: 75
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaUm, cartaDois, cartaTres, cartaQuatro, cartaCinco, cartaSeis, cartaSete, cartaOito]
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina"
    divPlacar.innerHTML = html

}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu a carta da máquina!</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu, carta da máquina é maior!</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }
    if (cartas.length == 0) {
        document.getElementById('btnSortear').disabled = true
        document.getElementById('btnJogar').disabled = true
        document.getElementById('btnProximaRodada').disabled = true

        alert("Fim de jogo, acabaram as cartas!")

        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Você Venceu c=</p>'
        } else if (pontosJogador < pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Você Perdeu =c</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empate !</p>'
        }

    } else {
        document.getElementById('btnProximaRodada').disabled = false
        document.getElementById('btnJogar').disabled = true

    }

    divResultado.innerHTML = htmlResultado


    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()

}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var html = "<div id='opcoes' class ='carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio'  name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class ='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
//}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true


    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}