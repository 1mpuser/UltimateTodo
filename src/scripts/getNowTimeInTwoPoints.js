export default function getNowTimeInTwoPoints() {
	const date = new Date();
	return `${date.getHours()}:${date.getMinutes()}`;
}
