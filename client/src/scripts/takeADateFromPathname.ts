export default function takeADateFromPathname(pathname : string) {
	const arr = pathname.split('/')[2].split('.');
	const year = arr[2];
	const month = +arr[1] - 1;
	const date = arr[0];
	return new Date(+year, month, +date);
}
