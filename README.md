# Pauta Smash House

Site estático de uma hamburgueria fictícia, desenvolvido com HTML, CSS e JavaScript puro.

## Sobre o projeto

O projeto simula a experiência de um pedido online, incluindo cadastro, login, navegação por cardápio, escolha de produtos e finalização de pagamento.

## Páginas principais

- `inicio.html` - página inicial com informações da hamburgueria.
- `Cardapio.html` - cardápio de smashes.
- `cardapioBebidas.html` - cardápio de bebidas.
- `cardapioAcompanhamentos.html` - cardápio de acompanhamentos e cálculo do pedido.
- `cartao.html` - página de pagamento por cartão.
- `pix.html` - página de pagamento por PIX.
- `cadastro.html` - formulário de cadastro de usuário.
- `login.html` - formulário de login.
- `contato.html` - página de contato com mapa e informações.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (DOM, validação de formulários, `localStorage`)

## Como usar

1. Abra o arquivo `inicio.html` em um navegador.
2. Use o menu para navegar entre as páginas.
3. Em `Cardapio.html`, selecione um lanche para iniciar o pedido.
4. Escolha uma bebida em `cardapioBebidas.html`.
5. Acrescente um acompanhamento em `cardapioAcompanhamentos.html`.
6. Confira o valor total em `cartao.html` e finalize o pedido.

## Estrutura de arquivos

- `css/` - estilos das páginas.
- `js/` - scripts de interação e validação.
- `img/` - imagens do site.
- `README.md` - documentação do projeto.

## Funcionalidades principais

- Validação simples de cadastro e login.
- Fluxo de seleção de produtos com armazenamento de valores no `localStorage`.
- Exibição do valor total do pedido na página de pagamento.
- Estilo visual adaptado para telas menores.

## Observações

- O arquivo `js/pix.js` está presente mas atualmente não possui lógica implementada.
- O fluxo de pagamento é demonstrativo; as páginas de pagamento redirecionam para telas estáticas.
