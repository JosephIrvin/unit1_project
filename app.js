// Variable to hold the players score.
let playerScore = 0;

// console.log($('#q1').data('value'))

// Question 1
// Onclick event for the right answers button in the questions modal
$('.right1').on('click', () => {
    // Adds the data-value attribute from the questions HTML to the playerScore variable if the right answer is picked
    playerScore += $('#q1').data('value');
    console.log(playerScore);
    // Updates the new score visually in the HTML
    $('#scoreValue').html(playerScore);
    // Clears the money value visually from the answered question on the board
    $('#q1').empty();
    // Changes the background of the answered question to green if you got it correct
    $('#q1').css('background-color', 'limegreen');
    // Disables the ability to click on a question you've already answered
    $('#q1').css('pointer-events', 'none');
})

$('.wrong1').on('click', () => {
    // Subtracts the data-value attribute from the questions HTML to the playerScore variable if the wrong answer is picked
    playerScore -= $('#q1').data('value');
    console.log(playerScore);
    // Updates the new score visually in the HTML
    $('#scoreValue').html(playerScore);
    // Clears the money value visually from the answered question on the board
    $('#q1').empty();
    // Changes the background of the answered question to red if you got it incorrect
    $('#q1').css('background-color', 'red');
    // Disables the ability to click on a question you've already answered
    $('#q1').css('pointer-events', 'none');
})

// Question 2
$('.right2').on('click', () => {
    playerScore += $('#q2').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore);
    $('#q2').empty();
    $('#q2').css('background-color', 'limegreen');
    $('#q2').css('pointer-events', 'none');
})

$('.wrong2').on('click', () => {
    playerScore -= $('#q2').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore);
    $('#q2').empty();
    $('#q2').css('background-color', 'red');
    $('#q2').css('pointer-events', 'none');
})

// Question 3
$('.right3').on('click', () => {
    playerScore += $('#q3').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q3').empty();
    $('#q3').css('background-color', 'lightgreen')
    $('#q3').css('pointer-events', 'none');
})

$('.wrong3').on('click', () => {
    playerScore -= $('#q3').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q3').empty();
    $('#q3').css('background-color', 'red')
    $('#q3').css('pointer-events', 'none');
})

// Question 4
$('.right4').on('click', () => {
    playerScore += $('#q4').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q4').empty();
    $('#q4').css('background-color', 'lightgreen')
    $('#q4').css('pointer-events', 'none');
})

$('.wrong4').on('click', () => {
    playerScore -= $('#q4').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q4').empty();
    $('#q4').css('background-color', 'red')
    $('#q4').css('pointer-events', 'none');
})

// Question 5
$('.right5').on('click', () => {
    playerScore += $('#q5').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q5').empty();
    $('#q5').css('background-color', 'lightgreen')
    $('#q5').css('pointer-events', 'none');
})

$('.wrong5').on('click', () => {
    playerScore -= $('#q5').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q5').empty();
    $('#q5').css('background-color', 'red')
    $('#q5').css('pointer-events', 'none');
})

// Question 6
$('.right6').on('click', () => {
    playerScore += $('#q6').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q6').empty();
    $('#q6').css('background-color', 'lightgreen')
    $('#q6').css('pointer-events', 'none');
})

$('.wrong6').on('click', () => {
    playerScore -= $('#q6').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q6').empty();
    $('#q6').css('background-color', 'red')
    $('#q6').css('pointer-events', 'none');
})

// Question 7
$('.right7').on('click', () => {
    playerScore += $('#q7').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q7').empty();
    $('#q7').css('background-color', 'lightgreen')
    $('#q7').css('pointer-events', 'none');
})

$('.wrong7').on('click', () => {
    playerScore -= $('#q7').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q7').empty();
    $('#q7').css('background-color', 'red')
    $('#q7').css('pointer-events', 'none');
})

// Question 8
$('.right8').on('click', () => {
    playerScore += $('#q8').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q8').empty();
    $('#q8').css('background-color', 'lightgreen')
    $('#q8').css('pointer-events', 'none');
})

$('.wrong8').on('click', () => {
    playerScore -= $('#q8').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q8').empty();
    $('#q8').css('background-color', 'red')
    $('#q8').css('pointer-events', 'none');
})

// Question 9
$('.right9').on('click', () => {
    playerScore += $('#q9').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q9').empty();
    $('#q9').css('background-color', 'lightgreen')
    $('#q9').css('pointer-events', 'none');
})

$('.wrong9').on('click', () => {
    playerScore -= $('#q9').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q9').empty();
    $('#q9').css('background-color', 'red')
    $('#q9').css('pointer-events', 'none');
})

// Question 10
$('.right10').on('click', () => {
    playerScore += $('#q10').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q10').empty();
    $('#q10').css('background-color', 'lightgreen')
    $('#q10').css('pointer-events', 'none');
})

$('.wrong10').on('click', () => {
    playerScore -= $('#q10').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q10').empty();
    $('#q10').css('background-color', 'red')
    $('#q10').css('pointer-events', 'none');
})

// Question 11
$('.right11').on('click', () => {
    playerScore += $('#q11').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q11').empty();
    $('#q11').css('background-color', 'lightgreen')
    $('#q11').css('pointer-events', 'none');
})

$('.wrong11').on('click', () => {
    playerScore -= $('#q11').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q11').empty();
    $('#q11').css('background-color', 'red')
    $('#q11').css('pointer-events', 'none');
})

// Question 12
$('.right12').on('click', () => {
    playerScore += $('#q12').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q12').empty();
    $('#q12').css('background-color', 'lightgreen')
    $('#q12').css('pointer-events', 'none');
})

$('.wrong12').on('click', () => {
    playerScore -= $('#q12').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q12').empty();
    $('#q12').css('background-color', 'red')
    $('#q12').css('pointer-events', 'none');
})

// Question 13
$('.right13').on('click', () => {
    playerScore += $('#q13').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q13').empty();
    $('#q13').css('background-color', 'lightgreen')
    $('#q13').css('pointer-events', 'none');
})

$('.wrong13').on('click', () => {
    playerScore -= $('#q13').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q13').empty();
    $('#q13').css('background-color', 'red')
    $('#q13').css('pointer-events', 'none');
})

// Question 14
$('.right14').on('click', () => {
    playerScore += $('#q14').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q14').empty();
    $('#q14').css('background-color', 'lightgreen')
    $('#q14').css('pointer-events', 'none');
})

$('.wrong14').on('click', () => {
    playerScore -= $('#q14').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q14').empty();
    $('#q14').css('background-color', 'red')
    $('#q14').css('pointer-events', 'none');
})

// Question 15
$('.right15').on('click', () => {
    playerScore += $('#q15').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q15').empty();
    $('#q15').css('background-color', 'lightgreen')
    $('#q15').css('pointer-events', 'none');
})

$('.wrong15').on('click', () => {
    playerScore -= $('#q15').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q15').empty();
    $('#q15').css('background-color', 'red')
    $('#q15').css('pointer-events', 'none');
})

// Question 16
$('.right16').on('click', () => {
    playerScore += $('#q16').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q16').empty();
    $('#q16').css('background-color', 'lightgreen')
    $('#q16').css('pointer-events', 'none');
})

$('.wrong16').on('click', () => {
    playerScore -= $('#q16').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q16').empty();
    $('#q16').css('background-color', 'red')
    $('#q16').css('pointer-events', 'none');
})

// Question 17
$('.right17').on('click', () => {
    playerScore += $('#q17').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q17').empty();
    $('#q17').css('background-color', 'lightgreen')
    $('#q17').css('pointer-events', 'none');
})

$('.wrong17').on('click', () => {
    playerScore -= $('#q17').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q17').empty();
    $('#q17').css('background-color', 'red')
    $('#q17').css('pointer-events', 'none');
})

// Question 18
$('.right18').on('click', () => {
    playerScore += $('#q18').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q18').empty();
    $('#q18').css('background-color', 'lightgreen')
    $('#q18').css('pointer-events', 'none');
})

$('.wrong18').on('click', () => {
    playerScore -= $('#q18').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q18').empty();
    $('#q18').css('background-color', 'red')
    $('#q18').css('pointer-events', 'none');
})

// Question 19
$('.right19').on('click', () => {
    playerScore += $('#q19').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q19').empty();
    $('#q19').css('background-color', 'lightgreen')
    $('#q19').css('pointer-events', 'none');
})

$('.wrong19').on('click', () => {
    playerScore -= $('#q19').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q19').empty();
    $('#q19').css('background-color', 'red')
    $('#q19').css('pointer-events', 'none');
})

// Question 20
$('.right20').on('click', () => {
    playerScore += $('#q20').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q20').empty();
    $('#q20').css('background-color', 'lightgreen')
    $('#q20').css('pointer-events', 'none');
})

$('.wrong20').on('click', () => {
    playerScore -= $('#q20').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q20').empty();
    $('#q20').css('background-color', 'red')
    $('#q20').css('pointer-events', 'none');
})

// Question 21
$('.right21').on('click', () => {
    playerScore += $('#q21').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q21').empty();
    $('#q21').css('background-color', 'lightgreen')
    $('#q21').css('pointer-events', 'none');
})

$('.wrong21').on('click', () => {
    playerScore -= $('#q21').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q21').empty();
    $('#q21').css('background-color', 'red')
    $('#q21').css('pointer-events', 'none');
})

// Question 22
$('.right22').on('click', () => {
    playerScore += $('#q22').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q22').empty();
    $('#q22').css('background-color', 'lightgreen')
    $('#q22').css('pointer-events', 'none');
})

$('.wrong22').on('click', () => {
    playerScore -= $('#q22').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q22').empty();
    $('#q22').css('background-color', 'red')
    $('#q22').css('pointer-events', 'none');
})

// Question 23
$('.right23').on('click', () => {
    playerScore += $('#q23').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q23').empty();
    $('#q23').css('background-color', 'lightgreen')
    $('#q23').css('pointer-events', 'none');
})

$('.wrong23').on('click', () => {
    playerScore -= $('#q23').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q23').empty();
    $('#q23').css('background-color', 'red')
    $('#q23').css('pointer-events', 'none');
})

// Question 24
$('.right24').on('click', () => {
    playerScore += $('#q24').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q24').empty();
    $('#q24').css('background-color', 'lightgreen')
    $('#q24').css('pointer-events', 'none');
})

$('.wrong24').on('click', () => {
    playerScore -= $('#q24').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q24').empty();
    $('#q24').css('background-color', 'red')
    $('#q24').css('pointer-events', 'none');
})

// Question 25
$('.right25').on('click', () => {
    playerScore += $('#q25').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q25').empty();
    $('#q25').css('background-color', 'lightgreen')
    $('#q25').css('pointer-events', 'none');
})

$('.wrong25').on('click', () => {
    playerScore -= $('#q25').data('value');
    console.log(playerScore);
    $('#scoreValue').html(playerScore)
    $('#q25').empty();
    $('#q25').css('background-color', 'red')
    $('#q25').css('pointer-events', 'none');
})


// Alerts for the end game function are code from SweetAlert   https://sweetalert.js.org/



// Function for the end game button
$('#endgame').on('click', () => {
    // Checks to see if EVERY question is answered and then if the score is higher than zero
   if($('#q1').is(':empty') && $('#q2').is(':empty') && $('#q3').is(':empty') && $('#q4').is(':empty')
&& $('#q5').is(':empty') && $('#q6').is(':empty') && $('#q7').is(':empty') && $('#q8').is(':empty')
&& $('#q9').is(':empty') && $('#q10').is(':empty') && $('#q11').is(':empty') && $('#q12').is(':empty')
&& $('#q13').is(':empty') && $('#q14').is(':empty') && $('#q15').is(':empty') && $('#q16').is(':empty')
&& $('#q17').is(':empty') && $('#q18').is(':empty') && $('#q19').is(':empty') && $('#q20').is(':empty')
&& $('#q21').is(':empty') && $('#q22').is(':empty') && $('#q23').is(':empty') && $('#q24').is(':empty')
&& $('#q25').is(':empty') && playerScore > 0){
    swal({
        title: "You Won",
        text: "Thank you for playing",
        icon: "success",
        button: "Close",
      });
}
    // Checks to see if EVERY question is answered and then if the score is lower than or equal to zero
else if($('#q1').is(':empty') && $('#q2').is(':empty') && $('#q3').is(':empty') && $('#q4').is(':empty')
&& $('#q5').is(':empty') && $('#q6').is(':empty') && $('#q7').is(':empty') && $('#q8').is(':empty')
&& $('#q9').is(':empty') && $('#q10').is(':empty') && $('#q11').is(':empty') && $('#q12').is(':empty')
&& $('#q13').is(':empty') && $('#q14').is(':empty') && $('#q15').is(':empty') && $('#q16').is(':empty')
&& $('#q17').is(':empty') && $('#q18').is(':empty') && $('#q19').is(':empty') && $('#q20').is(':empty')
&& $('#q21').is(':empty') && $('#q22').is(':empty') && $('#q23').is(':empty') && $('#q24').is(':empty')
&& $('#q25').is(':empty') && playerScore <= 0){
    swal({
        title: "You Lost",
        text: "Try again?",
        icon: "error",
        button: "Close",
      });
} 
})

