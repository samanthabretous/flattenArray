const expect = require('chai').expect;
const flatten = require('../flattenArray').flatten;
const removeNulls = require('../flattenArray').removeNulls;

describe('Flatten Array Test', () => {
  it('should return an array that does not contain any nested arrays', () => {
    const result1 = flatten([0, 2, [[2, 3], 8, 100, null, [[null]]], -2]);
    const result2 = flatten([]);
    const result3 = flatten([[[null]]]);
    const result4 = flatten(['string', { key: 'value' }, false, [], '']);
    expect(result1).eql([0, 2, 2, 3, 8, 100, null, null, -2]);
    expect(result2).eql([]);
    expect(result3).eql([null]);
    expect(result4).eql(['string', { key: 'value' }, false, '']);
  });

  it('should remove all `null`s from array', () => {
    const result1 = removeNulls([0, 2, 2, 3, 8, 100, null, null, -2]);
    const result2 = removeNulls([]);
    const result3 = removeNulls([null]);
    expect(result1).eql([0, 2, 2, 3, 8, 100, -2]);
    expect(result2).eql([]);
    expect(result3).eql([]);
  });
});
