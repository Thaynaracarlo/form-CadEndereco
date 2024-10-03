# Projeto de Cadastro de Endereço

# ``Descrição``
Este projeto feito durante as aulas de Programação Web I, este projeto consiste em um formulário web para cadastro de endereços. Ele utiliza Jvacript, HTML, CSS (com Bootstrap) e tem como objetivo facilitar a coleta de informações de endereços de forma estruturada e responsiva.

## ``Funcionalidades``

- **Limpeza do Formulário**: Antes de buscar um novo endereço, o formulário é limpo para evitar dados anteriores.
- **Validação de CEP**: O sistema verifica se o CEP informado possui 8 dígitos numéricos.
- **Preenchimento Automático**: Os campos do formulário são preenchidos automaticamente com os dados do endereço ao encontrar um CEP válido.
- **Tratamento de Erros**: O usuário é notificado caso o CEP não seja encontrado ou esteja incorreto.

## ``Como usar``



## ``Formulário``
Coleta informações do usuário, como:
CEP, Rua, Número, Bairro, Complemento, Cidade, Estado
Botão de Submissão: Um botão estilizado para enviar os dados do formulário.

## ``Javascript``
* Função limparFormulario: 
Esta função limpa os campos do formulário, definindo seus valores como strings vazias. É útil para resetar o formulário antes de preencher novos dados.

* Função eNumero: 
Esta função verifica se a string numero contém apenas dígitos. Ela usa uma expressão regular (/^[0-9]+$/) para validar que a string consiste exclusivamente de números.

* Função cepValido:
Essa função verifica se o CEP é válido, confirmando que tem exatamente 8 caracteres e que todos são numéricos, utilizando a função eNumero

* Função preencherFormulario:
Esta função preenche os campos do formulário com os dados retornados da API de endereço, usando o objeto endereco.

* Função pesquisarCep:
Esta é a função principal que realiza a consulta do CEP:

* async: Indica que a função é assíncrona e pode usar await.
* limparFormulario(): Chama a função para limpar o formulário antes de buscar novos dados.
* fetch(url): Realiza uma requisição para a API ViaCep. A função await espera que a requisição seja concluída.
* dados.json(): Converte a resposta da API para um objeto JavaScript.
hasOwnProperty('erro'): Verifica se a resposta contém um erro (indicando que o CEP não foi encontrado).

## ``HTML``

Este código HTML configura um formulário de cadastro de endereço. O usuário pode preencher detalhes como CEP, rua, número, bairro, cidade e estado. O formulário é estilizado com Bootstrap para ser responsivo e visualmente agradável. A funcionalidade adicional, como validação e preenchimento automático de endereço baseado no CEP, deve ser implementada no arquivo for.js.



## ``Tecnologias ultilizadas``
* HTML
* CSS
* JavaScript
* bootstrap