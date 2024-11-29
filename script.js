function choose(option) {
  const story = document.getElementById("story");
  const choices = document.getElementById("choices");

  switch (option) {
    case "rio":
      story.textContent = "No Rio de Janeiro, você encontra duas pistas: uma na Biblioteca Nacional e outra no Jardim Botânico. Qual delas você deseja seguir?";
      choices.innerHTML = `
        <button onclick="choose('biblioteca')">Biblioteca Nacional</button>
        <button onclick="choose('jardim')">Jardim Botânico</button>
      `;
      break;

    case "pernambuco":
      story.textContent = "Em Pernambuco, há rumores de duas pistas: uma escondida no Recife Antigo e outra nas praias de Porto de Galinhas. Para onde você quer ir?";
      choices.innerHTML = `
        <button onclick="choose('recife')">Recife Antigo</button>
        <button onclick="choose('porto')">Porto de Galinhas</button>
      `;
      break;

    case "biblioteca":
      story.textContent = "Na Biblioteca Nacional, você encontrou um mapa antigo que menciona pistas adicionais em Pernambuco. Você decide continuar sua busca por lá.";
      choices.innerHTML = `<button onclick="choose('pernambuco')">Ir para Pernambuco</button>`;
      break;

    case "jardim":
      story.textContent = "No Jardim Botânico, uma inscrição escondida sugere que a cidade perdida está em Pernambuco. Você decide seguir para lá.";
      choices.innerHTML = `<button onclick="choose('pernambuco')">Ir para Pernambuco</button>`;
      break;

    case "recife":
      story.textContent = "No Recife Antigo, você encontra um diário descrevendo uma caverna secreta nas proximidades. Você está cada vez mais perto da cidade perdida!";
      choices.innerHTML = `
        <button onclick="choose('caverna')">Explorar a caverna</button>
        <button onclick="choose('porto')">Ir para Porto de Galinhas</button>
      `;
      break;

    case "porto":
      story.textContent = "Em Porto de Galinhas, mergulhando nas águas cristalinas, você descobre uma chave dourada. Para onde ela leva?";
      choices.innerHTML = `
        <button onclick="choose('caverna')">Explorar a caverna secreta</button>
        <button onclick="choose('voltar')">Voltar ao Recife Antigo</button>
      `;
      break;

    case "caverna":
      story.textContent = "Dentro da caverna, você encontra a entrada da Cidade Perdida, com suas riquezas e belezas naturais. Parabéns, você encontrou a cidade e concluiu sua aventura!";
      choices.innerHTML = `<button onclick="restart()">Jogar novamente</button>`;
      break;

    case "voltar":
      story.textContent = "Você volta ao Recife Antigo com a chave em mãos e descobre que ela abre a caverna secreta. A aventura continua!";
      choices.innerHTML = `<button onclick="choose('caverna')">Explorar a caverna</button>`;
      break;
  }
}

function restart() {
  location.reload();
}