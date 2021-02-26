/**
 * Survey Controller
 */

import $ from 'jquery';
import firebase from "firebase/app";
import "firebase/database";

// Submit button on click
$('.survey__submit').click(function(e) {
  e.preventDefault();

  checkAllButtonsClicked()
})

// Validation to see if buttons are all checked
const checkAllButtonsClicked = () => {
  let checkState = true

  $('input:radio').each(function() { 
    let name = $(this).attr('name');

    if($("input:radio[name=" + name + "]:checked").length == 0) {
      checkState = false;
    }
  });

  // Get all checked radio buttons
  let allRadioButtonsChecked = {}

  $('input:radio:checked').each(function() {
    allRadioButtonsChecked[$(this).attr('name')] = $(this).attr('id')
  })

  if(checkState) {
    alert('all buttons checked')

    writeDataIntoFirebase(allRadioButtonsChecked)
  }
  else
    alert('missing buttons')
}

// Firebase - write data into realtime database
const writeDataIntoFirebase = (data) => {
  firebase.database().ref('answeredQuestions/').set(data)
}