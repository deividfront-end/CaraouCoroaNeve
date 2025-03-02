const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    snowflake.style.animationDuration = Math.random() * 1 + 2 + 's'; // Duração aleatória da animação
    snowflake.style.opacity = Math.random(); // Opacidade aleatória
    snowflake.style.width = Math.random() * 1 + 5 + 'px'; // Tamanho aleatório
    snowflake.style.height = snowflake.style.width; // Altura igual à largura
    snowContainer.appendChild(snowflake);

    // Remove o floco de neve após a animação terminar
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(snowflake.style.animationDuration) * 1000);
}

// Cria flocos de neve em intervalos regulares
setInterval(createSnowflake, 100);