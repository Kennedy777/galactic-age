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
