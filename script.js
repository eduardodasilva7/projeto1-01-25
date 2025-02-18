let nome = document.getElementById("nome");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let msg = document.getElementById('msg')
let paragrafo = document.getElementById("msgO");
emailjs.init('t4AX0IQTj-Hv6Pfo3');


function verificarCampos(event){
    event.preventDefault();
    if (nome.value == '' || tel.value == '' || email.value == ''|| msg.value == ''){
        paragrafo.innerText = "Preenche todos os campos";
        paragrafo.style.color = "#ff0000";
        paragrafo.style.fontWeight = 'bold';
        paragrafo.style.textAlign = 'center';
    } else{
        paragrafo.innerText = "Formulário enviado com sucesso!";
        paragrafo.style.color = "#00ff00";
        paragrafo.style.fontWeight = 'bold';
        paragrafo.style.textAlign = 'center';

        emailjs.send('service_7ax1q9g', 'template_g9uayrb', 
            {
                to_name: nome.value,
                to_email: email.value,
                to_tel: tel.value,
                to_message: msg.value
            }
        )
    }
};