
//Build a function with the Questions/Responses

(function() {
  var questions = [{
    question: "What is the capital of Italy?",
    choices: [Milan, Rome, Venice, Florence],
    correctAnswer: 2
  }, {
    question: "What is the population? (in millions)",
    choices: [76, 18, 59, 32],
    correctAnswer: 3
  }, {
    question: "What is the country's number 1 export?",
    choices: [Oil, Clothing, Wine, Machines],
    correctAnswer: 4
  }, {
    question: "Who is Italy's current President?",
    choices: [Mattarella, Napolitano, Scalfaro, Ciampi],
    correctAnswer: 1
  }, {
    question: "In which year did Italy become a member of the EU?",
    choices: [1983, 1958, 2002, 1870],
    correctAnswer: 2

  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) 

  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var questionElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    questionElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    questionElement.append(question);
    
    return questionElement;
  }

  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();


