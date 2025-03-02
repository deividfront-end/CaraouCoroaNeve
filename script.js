const moeda = document.getElementById('moeda');
const girarBotao = document.getElementById('girar');
const resultadoDiv = document.getElementById('resultado');

girarBotao.addEventListener('click', () => {
    const resultado = Math.random() < 0.5 ? 'cara' : 'coroa';
    const rotacaoAleatoria = Math.random() * 7200 + 3600;
    const rotacaoFinal = resultado === 'cara' ? rotacaoAleatoria : rotacaoAleatoria + 180;

    girarBotao.disabled = true; // Desabilita o botão

    moeda.style.transition = 'transform 4s ease-in-out';
    moeda.style.transform = `rotateY(${rotacaoFinal}deg)`;

    setTimeout(() => {
        moeda.style.transition = 'transform 0.3s ease-in-out';
        moeda.style.transform = `rotateY(${resultado === 'cara' ? 0 : 180}deg)`;
        resultadoDiv.textContent = `Deu ${resultado === 'cara' ? 'SKYRIM' : 'STALKER'}!`;
        girarBotao.disabled = false; // Reabilita o botão
    }, 4000);
});