export default function getParentElementByChildId(id) {
	let elem = document.getElementById(id);
	return elem.parentElement;
}
