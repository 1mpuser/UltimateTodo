export default function ChangeMonth(date, addMonth, amountOfMonths = 1) {
	if (addMonth) date.setMonth(date.getMonth() + amountOfMonths);
	else date.setMonth(date.getMonth() - amountOfMonths);
	return date;
}
