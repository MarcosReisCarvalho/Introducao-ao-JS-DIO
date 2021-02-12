function carregou(){
    alert("Página carregada com sucesso");
};

function clicou(){
    document.getElementById("thanks").innerHTML = "<b>Obrigado por clicar</b>";
}

function pagina(){
    window.open("https://github.com/MarcosReisCarvalho"); //Abre em outra janela
    //ou
    //window.location.href = "https://github.com/MarcosReisCarvalho"
    //abre na mesma janela
}

function over(elemento){
    //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse";

    elemento.innerHTML = "Obrigado por passar o mouse"; 
}

function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "passe o mouse";

    elemento.innerHTML = "passe o mouse"
}

function change(elemento){
    console.log(elemento.value);
}

/*
var d = new Date();
console.log(d.getHours());

function validarIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual é a sua idade ? ");
console.log(validarIdade(idade));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"));

for(var count = 0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 5;
while ( count < 6){
    console.log(count);
    count++
};

var idade = prompt("Qual é a sua idade ? ")
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/
/*
var nome = "Marcos Reis";
var idade = 20;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(`Bem vindo ${nome}`);
alert(idade + idade2);
//Caso os valores fossem strings os valores seriam concatenados, não somados
console.log(idade + idade2) 
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.replace("Japão", "Itália"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/
//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva") //insere dado
//console.log(lista)
//lista.pop() //retira dado do array
//console.log(lista.length); //mostra a quantidade de itens no array 
//console.log(lista.toString()) //transforma o array em string
//console.log(lista.join("-"))//transforma em string e coloca separador ente cada iten do array

/*Dicionário*/
/*
var frutas = [{nome:"maçã", cor: "vermelho"},{nome:"uva", cor:"roxo"}];
console.log(frutas)
console.log(frutas[0].nome)

var fruta = {nome:"maçã", cor: "vermelho"};
console.log(fruta)
console.log(fruta.nome)
*/