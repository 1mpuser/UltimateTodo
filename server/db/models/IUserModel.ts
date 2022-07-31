import { DataTypes, Optional, Model } from 'sequelize';
// import { DateToDoCluster } fro.els';

interface UserAttributes {
	id: string;
	email: string;
	password: string;
	username: string;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface IUserModel
	extends Model<UserAttributes, UserCreationAttributes>,
		UserAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}
export default IUserModel;
