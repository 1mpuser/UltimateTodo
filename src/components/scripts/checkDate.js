export default function checkDate(year, month, day) {
	let flag = true;
	let date = new Date(year, month, day);
	if (year != date.getFullYear()) flag = false;
	if (month != date.getMonth()) flag = false;
	if (day != date.getDate()) flag = false;
	return flag;
}
