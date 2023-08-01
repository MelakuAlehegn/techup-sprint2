/* eslint-disable no-unused-vars */
import { Candidate } from '../common/model.js';

/**
 * Part 2: Duplicate Candidate Detection
 * ------------------------------------------
 *
 * One of the challenges when building an ATS is preventing duplicate entries in the candidate database.
 * We want to prevent scenarios where the same person, knowingly or otherwise, get registered multiple times using different
 * phone numbers or email.
 * This is especially difficult with Ethiopian names where the same name can be written in different ways:
 * - eg: ብርሃኔ = Berhane, Birhane, Birhanie, Birhanne etc
 * - eg: ብስራት = Bisrat, Bsrat, Besrat, Bsrate, Bissrat
 * - eg: አብረሃም = Abreham, Abrham, Abraham, Abriham
 */

/**
 * One strategy for detecting duplicate names is to compare normalized versions of each name.
 * 1. Vowels are often used interchangeably, so we will remove all instances of vowels, ** EXCEPT in the first character **.
 *      eg. Abreham -> Abrhm, Birhanie -> Brhn
 * 2. We will remove double letters. Eg. Bissrat -> Bssrt -> Bsrt
 * 3. We'll remove all non-character letters, eg. spaces, '-' or '/'; Wolde Mariam -> Wld Mrm -> Wldmrm
 * 3. we'll make all characters uppercase. Abreham -> Abrhm -> ABRHM
 *
 * This function returns a normalized version of the given string, according to the
 * above rules.
 *
 * @param {String} name
 * @returns String
 */
const normalizedName = (name) => {
  // ----- Challenge 2.2.1 - Complete the function here ---- //
  name = name.replace(/[^a-zA-Z]/g, "") // remove all non characters
  let firstChar = name.charAt(0)
  let restChar = name.slice(1)
  name = firstChar + restChar.replace(/[aeiou]/gi, '') // replace all the vowel letters
  name = name.toUpperCase()
  let result = '';
  for (let i = 0; i < name.length; i++) {
    if (!result.includes(name[i])) {
      result += name[i]
    }
  }
  return result
};

/**
 * This function compares two candidates and returns true if all of the following are true:
 * - the candidates' normalized names are identical
 * - their dates of birth have no more than 10 days difference.
 *
 * @param {Candidate} candidate1
 * @param {Candidate} candidate2
 * @returns true or false
 */
const areSimilarCandidates = (candidate1, candidate2) => {
  // ----- Challenge 2.2.2 - Complete the function here ---- //
  const cand1bd = candidate1.dateOfBirth.getTime()
  const cand2bd = candidate2.dateOfBirth.getTime()
  let difference = (cand1bd - cand2bd) / (24 * 60 * 60 * 1000)
  let normalizedOne = normalizedName(candidate1.name)
  let normalizedtwo = normalizedName(candidate2.name)
  if (difference < 0) {
    difference = -1 * difference
  }
  if (difference <= 10 && normalizedOne === normalizedtwo) {
    return true
  }
  return false;
};

/**
 * Given a candidate, return possible duplicates of this candidate
 * in the given candidateList.
 *
 * @param {Candidate} newCandidate
 * @param {Array<Candidate>} candidateList
 */
const possibleDuplicates = (newCandidate, candidateList) => {
  // ------ Challenge 2.2.3 - Complete the function here ---- //
  let newArray = []
  candidateList.forEach(candidate => {
    if (newCandidate.name === candidate.name) {
      newArray.push(candidate)
    }
  })
  return newArray;
};

/**
 * We want to transform the given candidate list into a dictionary index
 * that enable us to lookup a normalized name and get all the corresponding candidates.
 * A sample output may be:
 * { 'ABRHM' -> [ Candidate {name: 'Abraham', ...},
 *                Candidate {name: 'Abreham', ...},
 *              ],
 *   'BRHN'  -> [ Candidate {name: 'Berhane', ...},
 *                Candidate {name: 'Brhanne', ...},
 *              ]
 * }
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */
const candidateIndex = (candidateList) => {
  // ------ Challenge 2.2.4 - Complete the function here ---- //
  return 0;
};

/**
 * Find the number of (likely) duplicates in the given list,
 * according to the rules implemented in the areSimilarCandidates function.
 *
 * The candidateList can be a very large list, so the solution should only traverse the list once.
 *
 * @param {Array<Candidate>} candidateList
 *
 * @returns
 */
const duplicateCount = (candidateList) => {
  // ------ Challenge 2.2.5 - Complete the function here ---- //
  return 0;
};

export { normalizedName, areSimilarCandidates, possibleDuplicates, duplicateCount, candidateIndex };
