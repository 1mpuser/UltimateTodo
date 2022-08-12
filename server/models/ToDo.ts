import { Schema, model } from 'mongoose';
const ToDoSchema = new Schema({
	text: { type: String, required: true },
	completed: { type: Boolean, required: true, default: false },
	time: { type: String, required: true },
	date: { type: String, required: true },
	memo: { type: String, required: false },
	username: { type: String, required: true }
});
const ToDo = model('ToDo', ToDoSchema);
export default ToDo;
