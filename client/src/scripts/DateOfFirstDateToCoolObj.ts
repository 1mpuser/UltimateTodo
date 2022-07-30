import areArraysTheSame from './areArraysTheSame';
import checkDate from './checkDate';
export default function DateToWorkObject(date : Date) {
	interface customObj {
		arr : string[][]
		fifthWeekEmpty : boolean
		sixthWeekEmpty : boolean
	}
	const normalVariationOfDays : number[] = [6, 0, 1, 2, 3, 4, 5];
	//const obj = {}; obj would be in the end;
	let tmpAmountOfDays : number;
	for (let i = 32; i > 0; i--) {
		if (checkDate(date.getFullYear(), date.getMonth(), i)) {
			tmpAmountOfDays = i;
			break;
		}
	}
	const amountOfDaysInMonth : number =  31;
	let amountOfRemainingDays = amountOfDaysInMonth;
	let emptyArr = [' ', ' ', ' ', ' ', ' ', ' ', ' '];
	const doubleArr = [
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	];
	const indexOfStartingCell = normalVariationOfDays[date.getDay()];

	for (let i = indexOfStartingCell; i < doubleArr[0].length; i++) {
		doubleArr[0][i] = String(amountOfDaysInMonth - amountOfRemainingDays + 1)
		amountOfRemainingDays--;
	}
	let tmpArr = [];
	for (
		let i = amountOfDaysInMonth - amountOfRemainingDays + 1;
		i <= amountOfDaysInMonth;
		i++
	)
		tmpArr.push(i);
	let counterOfTempArr = 0;
	for (let i = 1; i < doubleArr.length; i++) {
		for (let j = 0; j < doubleArr[i].length; j++) {
			if (counterOfTempArr < tmpArr.length) {
				doubleArr[i][j] = String(tmpArr[counterOfTempArr])
				counterOfTempArr++;
			}
		}
	}
	let is5thWeekEmpty = areArraysTheSame(doubleArr[4], emptyArr);
	const isLastWeekEmpty = areArraysTheSame(doubleArr[5], emptyArr);
	const obj : customObj = {
		arr: doubleArr,
		fifthWeekEmpty: is5thWeekEmpty,
		sixthWeekEmpty: isLastWeekEmpty,
	};
	return obj;
}
