export default function DateFromDotOrColonFormat(DotOrColonFormatString : string) {
	const nowDate = new Date();
	if (!DotOrColonFormatString) return nowDate;
	//let arr = DotDotDotFormat.split('.');
	let arr : string[] = [];
	if (/\./.test(DotOrColonFormatString)) {
		arr = DotOrColonFormatString.split('.');
	} else if (/\:/.test(DotOrColonFormatString)) {
		arr = DotOrColonFormatString.split(':');
	} else if (Number(DotOrColonFormatString) != 0)
		arr[0] = DotOrColonFormatString;
	else return nowDate;

	const numberArrForDate : number[] = arr.map((item) => Number(item))

	const date : Date = new Date(
		nowDate.getFullYear(),
		nowDate.getMonth(),
		nowDate.getDate(),
		...numberArrForDate
	);
	return date;
}
