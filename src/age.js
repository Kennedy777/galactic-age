class Age {
  constructor(yearBirth, age = 0) {
    this.yearBirth = yearBirth;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  getYearBirth() {
    return this.yearBirth;
  }

  pushAgeToday(yearCurrent) {
    return this.age = yearCurrent - this.yearBirth;
  }

  yearsToSeconds() {
    return this.age*31536000;
  }

}

export { Age };
