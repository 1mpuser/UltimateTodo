import { DataTypes } from "sequelize/types";
import { Sequelize } from 'sequelize';
const sequelize : Sequelize = require('./db')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    email: {
        type: DataTypes.STRING,
        unique : true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    }
})
export const DateToDoCluster = sequelize.define('date_todo_cluster', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type : DataTypes.DATEONLY
    }
});
export const ToDo = sequelize.define('todo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    time: {
        type: DataTypes.TIME,
    },
    completed: {
        type : DataTypes.BOOLEAN,
    },
    memo: {
        type : DataTypes.STRING
    }
})




User.hasMany(DateToDoCluster)
DateToDoCluster.belongsTo(User);

DateToDoCluster.hasMany(ToDo);
ToDo.belongsTo(DateToDoCluster);

module.exports = {
    ToDo,
    DateToDoCluster,
    User
}