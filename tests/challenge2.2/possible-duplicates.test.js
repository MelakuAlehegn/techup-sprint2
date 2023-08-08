import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane', new Date(2010, 1, 1), [], 'F');
const c2 = new Candidate('Birhanie', new Date(2010, 7, 1), [], 'F');
const c3 = new Candidate('Brhanne', new Date(2010, 1, 1), [], 'F');
const c4 = new Candidate('Abraham', new Date(2010, 1, 1), [], 'F');
const c5 = new Candidate('Abreham', new Date(2010, 1, 1), [], 'M');

test('Possible duplicate test', () => {
    expect(
        Utils.possibleDuplicates(c1, [c1, c2, c3]))
        .toEqual([c1, c3])
})
test('Possible duplicate test', () => {
    expect(
        Utils.possibleDuplicates(c1, [c2, c3]))
        .toEqual([c3])
})
test('Possible duplicate test', () => {
    expect(
        Utils.possibleDuplicates(c4, [c1, c2, c3, c5]))
        .toEqual([c5])
})
