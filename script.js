let nome = document.getElementById("nome");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let paragrafo = document.getElementById("msg");


function verificarCampos(event){
    event.preventDefault();
    if (nome.value == '' || tel.value == '' || email.value == ''){
        paragrafo.innerText = "Preenche todos os campos";
        paragrafo.style.color = "#ff0000";
        paragrafo.style.fontWeight = 'bold';
        paragrafo.style.textAlign = 'center';
    } else{
        paragrafo.innerText = "Formulário enviado com sucesso!";
        paragrafo.style.color = "#00ff00";
        paragrafo.style.fontWeight = 'bold';
        paragrafo.style.textAlign = 'center';
    }
};