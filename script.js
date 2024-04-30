let imagens = ["./img/bike1.jpg", "./img/bike2.jpg", "./img/bike3.jpg", "./img/bike4.jpg"];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById("img-banner").src=imagens[index];
    index++;
    if (index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

let cores = ['#e6e6e6', '#aeaeae', '#949494'];
let contador = 0;
function coresFundos(){
    document.getElementById("color").style.backgroundColor = cores[contador];
    contador++;
    if (contador == cores.length){
        contador = 0;
    }
    setTimeout('coresFundos()', time);
}
coresFundos()

function Login(){
    let user = document.getElementById("idUser").value;
    let senha = document.getElementById("idSenha").value;

    if(user === "Admin" && senha === "admin123"){
        window.open("quiz.html")
    }
    else{
        alert("Senha ou Usuário incorretos")
    }
}
function Alerta(){
    let nome = document.getElementById("idNome").value;
    let email = document.getElementById("idEmail").value;
    let tel = document.getElementById("idTel").value;

    if(nome === "" || email === "" || tel === ""){
        alert("Preencha os campos!")
    }
    else{
        alert("Dados Enviados!")
    }
}