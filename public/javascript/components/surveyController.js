/**
 * Survey Controller
 */

import $ from 'jquery';
import firebase from "firebase/app";
import "firebase/database";

// Submit button on click
$('.survey__submit').click(function(e) {
  e.preventDefault()
  
  if (checkAllButtonsClicked()) {
    writeDataIntoFirebase(getAllRadioButtonsChecked())
  }
})

// Validation to see if buttons are all checked
const checkAllButtonsClicked = () => {
  let checkState = true

  $('.survey__question').each(function() {
    if (!$(this).find('input:radio').is(':checked')) {
      checkState = false
    }
  })

  if(checkState) 
    alert('all buttons checked')
  else 
    alert('missing buttons')

  return checkState
}

  // Get all checked radio buttons
const getAllRadioButtonsChecked = () => {
  let allRadioButtonsChecked = {}

  $('input:radio:checked').each(function() {
    allRadioButtonsChecked[$(this).attr('name')] = $(this).attr('id')
  })

  return allRadioButtonsChecked
}

// Firebase - write data into realtime database
const writeDataIntoFirebase = (data) => {
  firebase.database().ref('answeredQuestions/').set(data)
}