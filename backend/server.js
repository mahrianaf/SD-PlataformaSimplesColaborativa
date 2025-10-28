// SERVIDOR APLICAÇÃO COLABORATIVA
// Node.js e Express

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

function main() {
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server);

  // Servir os arquivos do frontend
  app.use(express.static('../frontend'));

  io.on('connection', (socket) => {
    console.log('Novo cliente conectado');

    //Evento: Adição de Atividade
    socket.on('addTask', (data) => {
      const novaTarefa = { 
        nomeAtividade: data.nomeAtividade,
        prazo: data.prazo
      };
      io.emit('taskAdded', novaTarefa);
    });
  });

  server.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
}

main();
