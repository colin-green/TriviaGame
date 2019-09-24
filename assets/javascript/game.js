var intervalID;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var answers = {
    Q1: "A",
    Q2: "D",
    Q3: "B",
    Q4: "B",
    Q5: "A",
    Q6: "A",
    Q7: "D",
    Q8: "B",
    Q9: "C",
    Q10: "A"
}

var timerSeconds = 180;

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

$("#submit").click(checkAnswer1);
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

    // $("#results").html(`Correct Answers: ${correct}<br>
    //     Incorrect Answers: ${incorrect}<br>
    //     Unanswered Questions: ${unanswered}`);
}