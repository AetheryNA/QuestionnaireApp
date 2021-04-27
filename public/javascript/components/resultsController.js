/**
 * Results Controller
 * Retrieves data from Firebase as a promise
 */

import $ from 'jquery';
import firebase from "firebase/app";
import "firebase/database";

const chart = require('chart.js');

const getDataFromFirebase = () => {
  let dataPath = firebase.database().ref('surveyor/')

  let allData = dataPath.get().then((snapshot) => {
    // Returns a promise with all the data required from Firebase

    let yesAnswers = 0
    let noAnswers = 0
    let questions
    const appendData = $('.answers__questions-row')
    const appendAnswers = $('.answers__table-row-answers')

    let surveyors = Object.keys(snapshot.val())

    snapshot.forEach((childSnapshot) => {
      // Find all the questions based on their key
      questions = Object.keys(childSnapshot.val())

      childSnapshot.forEach((subChildSnapshot) => {
        // Increments the variable by 1 everytime it has been found in the object

        const answers = subChildSnapshot.val()

        if (answers == "yes") {
          yesAnswers += 1
        }
        if (answers == "no") {
          noAnswers += 1
        }
      })
    })

    // Appending infomation into the DOM
    questions.forEach((i) => {
      $(appendData).append("<th>" + i + "</th>")
    })

    surveyors.forEach((i) => {
      console.log(i)

      $('.answers__questions-table').append("<tr class='answers__table-row answers__table-surveyors'><th>" + i + "</th></tr>")
    })

    $(appendAnswers).append("<td>"+ yesAnswers + "</td>")
    $(appendAnswers).append("<td>"+ noAnswers + "</td>")
  });
}

getDataFromFirebase()

// const getDataFromFirebase = () => {
//   firebase.database().ref('surveyor/').get().then(function(snapshot) {
//     let surveyorNames = {}

//     if (snapshot.exists()) {
//       surveyorNames = snapshot.val()
//     }

//     surveyorNames.forEach(function() {
//       console.log(surveyorNames)
//     })
//   })
// }

// const getAllAnswers = () => {

//   getDataFromFirebase().then(function(data) {
//     console.log(data)
//   })

  // $(surveyorNames).each(function() {
  //   $(this).each(function() {
  //     console.log('hello')
  //   })
  // })
// }

// getDataFromFirebase()

// const chartSelected = $('#resultsJS');

// const resultsCharted = new Chart(chartSelected, {
//   type: 'bar',
//   data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//       scales: {
//           yAxes: [{
//               ticks: {
//                   beginAtZero: true
//               }
//           }]
//       }
//   }
// })
