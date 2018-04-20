class Age {
  constructor(yearBirth) {
    this.yearBirth = yearBirth;
  }

  getAge() {
    return this.age;
  }

  getYearBirth() {
    return this.yearBirth;
  }

  setAgeToday(yearCurrent) {
    let age = yearCurrent - this.yearBirth;
    this.age = age;
  }

  setLifeExpectancy(inputAge) {
    this.lifeExpectancy = inputAge;
  }

  setRemainingLife() {
    let remainingYears = this.lifeExpectancy - this.age;
    this.remainingLife = parseFloat(remainingYears.toFixed(2));
  }

  getRemainingLife() {
    return this.remainingLife;
  }

  ageYearsToSeconds() {
    return this.age*31536000;
  }

  ageEarthToMercury() {
    let mercuryAge = this.age*0.24;
    return parseFloat(mercuryAge.toFixed(2));
  }

  ageEarthToVenus() {
    let venusAge = this.age*0.62;
    return parseFloat(venusAge.toFixed(2));
  }

  ageEarthToMars() {
    let marsAge = this.age*1.88;
    return parseFloat(marsAge.toFixed(2));
  }

  ageEarthToJupiter() {
    let jupiterAge = this.age*11.86;
    return parseFloat(jupiterAge.toFixed(2));
  }

}

export { Age };
