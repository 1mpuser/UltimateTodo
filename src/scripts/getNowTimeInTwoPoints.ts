export default function getNowTimeInTwoPoints() : string {
	const date = new Date();
	return `${date.getHours()}:${date.getMinutes()}`;
}
