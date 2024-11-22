function nextPart(choice) {
    const storyElement = document.getElementById('story');
    const choicesElement = document.querySelector('.choices');

    if (choice === '1') {
        storyElement.innerHTML = "<p>Você cumprimenta com um sorriso e a pessoa sorri de volta, abrindo uma conversa. Ela parece muito simpática!</p>";
        choicesElement.innerHTML = `
            <button onclick="nextPart('3')">Continuar conversando</button>
            <button onclick="nextPart('4')">Despedir-se educadamente</button>
        `;
    } else if (choice === '2') {
        storyElement.innerHTML = "<p>Você decide ignorar a pessoa e continuar caminhando, mas sente que talvez tenha perdido uma oportunidade.</p>";
        choicesElement.innerHTML = `
            <button onclick="nextPart('5')">Voltar e tentar cumprimentá-la</button>
            <button onclick="nextPart('6')">Seguir o caminho sem olhar para trás</button>
        `;
    } else if (choice === '3') {
        storyElement.innerHTML = "<p>Você passa algum tempo conversando e logo percebe que tem muito em comum com ela. A conversa flui naturalmente.</p>";
        choicesElement.innerHTML = `
            <button onclick="nextPart('7')">Convidá-la para tomar um café</button>
            <button onclick="nextPart('8')">Agradecer pela conversa e ir embora</button>
        `;
    } else if (choice === '4') {
        storyElement.innerHTML = "<p>Você decide se despedir educadamente e seguir seu caminho. Porém, sente que essa foi uma boa escolha para não forçar algo.</p>";
        choicesElement.innerHTML = `
            <button onclick="nextPart('9')">Refletir sobre o que aconteceu</button>
            <button onclick="nextPart('10')">Voltar para o parque mais tarde</button>
        `;
    } else if (choice === '5') {
        storyElement.innerHTML = "<p>Você decide voltar e a encontra de novo. Desta vez, a conversa é ainda mais interessante, e você troca números de telefone.</p>";
        choicesElement.innerHTML = `
            <button onclick="nextPart('7')">Convidá-la para tomar um café</button>
            <button onclick="nextPart('8')">Agradecer pela conversa e ir embora</button>
        `;
    } else if (choice === '6') {
        storyElement.innerHTML = "<p>Você segue o caminho sem olhar para trás, mas não consegue tirar a pessoa da cabeça. Talvez tenha se arrependido.</p>";
        choicesElement.innerHTML = `
            <button onclick="nextPart('9')">Refletir sobre o que aconteceu</button>
            <button onclick="nextPart('10')">Voltar para o parque mais tarde</button>
        `;
    } else if (choice === '7') {
        storyElement.innerHTML = "<p>Ela aceita o convite para o café e a partir desse momento, vocês começam a se encontrar com frequência. A história de vocês acaba de começar.</p>";
        choicesElement.innerHTML = `
            <button onclick="resetStory()">Começar de novo</button>
        `;
    } else if (choice === '8') {
        storyElement.innerHTML = "<p>Você agradece pela conversa e segue seu caminho. Às vezes, uma boa conversa é suficiente para deixar um bom sentimento.</p>";
        choicesElement.innerHTML = `
            <button onclick="resetStory()">Começar de novo</button>
        `;
    } else if (choice === '9') {
        storyElement.innerHTML = "<p>Você reflete sobre a conversa e percebe que fez a escolha certa, mas ainda fica com uma sensação de curiosidade sobre o que poderia ter sido.</p>";
        choicesElement.innerHTML = `
            <button onclick="resetStory()">Começar de novo</button>
        `;
    } else if (choice === '10') {
        storyElement.innerHTML = "<p>Você decide voltar ao parque mais tarde, mas desta vez, a pessoa não está lá. Talvez em outra oportunidade.</p>";
        choicesElement.innerHTML = `
            <button onclick="resetStory()">Começar de novo</button>
        `;
    }
}

function resetStory() {
    const storyElement = document.getElementById('story');
    const choicesElement = document.querySelector('.choices');

    storyElement.innerHTML = "<p>Você está em um parque e conhece alguém especial. O que você faz?</p>";
    choicesElement.innerHTML = `
        <button onclick="nextPart('1')">Cumprimentar com um sorriso</button>
        <button onclick="nextPart('2')">Ignorar e continuar caminhando</button>
    `;
}