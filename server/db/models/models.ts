import { DataTypes } from 'sequelize/types';
import sequelize from '.';
import IDateToDoClusterModel from './IDateToDoClusterModel';
import IUserModel from './IUserModel';
import IToDo from './IToDo';

export const User = sequelize.define<IUserModel>('User', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
	},
	username: {
		type: DataTypes.STRING,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
	},
});
export const DateToDoCluster = sequelize.define<IDateToDoClusterModel>(
	'Date_ToDo_Cluster',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		date: {
			type: DataTypes.DATEONLY,
		},
	}
);
export const ToDo = sequelize.define<IToDo>('ToDo', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	time: {
		type: DataTypes.TIME,
	},
	completed: {
		type: DataTypes.BOOLEAN,
	},
	memo: {
		type: DataTypes.STRING,
	},
});

User.hasMany(DateToDoCluster);
DateToDoCluster.belongsTo(User);

DateToDoCluster.hasMany(ToDo);
ToDo.belongsTo(DateToDoCluster);

module.exports = {
	ToDo,
	DateToDoCluster,
	User,
};
