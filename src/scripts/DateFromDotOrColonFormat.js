export default function DateFromDotOrColonFormat(DotOrColonFormatString) {
	const nowDate = new Date();
	if (!DotOrColonFormatString) return nowDate;
	//let arr = DotDotDotFormat.split('.');
	let arr = [];
	if (/\./.test(DotOrColonFormatString)) {
		arr = DotOrColonFormatString.split('.');
	} else if (/\:/.test(DotOrColonFormatString)) {
		arr = DotOrColonFormatString.split(':');
	} else if (Number(DotOrColonFormatString) == DotOrColonFormatString)
		arr[0] = DotOrColonFormatString;
	else return null;

	const date = new Date(
		nowDate.getFullYear(),
		nowDate.getMonth(),
		nowDate.getDate(),
		...arr
	);
	return date;
}
