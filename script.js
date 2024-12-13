document.getElementById('botaoInterativo').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.trim();

    const mensagemDiv = document.getElementById('mensagem');
    
    if (nome !== '') {
        mensagemDiv.innerHTML = `<p>Olá, <strong>${nome}</strong>! Bem-vindo à página com HTML, CSS e JavaScript!</p>`;
        mensagemDiv.style.backgroundColor = '#d4edda';
    } else {
        mensagemDiv.innerHTML = '<p>Por favor, digite seu nome.</p>';
        mensagemDiv.style.backgroundColor = '#f8d7da';
    }
});
