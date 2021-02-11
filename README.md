# Laborat&oacute;rio 2 - Aprendendo um pouco de front-end

## Descri&ccedil;&atilde;o
**Objetivo:** Resolver os problemas indicados neste sistema.

## 1. Aprendendo a fazer animações na folha de estilo

Para criar uma anima&ccedil;&atilde;o na folha de estilo, basta usar a 'propriedade' animation do CSS:
```css
#id_do_objeto {
    animation: <nome> <tempo> <funcao> <repeticao>;
}
@keyframes <nome> {
    <passos> {<propriedade>: <valor>;}
}
```
Exemplo:
```css
#botao {
    animation: botao_animado 1s step(6) infinite;
}
@keyframes botao_animado {
    0% {background-color: red;}
    20% {background-color: blue;}
    40% {background-color: green;}
    60% {background-color: magenta;}
    80% {background-color: gray;}
    100% {background-color: yellow;}
}
```

## 2. Diferenças entre '==' e '===' / O que &eacute; NaN?

Utilizando as seguintes compara&ccedil;&otilde;es se obt&eacute;m os seguinte resultados:
```javascript
function comparacoes () {
    var v1 = '1';
    var v2 = 1;
    console.log("Resultado ('1' == 1): " + (v1 == v2));
    console.log("Resultado ('1' === 1): " + (v1 === v2));
    console.log("Resultado (1 == 1): " + (v2 == v2));
    console.log("Resultado (1 === 1): " + (v2 === v2));
    console.log("Resultado ('1' == '1'): " + (v1 == v1));
    console.log("Resultado ('1' === '1'): " + (v1 === v1));
}
```
Utilizando o NaN se obt&eacute;m os seguinte resultados:
```javascript
function resultadoNaN () {
    console.log("Resultado (NaN == NaN): " + (NaN == NaN));
    console.log("Resultado (NaN === NaN): " + (NaN === NaN));
    console.log("Resultado (isNaN(NaN)): " + (isNaN(NaN)));
}
```

## 3. Usando AJAX

Para obter as informa&ccedil;&otilde;es de uma API REST, &eacute; poss&iacute;vel usar m&eacute;todos AJAX (aqui, usando a biblioteca JQuery) para isso:
```javascript
$.get('/user/1',(data) => {
    //transforma uma string json em objeto javascript
    var objeto = JSON.parse(data);
    //transforma um objeto javascript em uma string json
    var json = JSON.stringify(objeto);
});
```
