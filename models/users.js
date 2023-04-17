module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        firstLastName: {
            type: type.STRING,
            allowNull: false
        },
        secondLastName: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: {
                    args: true,
                    msg: 'Por favor, introduce una dirección de correo válida.'
                }
        }
    }})
}