# Sobre

## Seção: `Intro ao MongoDB`

- Apresentado o NoSQL e seu significado `Not Only SQL`, com sua história e seus tipos de classes(Key/Value, Column Family, Document e Graph).
- Após apresentado NoSQL, foco foi voltado ao uso do MongoDB que se enquadra na classe de Documentos, que é uma classe mais flexível e com amapla aderência em vários casos de uso, com seus dados armazenados em estilo JSON, com vários níveis e subníveis.

#
<div align="center">
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-blogs-api/readme-update/readme-imgs/project_top.webp">
    <img height="350px" width="30%" src="./readme-imgs/project_top.webp">
  </a>
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-blogs-api/readme-update/readme-imgs/project_mid.webp">
    <img height="350px" width="30%" src="./readme-imgs/project_mid.webp">
  </a>
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-blogs-api/readme-update/readme-imgs/project_bot.webp">
    <img height="350px" width="30%" src="./readme-imgs/project_bot.webp">
  </a>
</div>

>*Imagens da documentação swagger*
#
## Projeto: `Mongodb Commerce`

- Essa atividade prática, foi proposto uso de comandos para filtrar, buscar, editar e deletar informações dentro de um banco de dados MongoDB.

# Tecnologias e ferramentas usadas 🛠

![MongoDB](https://img.shields.io/badge/-MongoDB-b?style=flat-square&logo=MongoDB&logoColor=ffffff)

# Desafios

- Alterar documentos com métodos de update com operadores simples;
- Alterar documentos com operações complexos e modificadores;
- Construir queries e expressões complexas utilizando índices textuais e expressões regulares.

# Conclusão

- lore

</details>

<details>
  <summary>
    <strong>
      :newspaper_roll: Requisitos solicitados durante o desenvolvimento do projeto
    </strong>
  </summary>

 
  ### Requisitos
  *Nome* | *Avaliação*
  --- | :---:
  1 - Retorne a quantidade de documentos inseridos na coleção `produtos` | :heavy_check_mark:
  2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos` | :heavy_check_mark:
  3 - Retorne o lanche mais vendido, mostrando apenas o `nome` e a quantidade do lanche mais vendido | :heavy_check_mark:
  4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente | :heavy_check_mark:
  5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85` | :heavy_check_mark:
  6 - Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100` | :heavy_check_mark:
  7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista | :heavy_check_mark:
  8 - Delete os lanches com menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco | :heavy_check_mark:
  9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500` | :heavy_check_mark:
  10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40` | :heavy_check_mark:
  11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken` | :heavy_check_mark:
  12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes` | :heavy_check_mark:
  13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo | :heavy_check_mark:
  14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais` | :heavy_check_mark:
  15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo | :heavy_check_mark:
  16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac` | :heavy_check_mark:
  17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos` | :heavy_check_mark:
  18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo` | :heavy_check_mark:
  19 - Remova o item `cebola` de todos os sanduíches | :heavy_check_mark:
  20 - Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo` | :heavy_check_mark:
  21 - Remova o último `ingrediente` do sanduíche `Cheddar McMelt` | :heavy_check_mark:
  22 - Adicione a quantidade de vendas dos sanduíches por dia da semana | :heavy_check_mark:
  23 - Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z) | :heavy_check_mark:
  24 - Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente | :heavy_check_mark:
  25 - Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40` | :heavy_check_mark:
  26 - Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40` | :heavy_check_mark:
  27 - Conte quantos produtos contém `Mc` no nome, sem considerar letras maiúsculas ou minúsculas | :heavy_check_mark:
  28 - Conte quantos produtos têm `4` ingredientes | :heavy_check_mark:
  29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos | :heavy_check_mark:
  30 - Remova o campo `curtidas` do item `Big Mac` | :heavy_check_mark:
  31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos` | :heavy_check_mark:
  32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5` | :heavy_check_mark:

</details>

<details>
  <summary>
    <strong>
      :memo: Todo list
    </strong>
  </summary>

  - [x] - ~~Criar aplicação com base nos requisitos da trybe.~~ ![data](https://badgen.net/badge/delivery/08-08-2022/green)

</details>

#

<div align="right">
  <img src="https://badgen.net/badge/last%20update/22-02-2023/blue">
</div>
