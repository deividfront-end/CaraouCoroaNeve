const moeda = document.getElementById('moeda');
const girarBotao = document.getElementById('girar');
const resultadoDiv = document.getElementById('resultado'); // Obtendo a div de resultado

girarBotao.addEventListener('click', () => {
    const resultado = Math.random() < 0.5 ? 0 : 180;
    const rotacaoAleatoria = Math.random() * 7200 + 3600;
    moeda.style.transition = 'transform 4s ease-in-out';
    moeda.style.transform = `rotateY(${rotacaoAleatoria + resultado}deg)`;
    setTimeout(() => {
        moeda.style.transition = 'transform 0.3s ease-in-out';
        moeda.style.transform = `rotateY(${resultado}deg)`;
        if (resultado === 0) {
            resultadoDiv.textContent = 'Deu STALKER!'; // Exibindo a mensagem de Cara
        } else {
            resultadoDiv.textContent = 'Deu SKYRIM!'; // Exibindo a mensagem de Coroa
        }
    }, 4000);
});