import { DataTypes, Model, Optional } from 'sequelize';

interface DateToDoClusterAttributes {
	id: string;
	date: string | Date;
}
interface DateToDoClusterCreationAttributes
	extends Optional<DateToDoClusterAttributes, 'id'> {}

interface IDateToDoClusterModel
	extends Model<DateToDoClusterAttributes, DateToDoClusterCreationAttributes>,
		DateToDoClusterAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}
export default IDateToDoClusterModel;
