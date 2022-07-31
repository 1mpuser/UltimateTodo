import { DataTypes, Optional, Model } from 'sequelize';
import { DateToDoCluster } from './../models';
import sequelize from './index';

interface UserAttributes {
	id: string;
	email: string;
	password: string;
	username: string;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance
	extends Model<UserAttributes, UserCreationAttributes>,
		UserAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}
export const User = sequelize.define<UserInstance>('User', {
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

//Assosiation here
User.hasMany(DateToDoCluster, {
	sourceKey: 'id',
	foreignKey: 'userId',
	as: 'DateToDoClusters',
});

export default User;

//export default User;
// module.exports = (sequelize: Sequelize) => {
// 	const User = sequelize.define<UserInstance>('User', {
// 		id: {
// 			type: DataTypes.INTEGER,
// 			primaryKey: true,
// 			autoIncrement: true,
// 		},
// 		email: {
// 			type: DataTypes.STRING,
// 			unique: true,
// 		},
// 		username: {
// 			type: DataTypes.STRING,
// 			unique: true,
// 		},
// 		password: {
// 			type: DataTypes.STRING,
// 		},
// 	});

// 	//Assosiation here
// 	User.hasMany(DateToDoCluster, {
// 		sourceKey: 'id',
// 		foreignKey: 'userId',
// 		as: 'DateToDoClusters',
// 	});

// 	return User;
// };
