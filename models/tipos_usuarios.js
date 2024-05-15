const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const TipoUsuarios = sequelize.define(
  "tipos_usuarios", {
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

module.exports = TipoUsuarios;
