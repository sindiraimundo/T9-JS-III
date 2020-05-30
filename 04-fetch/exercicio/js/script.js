const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('error')
const loading = document.getElementById('spinner')
const NovaCartaBtn = document.getElementById('chamarNovacartaBtn')
// Caso os cards não carreguem, mostraremos isso:
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao: "Sem descrição",
    imagem: "http://via.placeholder.com/250X500",
    link: "https://www.astrolink.com.br/"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta 
}
// Fazer requisição neste link:
// https://github.com/reprograma/T9-JS-III/blob/sexta/04-fetch/exercicio/tarot.json
// Renderizar uma carta aleatória quando clicar no botão "Tirar outra carta"
 const url = 'https://raw.githubusercontent.com/reprograma/T9-JS-III/master/04-fetch/exercicio/tarot.json'
 renderizaCarta(placeholderCard);

 NovaCartaBtn.addEventListener("click", () => {
    console.log('aloka');
    fetch(url)
        .then (response => {
            return response.json();
        })
        .then ((dados) => {
            renderizaCarta(dados[0]);
            console.log('dados', dados)
            const numAleatorio = Math.floor(Math.random() * dados.length);
renderizaCarta(dados[numAleatorio]);
        });
});
