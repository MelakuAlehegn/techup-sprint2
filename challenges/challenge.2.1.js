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
    return job.startDate >= startDate && job.startDate <= endDate;
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
    return cand.dateOfBirth >= date;
  });
};

/**
 * Sort the given candidate list, so that candidates with most skills,
 * regardless of the levels, are at the beginning.
 *
 * @param {*} candidateList
 * @returns
 */
const orderBySkills = (candidateList) => {
  return candidateList.sort((a, b) => {
    return b.skills.length - a.skills.length;
  });
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
  candidateList.forEach(candidate => {
    candidate.totalPoints = candidate.skills.reduce((accumulator, skill) => {
      if (skill.level === 2) {
        return accumulator + 10;
      } else if (skill.level === 1) {
        return accumulator + 5;
      } else {
        return accumulator + 1;
      }
    }, 0);
  });
  return candidateList.sort((a, b) => b.totalPoints - a.totalPoints);
};

/**
 * Return the ratio of female/male candidates in the list
 * @param {Array<Candidate>} candidateList
 * @returns a floating point number indicating the ratio
 */
const genderRatio = (candidateList) => {
  let female = 0;
  let male = 0;
  candidateList.forEach(candidate => {
    candidate.gender === 'F' ? female += 1 : male += 1;
  });
  return female / male;
};

/**
 * Return the month with the highest number of jobs starting,
 * indicated by the startDate property of each Job.
 * @param {Array<Job>} jobs
 * @returns number (0-11)
 */
const busiestMonth = (jobs) => {
  const obj = {};
  jobs.forEach(job => {
    const startMonth = job.startDate.getMonth();
    if (startMonth in obj) obj[startMonth] += 1;
    else obj[startMonth] = 1;
  });
  const maxim = Object.keys(obj).reduce((a, b) => {
    return obj[a] > obj[b] ? a : b;
  }, 0);
  return Number(maxim);
};
/**
 * Return the skill name that is required the most in the given list of Jobs,
 * indicated by the requiredSkills property of each Job.
 *
 * @param {Array<Job>} jobs
 */
const mostInDemandSkill = (jobs) => {
  const obj = {};
  jobs.forEach(job => {
    job.requiredSkills.forEach(skill => {
      const requiredSkill = skill.name;
      if (requiredSkill in obj) obj[requiredSkill] += 1;
      else obj[requiredSkill] = 1;
    });
  });
  const maxim = Object.keys(obj).reduce((a, b) => {
    return obj[a] > obj[b] ? a : b;
  });
  return maxim;
};

export { filterByDate, filterByBornAfter, orderBySkills, orderByWeightedSkills, genderRatio, busiestMonth, mostInDemandSkill };
