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

function comecarQuiz(){
    let perguntas = [
        "1. Qual é a invenção que deu origem à bicicleta moderna?",
        "2. Em que ano a primeira bicicleta foi inventada?",
        "3. Quem é considerado o pai da bicicleta?",
        "4. Qual é o nome da parte da bicicleta onde você senta?",
        "5. Como são chamados os pneus especiais usados em bicicletas de montanha?",
        "6. Qual é o nome do sistema de marchas da bicicleta?",
        "7. Quantas marchas tem uma bicicleta?",
        "8. Que parte da bicicleta é usada para parar?",
        "9. Qual é o nome do suporte onde você coloca o pé para descansar enquanto pedala?",
        "10. Como é chamada a estrutura que conecta o guidão à bicicleta?"
    ];
    let respostas = [
        "Draisiana",
        "1817",
        "Karl Dias",
        "Banco",
        "Off-road",
        "Cambio",
        "21",
        "Freios",
        "Pedal",
        "Mesa"
    ];
    let pontos = 0;

    for(let i = 0; i < perguntas.length; i++){
        let usuarioResposta = prompt(perguntas[i]);
        if (usuarioResposta.toLocaleLowerCase() === respostas[i].toLocaleLowerCase()){
            pontos++;
        }

    }
    let resultado = "Você acertou " + pontos + " de " + perguntas.length + " perguntas.";
    alert(resultado)
}