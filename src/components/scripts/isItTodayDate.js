export default function isItTodayDate(incomeDate) {
	let date = new Date();
	if (
		date.getDate() == incomeDate.getDate() &&
		date.getMonth() == incomeDate.getMonth() &&
		date.getFullYear() == incomeDate.getFullYear()
	)
		return true;
	else return false;
}
