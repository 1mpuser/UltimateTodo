import { DataTypes, Optional, Model } from 'sequelize';

interface ToDoAttributes {
	id: string;
	time: string | Date;
	completed: boolean;
	memo: string;
}
interface UserCreationAttributes extends Optional<ToDoAttributes, 'id'> {}

interface IToDo
	extends Model<ToDoAttributes, UserCreationAttributes>,
		ToDoAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}
export default IToDo;
