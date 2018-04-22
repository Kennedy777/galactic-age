import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Age } from './../src/age.js';

$(document).ready(function() {
  $(".solar-system").hide();
  $("form").submit(function(event) {
    event.preventDefault();

    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    const inputBirthYear = parseInt($("#birthyear").val());
    let inputLifeExpectancy = parseInt($("#life").val());
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let ageMercury = newUser.ageEarthToMercury();
    let ageVenus = newUser.ageEarthToVenus();
    let ageMars = newUser.ageEarthToMars();
    let ageJupiter = newUser.ageEarthToJupiter();

    let remainingLifeMercury = newUser.remainingLifeToMercury();
    let remainingLifeVenus = newUser.remainingLifeToVenus();
    let remainingLifeMars = newUser.remainingLifeToMars();
    let remainingLifeJupiter = newUser.remainingLifeToJupiter();

    let remainingLife = newUser.getRemainingLife();

    if (remainingLife > 0) {
      $(".mercury .life").text('You have ' + remainingLifeMercury + ' years of life left');
      $(".venus .life").text('You have ' + remainingLifeVenus + ' years of life left');
      $(".mars .life").text('You have ' + remainingLifeMars + ' years of life left');
      $(".jupiter .life").text('You have ' + remainingLifeJupiter + ' years of life left');
    } else {
      $(".mercury .life").text('Wow! You have lived '+ Math.abs(remainingLifeMercury) + ' years past your life expectancy');
      $(".venus .life").text('Wow! You have lived '+ Math.abs(remainingLifeVenus) + ' years past your life expectancy');
      $(".mars .life").text('Wow! You have lived '+ Math.abs(remainingLifeMars) + ' years past your life expectancy');
      $(".jupiter .life").text('Wow! You have lived '+ Math.abs(remainingLifeJupiter) + ' years past your life expectancy');
    }

    $(".mercury .age").text(ageMercury);
    $(".venus .age").text(ageVenus);
    $(".mars .age").text(ageMars);
    $(".jupiter .age").text(ageJupiter);

    $(".entry-form").hide();
    $(".solar-system").show();
  });
});
