import { Age } from './../src/age.js';

describe('Age', function() {

  beforeEach(function() {
    let todayDate = new Date();
  });

  it('will take an age in years and convert it into seconds.', function() {
    let newUser = new Age(2017, 1);
    let output = newUser.yearsToSeconds();
    expect(output).toEqual(31536000);
  });
});
