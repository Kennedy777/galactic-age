import { Age } from './../src/age.js';

describe('Age', function() {

  it('will take an age in years and convert it into seconds.', function() {
    let newUser = new Age(2017);
    newUser.age = 1;
    let output = newUser.ageYearsToSeconds();
    expect(output).toEqual(31536000);
  });

  it('will take two dates and determine the difference, in seconds, between the two.', function() {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    let newUser = new Age(1985);
    newUser.setAgeToday(todayYear);
    let output = newUser.ageYearsToSeconds();
    expect(output).toEqual(1040688000);
  });

  it('will return the age of a human in Mercury years.', function() {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    let newUser = new Age(1985);
    newUser.setAgeToday(todayYear);
    let output = newUser.ageEarthToMercury();
    expect(output).toEqual(7.92);
  });

});
