const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O aquecimento global é algo que vem aumentando cada vez mais, com o aumento de fabricação de produtos com plasticos que são derivados de petróleo, e também o uso de automóveis (derivados do petróleo,carvão mineral, gás natural) e o desmatamento.",
        alternativas: [
            {
                texto: "Isso é algo bom, assim estamos descobrindo e vendo que a raça humana está evoluindo cada vez mais, assim fazendo cada pais virar uma potência mundial.",
                afirmacao: "Sua resposta é arriscada, com seus pensamentos a humaninadade não terá muito tempo de vida. "
            },
            {
                texto: "Isso é algo ruim porque com isso estamos destruindo o planeta cada vez mais, temos que buscar mudar ou melhorar nossas atitiudes, e também ajudando a outras pessoas a também mudar as atitudes para conseguir salvar e ajudar o planeta.",
                afirmacao: "Resposta certa, continue assim é evoluiremos cada vez mais!"
            }
        ]
    },
    {
        enunciado: "Um metodo para reduzir o aquecimento global é reduzindo os autómoveis que tem a combustão derivada da queima de combustíveis, porque eles despejam no ar muitos poluentes, uma solução para esse ploblema são os automóveis eletricos que não necessitam da queima de combustíveis somente usando a energia elétrica e não despejando poluentes no ar, oque você acha dessa ideia?",
        alternativas: [
            {
                texto: "Não necessitamos reduzir os automóveis a combustão a queima de combustíveis porque isso entrefere pouco no planeta, álem dos automóveis ter um barulho/ronco do motor bem mais lega do que os automóveis elétricos, hoje em dia é de aproximadamente 1,47 bilhões de automóveis que existem no mundo   , mais como eles poluem em pouca quantidade não é necessario fazer essa alteração para o veículo elétrico.",
                afirmacao: "Resposta errada, planeta vai ser inabitavel com essa sua resposta!"
            },
            {
                texto: "Esse metodo iria ajudar muito referente ao aquecimento global, porque os automóveis que não são eletricos, através da queima de combustíveis acabam soltando poluição no ar, e como existem muitos automóveis no mundo isso pode ser um ploblema muito grande futuramente, então precisamos urgentemente achar uma solução urgente ou daqui um tempo será tarde demais.",
                afirmacao: "Òtima resposta! continue assim e vamos continuar com uma ótima qualidade de vida"
            }
        ]
    },
    {
        enunciado: "O que deve ser feito para evitar o aquecimento global?",
        alternativas: [
            {
                texto: "Desligue aparelhos e lâmpadas que não estão sendo usados. Dê preferência ao uso de fontes de energia limpa e renováveis, como a energia solar, a energia eólica (dos ventos) e a biomassa. Reduza o consumo de combustíveis fósseis e seus derivados, como o petróleo e a gasolina. Procure deixar o carro em casa",
                afirmacao: "Esta entendido sobre o conteúdo"
            },
            {
                texto: "Deixe ligado aparelhos e lâmpadas que não estão sendo usados. Não de preferência ao uso de fontes de energia limpa e renováveis, como a energia solar, a energia eólica (dos ventos) e a biomassa. almente o consumo de combustíveis fósseis e seus derivados, como o petróleo e a gasolina. deixe o carro em casa",
                afirmacao: "Não esta prestando a atenção esta fazendo de qualquer jeito"
            }
        ]
    },
    {
        enunciado: "Quais medidas devemos tomar para evitar o aquecimento global?",
        alternativas: [
            {
                texto: "Use o transporte público ou a bicicleta",
                afirmacao: "Esta pegando o jeito "
            },
            {
                texto: "Use carros e outros tipos de veiculos ",
                afirmacao: "Chega mais rapido mais esta prejudicando mais o meio ambiente"
            }
        ]
    },
    {
        enunciado: "Quais atitudes podemos tomar para retardar o aquecimento global?",
        alternativas: [
            {
                texto: "Diminuir a quantidade de lixo gerado e fazer o descarte correto",
                afirmacao: "Otimo, aprendeu como prolongar a vida do nosso planeta"
            },
            {
                texto: "Aumentar a quantidade de lixo e fazer o descarte totalmente incorreto",
                afirmacao: "Resposta errada assim vai diminuir a vida do nosso planeta "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
