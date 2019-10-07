'use strict';

function getDogImages() {
    console.log(`'getDogImages' ran`);
    let imageNumber = $('input').val();
    console.log(imageNumber);
    var originalURL = "https://dog.ceo/api/breeds/image/random/";
    var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL
    $('.results').empty();
    for(var i=0; i<imageNumber; i++) {
    fetch(queryURL)
    .then(response => response.json())
    
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log('Something went wrong. Try again later.'))
    }
}

function displayResults(responseJson) { 
    console.log(responseJson.message);   
    $('.results').append(`<img src="${responseJson.message}" class="results-img">`); 
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
        $('.results').removeClass('hidden');
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });