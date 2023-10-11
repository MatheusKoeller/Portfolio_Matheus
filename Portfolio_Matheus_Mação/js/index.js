// Função para rolar suavemente para a âncora quando um link é clicado
function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Rolagem suave
        });
    }
}

// Adicione um evento de clique aos links do menu
document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetAnchor = link.getAttribute('href').substring(1); // Remove o "#" do href
        scrollToAnchor(targetAnchor);
    });
}); 



const check = document.getElementById('check');

check.addEventListener('change', () => {
  document.body.classList.toggle('light');
});

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;
    var mensagemErro = document.getElementById("mensagemErro");

    if (nome === "" || sobrenome === "" || email === "" || telefone === "" || mensagem === "") {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        mensagemErro.style.color = "red";

        // Mudar a cor de fundo dos campos vazios
        if (nome === "") {
            document.getElementById("nome").style.backgroundColor = "";
        } else {
            document.getElementById("nome").style.backgroundColor = "";
        }
        if (sobrenome === "") {
            document.getElementById("sobrenome").style.backgroundColor = "";
        } else {
            document.getElementById("sobrenome").style.backgroundColor = "";
        }
        if (email === "") {
            document.getElementById("email").style.backgroundColor = "";
        } else {
            document.getElementById("email").style.backgroundColor = "";
        }
        if (telefone === "") {
            document.getElementById("telefone").style.backgroundColor = "";
        } else {
            document.getElementById("telefone").style.backgroundColor = "";
        }
        if (mensagem === "") {
            document.getElementById("mensagem").style.backgroundColor = "";
        } else {
            document.getElementById("mensagem").style.backgroundColor = "";
        }

        return false;
    }
    return true;
}