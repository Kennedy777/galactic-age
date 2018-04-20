class Age {
  constructor(yearBirth, age = 0) {
    this.yearBirth = yearBirth;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  yearsToSeconds() {
    return this.age*31536000;
  }

}

export { Age };
