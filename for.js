'use strict'; // Modo restrito
// Este modo faz com que o javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação 
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar formulário 
const limparFormulario = () => {
    document.getElementById('Logadouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('CEP').value = '';
    document.getElementById('complemento').value = '';
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

//length é uma propriedade que identifica a quantidade de caracteres dentro do argomento cep
//// Verifica se o CEP informado é válido. Um CEP é considerado válido se:
// 1. Possui exatamente 8 caracteres.
// 2. É composto apenas por números (0-9).
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Função para prenceher formulário como campos da API

const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;

}


//Função de consumo de API ViaCEP
async function pesquisarCep() {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${Cep.value}/json/`;

    if (cepValido(cep.value)) {
        const dados = await fetch(url);
        const addres = await dados.json();
    } else {
        alert("CEP Incorreto!");
    }

    if (addres.hasOwnProperty()) {
        alert('CEP Não encontrado');
    } else {
        preencherFormulario(addres);

    }
}

// Adiciona escutador para executar consumo de API da ViaCEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);




