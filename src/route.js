const express = require('express')
const questionController = require('./controllers/QuestionContoller')
 // importasse o express para poder usar
//Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node.
// O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs. 
//Integrar "view engines" para inserir dados nos templates.
const route = express.Router() // a contante router guarda todas as funcionalidadees de rotas que o express tem 


route.get('/', (req, res) =>  res.render("index"))  // aqui mostra onde vai abrir no chrome, req= requisicao/ res= response, vai responder
route.get('/room', (req, res) =>  res.render("room")) // res-> vai ser a respostar reinderizada passando o ejs 
route.get('/create-pass', (req, res) =>  res.render("create-pass"))



// formato que o formulario de dentro da modal tem que passar a informacao
route.post('/room/:room/:question/:action', QuestionController.index)
 // coloca-se a rota com ":" e o nome da variavel -> depois coloca-se o question e mais a acao 




module.exports = route

// aqui ele esta exportanto a rota 


