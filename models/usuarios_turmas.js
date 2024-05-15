const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const UsuarioTurmas = sequelize.define(
    "usuarios_turmas", {
        Usuarios_idUsuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true, // Define essa coluna como a chave primária
            allowNull: false,
          },
        Turmas_idTurmas: {
            type: Sequelize.INTEGER,
            primaryKey: true, // Define essa coluna como a chave primária
            allowNull: false, 
        },
    },
    {
        timestamps: false, // Adiciona colunas createdAt e updatedAt automaticamente
      }
)

module.exports = UsuarioTurmas;
