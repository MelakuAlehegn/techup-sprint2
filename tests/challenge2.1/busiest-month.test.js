/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job } from '../../common/model';

const j1 = new Job('J1', '', undefined, 'M', new Date(2023, 1, 1));
const j2 = new Job('J2', '', undefined, 'F', new Date(2023, 1, 3));
const j3 = new Job('J3', '', undefined, 'F', new Date(2023, 2, 1));
const j4 = new Job('J4', '', undefined, 'M', new Date(2023, 2, 1));
const j5 = new Job('J5', '', undefined, 'M', new Date(2023, 3, 1));
const j6 = new Job('J6', '', undefined, 'M', new Date(2023, 3, 1));
const j7 = new Job('J7', '', undefined, 'M', new Date(2023, 3, 1));
const j8 = new Job('J1', '', undefined, 'M', new Date(2023, 1, 3));



test('Gender test', () => {
    expect(
        Utils.busiestMonth([j1, j2, j3, j4, j5, j6, j7, j8]))
        .toEqual(3)
})
test('Gender test', () => {
    expect(
        Utils.busiestMonth([j1, j2, j3, j4, j6, j7, j8]))
        .toEqual(1)
})
test('Gender test', () => {
    expect(
        Utils.busiestMonth([j3, j4, j7, j8]))
        .toEqual(2)
})
test('Gender test', () => {
    expect(
        Utils.busiestMonth([j8]))
        .toEqual(1)
})