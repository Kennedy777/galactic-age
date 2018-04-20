# _Galactic Age Calculator_

#### _This application will determine a persons age on various planets. Personal project for Epicodus. Week 1 Javascript._

#### By: _**Brenda Franco**_

## Description
_This webpage application is designed to calculate the age of a person in galactic time. Given earth years, the program will return age in Mercury, Venus, Mars, and Jupiter years. The project will also determine how many years a person has left to live based on life expectancy. If a person has lived past their expected life expectancy, then The project will return how many years the person has lived beyond expected life expectancy._

_This project uses Webpack to bundle and minify the code. The test runner is Karma and the syntax flavor is Jasmine. Babel is used to transpile ES6. All dependencies required are included in this project._

## Setup/Installation Requirement
* Clone repository on your local computer.
* If you already have Node, Homebrew, and Karma installed, then skip to "Install Dependencies."

  #### Node: Windows / Linux Installation Instructions
  * To install Node on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

  #### Node: OSX Installation Instructions
  * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
    * $ brew install node
  * Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):
    * $ node -v
    * $ npm -v

  #### Homebrew Installation
  * If you do not have Homebrew installed yet, you may install it by copying and pasting this command:
    * $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  * Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
    * $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

  #### Karma Installation
  * If you do not have Karma installed globally, then run the following:
    * $ npm install -g karma-cli

  #### Install dependencies
  * Enter the following code in the command line to install all dependencies:
    * $ npm install

  #### Working with the project in Node:
  * To build and bundle the project in webpack run the following:
    * $ npm run build
  * To run the local test server:
    * $ npm run start
  * To run test in Karma:
    * $ npm test


## Known Bugs
_There is no UI._
_The program does not account for leap years._
_The program does not account for birth months or days._


## Contact Information
_Do not contact anyone with questions or comments regarding this project._

## Technologies Used
| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| * webpack | * bootstrap |
| * eslint | * jquery |
| * karma & jasmine | * popper
| * babel-loader |  |
| * css-loader & style-loader | | |

### Specs
1. The program will take an age in years and convert it into seconds.
  * Input: 1
  * Output: 31536000
2. The program will take two dates and determine the difference, in seconds, between the two.
  * Input: 2018, 1985
  * Output: 1040688000
3. The program will return the age of a human in Mercury years. (A Mercury year is .24 Earth years).
  * Input: 1985
  * Output: 7.92
4. The program will return the age of a human in Venus years. (A Venus year is .62 Earth years).
  * Input: 1985
  * Output: 20.46
5. The program will return the age of a human in Mars years. (A Mars year is 1.88 Earth years).
  * Input: 1985
  * Output: 62.04
6. The program will return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years).
  * Input: 1985
  * Output: 391.38
7. The program will return the number of years a person has left to live on on Earth given an average life expectancy.
  * Input: 1985, 78.74
  * Output: 45.74
8. The program will return the number of years a person has left to live on each planet.
  * Input: 1985, 78.74
  * Output (Mercury): 10.98
  * Output (Venus): 28.36
  * Output (Mars): 85.99
  * Output (Jupiter): 542.48
9. If a person has lived beyond their life expectancy, the program will return the difference between a person's age and the life expectancy.
  * Input: 1939, 78.74
  * Output (Mercury): -0.06
  * Output (Venus): -0.16
  * Output (Mars): -0.49
  * Output (Jupiter): -3.08

### License
Copyright (c) 2018 ****_Brenda Franco_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
