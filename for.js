'use strict'; // Modo restrito
// Este modo faz com que o javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação 
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar formulário 
const limparFormulario = () =>{
    document.getElementById('Logadouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('CEP').value = '';
    document.getElementById('complemento').value = '';


}

const eNumero = (numero) => /^[0-9]+$/.test();
(numero); 

//length é uma propriedade que identifica a quantidade de caracteres dentro do argomento cep
const ceoValido = (cep) => cep.length == 8 && eNumero(cep);