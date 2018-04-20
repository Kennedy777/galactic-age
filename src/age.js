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

}

export { Age };
