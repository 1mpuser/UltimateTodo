import { areArraysTheSame } from '../scripts/areArraysTheSame';

test('Are arrays the same', () => {
	expect(areArraysTheSame([1, 23, 33], [1, 23, 33])).toBeTruthy();
});
