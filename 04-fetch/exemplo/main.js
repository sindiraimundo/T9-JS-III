const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const complementoInput = document.getElementById("complemento");
const bairroInput = document.getElementById("bairro");
const localidadeInput = document.getElementById("localidade");
const ufInput = document.getElementById("uf");


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


 
 
