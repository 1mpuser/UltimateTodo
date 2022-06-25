export default function getDateFromDotFormat(str : string) : Date {
	const arr = str.split('.');
	const day = arr[0];
	const month = Number(arr[1]) - 1;
	const year = arr[2];
	return new Date(+year, month, +day);
}
