/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO: 
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('#start');
    start.addEventListener('click', function (e) {
      document.querySelector('#quizBlock').style.display = 'block';
      start.style.display = 'none';
    });
  
    // todo: TIMER DONE
   
    
    
    function countdown() {
     
      var seconds = 59;
      
      function tick() {
        var counter = document.getElementById("time");
        seconds--;
        counter.innerHTML =
          "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
          setTimeout(tick, 1000);
        } else {
          document.getElementById("verifiBtn").innerHTML = `
              <div class="Btn" id="ResendBtn">
                  <button type="submit">Resend</button>
              </div>
          `;
          document.getElementById("time").innerHTML = "";
        }
      }
      tick();
    }
    countdown();
  
  
  
    // quizArray QUESTIONS & ANSWERS
    // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
    // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
    const quizArray = [
      {
        q: 'Which is the third planet from the sun?',
        o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
        a: 1, // array index 1 - so Earth is the correct answer here
       
      },
     
   
      {
        q: 'Which is the largest ocean on Earth?',
        o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        a: 3,
      },
      {
        q: 'What is the capital of Australia',
        o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
        a: 1,
      },
  
      {
        q: 'Which planet in the solar system is the hottest?',
        o: ['Saturn', 'Earth', 'Venus', 'Mars'],
        a: 2,
      }, 
  
  
      {
        q: 'Who has won the most total Academy Awards?',
        o: ['Walt Disney', 'Lady Gaga', 'Warner Bros', '20th Century Fox'],
        a: 0,
      }, 
    ];
  
  //fix GET SCORE:




  
  
  
    
    // function to Display the quiz questions and answers from the object
    // function to Display the quiz questions and answers from the object
    const displayQuiz = () => {
        const quizWrap = document.querySelector('#quizWrap');
        let quizDisplay = '';
        quizArray.map((quizItem, index) => {
          quizDisplay += `<ul class="list-group">
                         Q - ${quizItem.q}
                          <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                          <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                          <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                          <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                          </ul>
                          <div>&nbsp;</div>`;
          quizWrap.innerHTML = quizDisplay;
    
        });
      };
      //Event listener for the submit button
  const btn = document.getElementById('btnSubmit');
  btn.addEventListener('click', function(event) {
    const totalScore = calculateScore(this);
    console.log('Button Clicked');
    console.log('Total Score = ' + totalScore);
  });
  
    // todo: Calculate score
//   const calculateScore = () => {
//     let score = 0;

//     quizArray.map((quizItem, index) => {
//       for (let i = 0; i < 4; i++) {
//         //highlight the li if it is the correct answer
//         let li = `li_${index}_${i}`;
//         let r = `radio_${index}_${i}`;
//         liElement = document.querySelector('#' + li);
//         radioElement = document.querySelector('#' + r);
//         if (radioElement.checked) {
//           if (quizItem.a == i) {
//             score++;
//             liElement.style.backgroundColor = 'green';

//           } else {
//             liElement.style.backgroundColor = 'red';
//           }
//         } else if (quizItem.a == i) {
//           liElement.style.backgroundColor = 'white';
//         }

//         console.log('Score In Loop ', score);
//       }
//     });
//     return score;
//   };

//   // call the displayQuiz function
//   displayQuiz();
// });
  
  //todo ADD CALCULATE SCORE (Es score) 

//   const calculateScore = (e) => {
//     let score = 0;
//     let scoreHTML = document.querySelector("#score");

//     quizArray.map((quizItem, index) => {

//          for (let i = 0; i < 4; i++) {

//          //highlight the li if it is the correct answer
//          let li = `li_${index}_${i}`;
//          let r = `radio_${index}_${i}`;
//          liElement = document.querySelector('#' + li);
//          radioElement = document.querySelector('#' + r);
      


//          // CHNAGES :

//          if (radioElement.checked >= 0) {

//          e.preventDefault()
//          }




//           if (quizItem.a === i) {
//               //change background color of li element here
          
//             liElement.style.backgroundColor = 'green';
//             radioElement.value = 'true';
//             console.log(i)
          
// //repeat?

// if (radioElement.checked) {
    
//     console.log(quizItem.a);
//     score++;
//     scoreHTML.innerHTML = 'your current score is ${score} / 5/ ';
//     console.log('Your current score is ${score}.');

// }}}});}
// });

//todo get score:
  const calculateScore = (e) => {
    let score = 0;

    let scoreHTML = document.querySelector("#score");
    quizArray.map((quizItem, index) => {




      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);


        if (radioElement.checked >= 0)  {

        
            
          if (quizItem.a === i) {
            score++;
            liElement.style.backgroundColor = 'green';
            radioElement.value = 'true';
            console.log(i)


          } else {
            liElement.style.backgroundColor = 'red';
            
          }
        } else if (quizItem.a === i) {
          liElement.style.backgroundColor = 'white';
          console.log(i)
        }

        if (radioElement.checked)

        console.log(quizItem.a);
        score++;
        scoreHTML.innerHTML = 'You scored '+ score +' / 5. ';
        console.log('Your score ${score}.');

      }
    });
    
  };

  // call the displayQuiz function
  displayQuiz();
});