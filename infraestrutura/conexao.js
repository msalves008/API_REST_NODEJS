const mysql = require ('mysql')

const conexao = mysql.createConnection({
    host: '192.185.215.145',
    port: 3306,
    user:'dyotec69_admin' ,
    password: 'admin',
    database: 'dyotec69_agenda_petshop'
})

module.exports = conexao