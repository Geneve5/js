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


      const quizArray = [
        {
          q1: 'Which is the third planet from the sun?',
          o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
          a: 1, // array index 1 - so Earth is the correct answer here
         
        },
       
     
        {
          q2: 'Which is the largest ocean on Earth?',
          o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
          a: 3,
        },
        {
          q3: 'What is the capital of Australia',
          o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
          a: 1,
        },
    
        {
          q4: 'Which planet in the Milky Way is the hottest?',
          o: ['Saturn', 'Earth', 'Venus', 'Mars'],
          a: 2,
        }, 
    
    
        {
          q5: 'Who has won the most total Academy Awards?',
          o: ['Walt Disney', 'Lady Gaga', 'Warner Bros', '20th Century Fox'],
          a: 0,
        }, 
      ];

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
    
        
    // todo Calculate score

    // const calculateScore = () => {
    //   let score = 0;
    //   quizArray.map((quizItem, index) => {
    //     for (let i = 0; i < 4; i++) {
  
  
  
       // todo: Validation
      // for(i = 1; i <= total;i++){
      //     if(eval('q'+i) === null || eval('q'+i) === ''){
      //         alert('You missed question '+ i);
      //         return false;
      //     }
      // }
  
      var formElement = document.forms[quizArray];

      formElement.onsubmit = function submitAnswers(){
        var total = 5;
        var score = 0;
        
        // Get User Input
        var q1 = document.querySelector[quizArray][q1].value,
            q2 = document.querySelector[quizArray][q2].value,
            q3 = document.querySelector[quizArray][q3].value,
            q4 = document.querySelector[quizArray][q4].value,
            q5 = document.querySelector[quizArray][q5].value;
        
        // Validation
        for(i = 1; i <= total;i++){
          if(eval('q'+i) === null || eval('q'+i) === ''){
            alert('You missed question '+ i);
            return false;
          }
        }
        
        // Set Correct Answers
        var answers = [1 ,3, 1, 2, 0];
        
        // Check Answers
        for(i = 1; i <= total;i++){
          if(eval('q'+i) === answers[i - 1]){
            score++;
          }
        }
        
        // Display Results
        var results = document.getElementById('results');
        results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
        
        return false;
      }

    }

    //todo default section: 

)