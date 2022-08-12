import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	username: { type: String, unique: true, required: true },
	password: { type: String, required: true } //,
});
//module.exports = model('User', User);
const User = model('User', UserSchema);
export default User;
