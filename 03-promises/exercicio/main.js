const cep_input = document.getElementById("cep")
const logradouro_input = document.getElementById("logradouro")
const complemento_input = document.getElementById("complemento")
const bairro_input = document.getElementById("bairro")
const localidade_input = document.getElementById("localidade")
const uf_input = document.getElementById("uf")
const cep_error = document.getElementById("cep-error")

//***Resolução com get_data****
// cep_input.addEventListener('change', () => {
//     console.log(cep_input.value)
    
//     get_data(`https://viacep.com.br/ws/${cep_input.value}/json/`)
//         .then( (dadoJSON) => {
    
//             const dadoParseado = JSON.parse(dadoJSON)
//            console.log(dadoJSON);
//             return dadoParseado
//         })
//         .then( (dadoObj) => {
//             logradouro_input.value = dadoObj.logradouro
//             bairro_input.value = dadoObj.bairro
//             localidade_input.value = dadoObj.localidade
//             uf_input.value = dadoObj.uf
//         })
//         .catch((erro) => {
//             console.log(erro)
//         })
// })

//****resolvendo com o metodo FETCH****
cep_input.addEventListener("blur", () => {
    fetch(`https://viacep.com.br/ws/${cep_input.value}/json/`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        logradouro_input.value = data.logradouro;
        bairro_input.value = data.bairro;
        cep_error.textContent = ""
    })
    .catch(
        (err) => { console.log('catch', err)
    cep_error.textContent = "Errooou"
    })
});

fetch(url) // O FETCH RETORNA UMA PROMISE
.then(response => {return response.json()})
.then(data => {
    console.log('data', data)
})
