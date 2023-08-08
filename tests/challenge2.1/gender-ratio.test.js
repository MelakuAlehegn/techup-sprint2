/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Candidate } from '../../common/model';

const c1 = new Candidate('C1', new Date(2010, 1, 1), [], 'F');
const c2 = new Candidate('C2', new Date(2010, 1, 1), [], 'F');
const c3 = new Candidate('C3', new Date(2010, 1, 1), [], 'M');
const c4 = new Candidate('C4', new Date(2010, 1, 1), [], 'M');
const c5 = new Candidate('C5', new Date(2010, 1, 1), [], 'F');

test('Gender Ratio test', () => {
    expect(
        Utils.genderRatio([c1, c2, c3]))
        .toEqual(2)
})
test('Gender Ratio test', () => {
    expect(
        Utils.genderRatio([c1, c2, c3, c4, c5]))
        .toEqual(1.5)
})
test('Gender Ratio test', () => {
    expect(
        Utils.genderRatio([c3, c4]))
        .toEqual(0)
})
test('Gender Ratio test', () => {
    expect(
        Utils.genderRatio([c1, c3, c4]))
        .toEqual(0.5)
})
