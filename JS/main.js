function clicar() {
  //alert("Obrigado por clicar");
  document.getElementById("caixadetexto").innerHTML = "<label>Usuário </label>  <br>  <input type = 'text' id = 'user' ></input >      <br>        <label>Senha </label>    <br>    <input type='text' id='senha'></input><br><br> <button type='button' id='botaologin' onclick='logar()'>Entrar</button>";

}

function logar() {
  window.location.href = "https://www.linkedin.com/in/laancarlos/";
}





/*var nome = "Laan Carlos";
var idade = 23;
alert("Nome: " + nome.toUpperCase() + " Idade: " + idade);*/
/*
function soma(n1, n2) {
  return n1 + n2;
}
alert(soma(5, 10));*/

/*
function setReplace(frase, pais1, pais2) {
  return frase.replace(pais1, pais2);
}
 
 
alert(setReplace("Vai Japão1", "Japão", "Ucrania"));*/
/*
function validaIdade(idade) {
  var valida;
  if (idade >= 18) {
    valida = true;
  } else {
    valida = false;
  }
  return valida;
}
 
var idade = prompt("Qual a sua idade?");
 
console.log(validaIdade(idade));*/

