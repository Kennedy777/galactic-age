import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function() {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    const inputBirthYear = parseInt($("#birthyear").val());
    let inputLifeExpectancy = parseInt($("#birthyear").val());
    let newUser = new Age(inputBirthYear);

    newUser.setAgeToday(todayYear);
    newUser.setLifeExpectancy(inputLifeExpectancy);
    newUser.setRemainingLife();

    let output = newUser.ageEarthToMercury();
    let output = newUser.ageEarthToVenus();
    let output = newUser.ageEarthToMars();
    let output = newUser.ageEarthToJupiter();

    let outputMercury = newUser.remainingLifeToMercury();
    let outputVenus = newUser.remainingLifeToVenus();
    let outputMars = newUser.remainingLifeToMars();
    let outputJupiter = newUser.remainingLifeToJupiter();

  });
});
