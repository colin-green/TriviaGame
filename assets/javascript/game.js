var intervalID;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var score;

var answers = {
    Q1: "C",
    Q2: "D",
    Q3: "B",
    Q4: "D",
    Q5: "A",
    Q6: "A",
    Q7: "D",
    Q8: "B",
    Q9: "C",
    Q10: "C"
}

var timerSeconds = 240;

$("#timer").text(timeConverter(timerSeconds));

intervalID = setInterval(timerFunction, 1000);

function timerFunction() {
    if (timerSeconds > 0) {
        timerSeconds--;
        $("#timer").text(timeConverter(timerSeconds));
    }
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t % 60;
    var minutesGrammar;
    var secondsGrammar;

    if (minutes == 1) {
        minutesGrammar = "minute";
    } else if (minutes == 0) {
        minutes = "";
        minutesGrammar = "";
    } else {
        minutesGrammar = "minutes";
    }

    if (seconds == 1) {
        secondsGrammar = "second";
    } else if (seconds == 0) {
        seconds = "";
        secondsGrammar = "";
    } else {
        secondsGrammar = "seconds";
    }

    if (t == 0) {
        $("#quiz").hide();
        $("#submit").hide();
        checkAnswer1();
        return "Time's up!!!"
    } else {
        return `Time Remaining: ${minutes} ${minutesGrammar} ${seconds} ${secondsGrammar}`;
    }
}

// couldn't figure out how to make this part less redundant :\

$("#submit").click(checkAnswer1);
$("#submit").click(checkAnswer2);
$("#submit").click(checkAnswer3);
$("#submit").click(checkAnswer4);
$("#submit").click(checkAnswer5);
$("#submit").click(checkAnswer6);
$("#submit").click(checkAnswer7);
$("#submit").click(checkAnswer8);
$("#submit").click(checkAnswer9);
$("#submit").click(checkAnswer10);
$("#submit").click(checkBonus);
$("#submit").click(function() {
    timerSeconds = 0;
    $("#timer").html("Time's Up!!!");
    $("#quiz").hide();
    $("#submit").hide();
});

function checkAnswer1() {
    var radios = document.getElementsByName('Q1');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q1) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer2() {
    var radios = document.getElementsByName('Q2');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q2) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer3() {
    var radios = document.getElementsByName('Q3');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q3) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer4() {
    var radios = document.getElementsByName('Q4');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q4) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer5() {
    var radios = document.getElementsByName('Q5');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q5) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer6() {
    var radios = document.getElementsByName('Q6');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q6) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer7() {
    var radios = document.getElementsByName('Q7');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q7) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer8() {
    var radios = document.getElementsByName('Q8');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q8) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer9() {
    var radios = document.getElementsByName('Q9');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q9) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkAnswer10() {
    var radios = document.getElementsByName('Q10');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == undefined) {
        unanswered++;
    } else if (chosen == answers.Q10) {
        correct++;
    } else {
        incorrect++;
    }

}

function checkBonus() {
    var radios = document.getElementsByName('bonus');
    var chosen;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            chosen = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (chosen == answers.Q10) {
        correct++;
    }

    score = correct * 10;

        $("#results").html(`Correct Answers: ${correct}<br>
        Incorrect Answers: ${incorrect}<br>
        Unanswered Questions: ${unanswered}<br>
        Final Score: ${score}%`);

}