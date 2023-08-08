import * as Utils from '../../challenges/challenge.2.1';
import { Candidate, Skill } from '../../common/model';

const c1 = new Candidate('C1', new Date(2010, 1, 1), [new Skill('S1'), new Skill('S2', 0), new Skill('S3', 1)]);
const c2 = new Candidate('C2', new Date(2011, 1, 1), [new Skill('S1', 1), new Skill('S2', 2)]);
const c3 = new Candidate('C3', new Date(2012, 1, 1), [new Skill('S1', 2)]);

test('Sort by weighted skills', () => {
    expect(
        Utils.orderByWeightedSkills([c1, c2, c3]))
        .toEqual(
            [c2, c3, c1]
        );
});
test('Sort by weighted skills', () => {
    expect(
        Utils.orderByWeightedSkills([c2, c1, c3]))
        .toEqual(
            [c2, c3, c1]
        );
});
test('Sort by weighted skills', () => {
    expect(
        Utils.orderByWeightedSkills([c1, c3]))
        .toEqual(
            [c3, c1]
        );
});
