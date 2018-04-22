export function diff(year1, year2) {
  let diff = (year1 - year2).toFixed(2);
  return parseFloat(diff);
}

export function postDecimalDigits(number) {
  let output = number.toFixed(2);
  return parseFloat(number);
}

class Age {
  constructor(yearBirth, yearCurrent, lifeExpectancy) {
    this.yearBirth = yearBirth;
    this.yearCurrent = yearCurrent;
    this.lifeExpectancy = lifeExpectancy;
    this.age = diff(this.yearCurrent - this.yearBirth);
    this.remainingLife = diff(this.lifeExpectancy - this.age);
  }

  getAge() {
    return this.age;
  }

  getYearBirth() {
    return this.yearBirth;
  }

  getRemainingLife() {
    return this.remainingLife;
  }

  ageYearsToSeconds() {
    return this.age*31536000;
  }

  ageEarthToMercury() {
    return postDecimalDigits(this.age*0.24);
  }

  ageEarthToVenus() {
    return postDecimalDigits(this.age*0.62);
  }

  ageEarthToMars() {
    return postDecimalDigits(this.age*1.88);
  }

  ageEarthToJupiter() {
    return postDecimalDigits(this.age*11.86);
  }

  remainingLifeToMercury() {
    return postDecimalDigits(this.remainingLife*0.24);
  }

  remainingLifeToVenus() {
    return postDecimalDigits(this.remainingLife*0.62);
  }

  remainingLifeToMars() {
    return postDecimalDigits(this.remainingLife*1.88);
  }

  remainingLifeToJupiter() {
    return postDecimalDigits(this.remainingLife*11.86);
  }
}

export { Age };
