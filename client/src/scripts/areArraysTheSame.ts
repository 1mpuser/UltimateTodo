export default function areArraysTheSame(array1 : any[], array2 : any[]) : boolean {
	return (
		array1.length === array2.length &&
		array1.every((element, index) => element === array2[index])
	);
}