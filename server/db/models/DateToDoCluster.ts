import { DataTypes, Model, Optional } from 'sequelize';
import { User } from './User';
import sequelize from './index';

interface DateToDoClusterAttributes {
	id: string;
	date: string | Date;
}
interface DateToDoClusterCreationAttributes
	extends Optional<DateToDoClusterAttributes, 'id'> {}

interface DateToDoClusterInstance
	extends Model<DateToDoClusterAttributes, DateToDoClusterCreationAttributes>,
		DateToDoClusterAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}
export const DateToDoCluster = sequelize.define<DateToDoClusterInstance>(
	'DateToDoCluster',
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

DateToDoCluster.belongsTo(User, {
	foreignKey: 'userId',
	as: 'User',
});
//export default DateToDoCluster;

// module.exports = (sequelize: Sequelize) => {
// 	const DateToDoCluster = sequelize.define<DateToDoClusterInstance>(
// 		'DateToDoCluster',
// 		{
// 			id: {
// 				type: DataTypes.INTEGER,
// 				primaryKey: true,
// 				autoIncrement: true,
// 			},
// 			date: {
// 				type: DataTypes.DATEONLY,
// 			},
// 		}
// 	);
// 	DateToDoCluster.belongsTo(User, {
// 		foreignKey: 'userId',
// 		as: 'User',
// 	});
// 	return DateToDoCluster;
// };
