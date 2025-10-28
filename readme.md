* 🌐PLATAFORMA COLABORATIVA

Na matéria de Sistemas Distribuídos, o presente trabalho tem o objetivo
de criar uma plataforma colaborativa. Através de uma interface simples,
permitir os colaboradores criarem tarefas e atualizarem o status.

-- Frontend: HTML + CSS + Js 
-- Backend: Node.js/Express 
-- Comunicação em Tempo Real: Socket.io 

* 🧑‍💻 Funcionalidades do Projeto: 

-- Criar atividades
-- Atualizar status da atividade
-- Visualizar colaboradores
-- Adicionar Colaborador
-- Excluir Tarefa

* ⚙️ Instalações:

1- Instalar o node: https://nodejs.org 
2- Verificar se a instalação foi bem-sucedida: node -v 
3- Digitar o comando: npm install express socket.io mysql2

* ⚙️ Execução:

> Para implementar o servidor

1- Digitar o comando: cd backend
2- Digitar o comando: node server.js ou node --watch server.js 
   (node --watch server.js --> após alterações, não precisa digitar o comando novamente)
3- Permitir somente redes privadas acessarem

>Para outros usuários se conectarem ao servidor
1- Basta executar o comando node (item 6) para ativar o servidor
2- Verificar o IP da máquina servidor
3- Montar o link com o IP e a porta que o node houve e compartilhar: http://IPdaSuaMáquina:3000