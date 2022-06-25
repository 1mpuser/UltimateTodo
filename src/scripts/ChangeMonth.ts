export default function ChangeMonth(date : Date, addMonth : boolean, amountOfMonths :  number = 1) {
	if (addMonth) date.setMonth(date.getMonth() + amountOfMonths);
	else date.setMonth(date.getMonth() - amountOfMonths);
	return date;
}
