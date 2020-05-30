const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")


cepInput.addEventListener("blur", () => {
    fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
        .then((resposta) => {
            return resposta.json()
        })
        .then(dados => {
            console.log(dados)
            logradouroInput.value = dados.logradouro;
            complementoInput.value = dados.complemento;
            bairroInput.value = dados.bairro;
            localidadeInput.value = dados.localidade;
            ufInput.value = dados.uf;
        })
});


 //***resolução (CORREÇÃO) Mel***
 
// cepInput.addEventListener("blur", ()=>{
//     if(cepInput.value){
//         fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
//             return response.json()
//         }).then(json => {
//             ///façam aparecer os valores nos inputs
//             preencheInputs(json)
//         })
//     }
// })


// preencheInputs = objeto => {
//     logradouroInput.value = objeto.logradouro
//     complementoInput.value = objeto.complemento
//     bairroInput.value = objeto.bairro
//     localidadeInput.value = objeto.localidade
//     ufInput.value = objeto.uf
// }
