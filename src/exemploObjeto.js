// Exemplo Criação de Objeto
const heroi = {
    nome:"Batman",
    identidade:"Bruce Wayne"
};
const jsonString = JSON.stringify(heroi);
console.log("JSON String:", jsonString);


localStorage.setItem("heroi", jsonString);
localStorage.getItem("heroi");
//'{"nome":"Batman","identidade":"Bruce Wayne"}'
const vilao = {nome:"Lex Luthor", identidade:"Lex Luthor"};
const jsonStringVilao = JSON.stringify(vilao);
console.log(jsonStringVilao);
const personagens = [heroi, vilao];
console.log(personagens);
const jsonStringPersonagens = JSON.stringify(personagens);
localStorage.setItem("Personagens", personagens);
localStorage.getItem("Personagens");
localStorage.setItem("Personagens", jsonStringPersonagens);
localStorage.getItem("Personagens");
//'[{"nome":"Batman","identidade":"Bruce Wayne"},{"nome":"Lex Luthor","identidade":"Lex Luthor"}]'
JSON.parse(localStorage.getItem("Personagens"));