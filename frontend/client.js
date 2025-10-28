const socket = io();

//Adição de atividade
document.getElementById('add_circle').onclick = () => {
  document.getElementById('atividadePopup').style.display = 'block';
};

//Salvamento de atividade
document.getElementById('salvarTask').onclick = () => {
  const nome = document.getElementById('nomeTask').value;
  const prazo = document.getElementById('prazoTask').value;

  socket.emit('addTask', { nomeAtividade: nome, prazo });
  document.getElementById('atividadePopup').style.display = 'none';
  document.getElementById('nomeTask') .value = '';
  document.getElementById('prazoTask').value = '';
};

//Visualização da Atividade
socket.on('taskAdded', task => {
  const div = document.createElement('div');
  div.className = 'task-card';
  
  //Nome da Atividade
  const nomeTask = document.createElement('div');
  nomeTask.textContent = task.nomeAtividade;

  //Prazo
  const prazoTask = document.createElement('div');
  prazoTask.textContent = `${task.prazo}`;
  prazoTask.style.fontSize = '15px';
  prazoTask.style.color = '#314658ff';

  //Adição de ambos no card
  div.appendChild(nomeTask);
  div.appendChild(prazoTask);

  document.getElementById('listaAtividades').appendChild(div);
});