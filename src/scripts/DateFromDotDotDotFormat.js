export default function DateFromDotDotDotFormat(DotDotDotFormat) {
	const nowDate = new Date();
	if (!DotDotDotFormat) return nowDate;
	const arr = DotDotDotFormat.split('.');
	const date = new Date(
		nowDate.getFullYear(),
		nowDate.getMonth(),
		nowDate.getDate(),
		...arr
	);
	return date;
}
