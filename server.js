const app = require('./app')

//Caso a porta não esteja configurada no .env, roda o app na porta 3000
const port = process.env.PORT || 3000

//Roda a aplicação
const server = app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
})

//Finaliza a aplicação
process.on('SIGINT', () => {
    server.close()
    console.log("Aplicação finalizada")
})