/* eslint-disable no-unused-vars */
import { Job, Candidate, Skill } from '../common/model.js';

/**
 * Part 1: Basic utility functions.
 *
 * The challenge is to create optimal solutions for implementing some of the
 * common utility functions that we will need to build our ATS solution.
 *
 *
 */

/**
 * Filter the given jobs list and return only jobs that start between the given
 * start and end dates.
 *
 * @param {Array<Job>} jobs
 * @param {Date} startDate
 * @param {Date} endDate
 */
const filterByDate = (jobs, startDate, endDate) => {
  // ----- Challenge 2.1.1 - Complete the function here ---- //
  return jobs.filter(job => {
    return job.startDate >= startDate && job.startDate <= endDate
  });
};

/**
 * Filter the given candidates list and return only candidates that are born
 * on or after the given date.
 *
 * @param {Array<Candidate>} candidates
 * @param {Date} date
 */
const filterByBornAfter = (candidates, date) => {
  // ----- Challenge 2.1.2 - Complete the function here ---- //
  return candidates.filter(cand => {
    return cand.dateOfBirth >= date
  })
};

/**
 * Sort the given candidate list, so that candidates with most skills,
 * regardless of the levels, are at the beginning.
 *
 * @param {*} candidateList
 * @returns
 */
const orderBySkills = (candidateList) => {
  // ----- Challenge 2.1.3 - Complete the function here ---- //
  return candidateList.sort((a, b) => {
    return b.skills.length - a.skills.length
  })
};

/**
 * Sort the given candidate list, so that candidates with more valuable skills,
 * are at the beginning.
 * Each skill will be weighed as follows: Expert levels count as 10, Advanced levels count as 5, Beginner levels count as 1
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */
const orderByWeightedSkills = (candidateList) => {
  // ----- Challenge 2.1.4 - Complete the function here ---- //
  candidateList.forEach(candidate => {
    candidate.skills.forEach(skill => {
      if (skill.level === 0) {
        skill.level = 1
      }
      else if (skill.level === 1) {
        skill.level = 5
      }
      else if (skill.level === 2) {
        skill.level = 10
      }
    })
  })
  return candidateList.sort((a, b) => {
    const sumA = a.skills.reduce((sum, skill) => sum + skill.level, 0)
    const sumB = b.skills.reduce((sum, skill) => sum + skill.level, 0)
    return sumB - sumA
  });
};

/**
 * Return the ratio of female/male candidates in the list
 * @param {Array<Candidate>} candidateList
 * @returns a floating point number indicating the ratio
 */
const genderRatio = (candidateList) => {

  // ----- Challenge 2.1.5 - Complete the function here ---- //
};

/**
 * Return the month with the highest number of jobs starting,
 * indicated by the startDate property of each Job.
 * @param {Array<Job>} jobs
 * @returns number (0-11)
 */
const busiestMonth = (jobs) => {
  // ----- Challenge 2.1.6 - Complete the function here ---- //

  return 0;
};

/**
 * Return the skill name that is required the most in the given list of Jobs,
 * indicated by the requiredSkills property of each Job.
 *
 * @param {Array<Job>} jobs
 */
const mostInDemandSkill = (jobs) => {

  // ----- Challenge 2.1.7 - Complete the function here ---- //

};

export { filterByDate, filterByBornAfter, orderBySkills, orderByWeightedSkills, genderRatio, busiestMonth, mostInDemandSkill };
