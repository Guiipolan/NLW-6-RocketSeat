const express = require('express') // aqui estamos fazendo a requisicao do server 
const route = require('./route')  // aqui onde faz o camkinho da rota que vem do server 
const path = require('path') // aqui eh um modulo para passar a pasta path=caminho 

const server = express()   //express eh o server 


server.set('view engine', 'ejs') // serve para o ejs funcionar o view engine->
                                // aqqui estamos falando para o server que a view engine vai ser EJS 

server.use(express.static("public")) // aqui vamos falar para o express que estamos usando o public 
// express usa, o conteudo statico com o nome da pasta public 

server.set('views', path.join(__dirname, 'views')) // aqui esta passando a pasta views atraves do camionho (path) 
                            // O JOIN FAZ A UNIAO DO CAMINHO COM O __DIRNAME QUE EH  O SRC, (EH UMA VARIAVEL GLOBAL) QUE ESTA JUNTANDO COM O VIEWS 
                            // ENTAO SIGNIFICA QUE O CAMINHO FICA .../ROQUETSEATNLW-DISCOVER/src/views 
server.use(express.urlencoded({extended:true}))
server.use(route) // aqui diz para usar a rota 

server.listen(3000, ()=> console.log("RODANDO")) // aqui passa onde vai abrir no Browser 