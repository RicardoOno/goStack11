# REACT
 - Biblioteca para construção de interface
 - Utilizado para SPA (single-page application)
 - Ecossistema do react (react native, react js, redux) pode se chamar de framework
 - Full javascript (imagens/css/etcetcetc)

# React/ReactJS/React native
 - React: biblioteca do react, utilizado tanto em ReactJS e React native
 - ReactJS: o comportamento do react no browser
 - React native: react + opções nativas

# Vantagens:
 - Componentização
 - Divisão de responsabilidade
   - Front-end nao tem responsabilidade de regra de negócio
 - Uma unica API, multiplos clientes
 - Programação declarativa

# JSX
 - Escrever HTML dentro do JS
 - React consegue criar os proprios elementos

# Programação Imperativo vs Declarativa
 - Ex: badge de notificação (ex: facebook)
   - Imperativo: o dev monta o passo a passo de como fazer a exibição da notificação
   - Declarativa: não há necessidade de comparar o estado anterior

# Babel & Webpack
 - O browser nao entende o codigo todo
 - Babel é o transpilador do codigo js para que o browser entenda
 - Webpack
   - Cria o bundle, arquivo com todo o codigo 
   - Ensina o js como importar arquivos css, imagens e etc
   - Live reload com webpack dev server

/**
 * Babel: Converter (transpilar) codigo React para um codigo que o browser entenda
 * Webpack: Para cada tipo de aquivo (.js, .css, .png) eu vou converter o codigo de uma maneira diferente
 * 
 * Loaders: babel-loader, css-loader, image-loader, file-loader, ....
 */