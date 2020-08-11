const customExpress =  require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro)=>{
    if(erro){
        console.log(erro)
    } else{
        tabelas.init(conexao)

        console.log('Bando de Dados Conectado com Sucesso')
        
        const app = customExpress()
                
        app.listen(3000,()=>{
            console.log('Start Server')
        })
    }
})

