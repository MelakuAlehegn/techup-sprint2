import * as Utils from '../../challenges/challenge.2.1';
import { Job, Skill } from '../../common/model';

const j1 = new Job('J1', '', [new Skill('S1', 0), new Skill('S2', 0), new Skill('S3', 0), new Skill('S4', 0)], 'M', new Date(2023, 1, 1));
const j2 = new Job('J2', '', [new Skill('S1', 0), new Skill('S2', 0)], 'F', new Date(2023, 1, 3));
const j3 = new Job('J3', '', [new Skill('S2', 0), new Skill('S4', 0)], 'F', new Date(2023, 2, 1));
const j4 = new Job('J4', '', [new Skill('S1', 0)], 'M', new Date(2023, 2, 1));


test('Most in demand skill test', () => {
    expect(
        Utils.mostInDemandSkill([j1, j2, j3, j4]))
        .toEqual("S2")
})
test('Most in demand skill test', () => {
    expect(
        Utils.mostInDemandSkill([j3, j4]))
        .toEqual("S1")
})
test('Most in demand skill test', () => {
    expect(
        Utils.mostInDemandSkill([j4]))
        .toEqual("S1")
})