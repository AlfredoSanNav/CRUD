const {Sequelize} = require('sequelize');

const UserModel = require('./models/users')

const sequelize = new Sequelize({
    dialect: 'mssql',
    dialectModule: require('tedious'),
    host: 'host.database.windows.net',
    port: 1433,
    database: 'database',
    username: 'username',
    password: 'password',
    options: {
        ecrypt: true
    }
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false})
.then(() =>{
    console.log("Tablas sincronizadas")
})

module.exports = {
    User
}