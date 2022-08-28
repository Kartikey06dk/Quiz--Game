var questions = [`1 + 4 = ?`, `3 + 3 = ?`, `1 + 7 = ?`, `1 + 8 = ?`]
var count = 0

function myfunc() {
    var person = prompt("Please Enter your Name", "")
    if (person != null && person != " ") {
        document.getElementById("demo").innerHTML = "Hello " + person + "! We will start the quiz as soon as you hit on start."
        document.getElementById("star").style.display = "block"
    }
}

function afunc() {
    document.getElementById("ques").innerHTML = questions[0]
    count = 0
    document.getElementById("demo").innerHTML = ""
    document.getElementById("skr").innerHTML = ""
    document.getElementById("hela").style.display = "none"
}

function bfunc(i) {
    var c = i + 1
    document.getElementById("ques").innerHTML = questions[c]
    ans()
}

function Next() {
    document.getElementById("result").innerHTML = "" 
    var i ;
    var c = questions.length
    for(i=0; i<c; i++){
        if(document.getElementById("ques").innerHTML === questions[i]){
           bfunc(i)
           break;
        }
    }
}

function score(){
    document.getElementById("skr").innerHTML = "Your Score is: " + count + " out of 4"
    document.getElementById("skr").style.color = "purple"
}

function ans() {
    if (document.getElementById("ques").innerHTML === "1 + 4 = ?") {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        document.body.appendChild(opt1)
        opt1.onclick = function opta() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML = "8"
        document.body.appendChild(opt2)
        opt2.onclick = function optb() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }

        var opt3 = document.createElement("button")
        opt3.innerHTML = "5"
        document.body.appendChild(opt3)
        opt3.onclick = function optc() {
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Congrats! Your Answer is Correct!"
            count++
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt4 = document.createElement("button")
        opt4.innerHTML = "9"
        document.body.appendChild(opt4)
        opt4.onclick = function optd() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
    }

    else if (document.getElementById("ques").innerHTML === "3 + 3 = ?") {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        opt1.onclick = function opta() {
            document.getElementById("result").innerHTML = "Congrats! Your Answer is Correct!"
            document.getElementById("result").style.color = "green"
            count++
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt1)
        var opt2 = document.createElement("button")
        opt2.innerHTML = "8"
        opt2.onclick = function optb() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt2)

        var opt3 = document.createElement("button")
        opt3.innerHTML = "5"
        opt3.onclick = function optc() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt3)
        var opt4 = document.createElement("button")
        opt4.innerHTML = "9"
        opt4.onclick = function optd() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt4)
    }

    else if (document.getElementById("ques").innerHTML === "1 + 7 = ?") {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        opt1.onclick = function opta() {
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            document.getElementById("result").style.color = "red"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt1)
        var opt2 = document.createElement("button")
        opt2.innerHTML = "8"
        opt2.onclick = function optb() {
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Congrats! Your Answer is Correct!"
            setTimeout(Next, 1000)
            count++
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt2)

        var opt3 = document.createElement("button")
        opt3.innerHTML = "5"
        opt3.onclick = function optc() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            count++
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt3)
        var opt4 = document.createElement("button")
        opt4.innerHTML = "9"
        opt4.onclick = function optd() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt4)
    }

    else if (document.getElementById("ques").innerHTML === "1 + 8 = ?") {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6"
        opt1.onclick = function opta() {
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            document.getElementById("result").style.color = "red"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt1)
        var opt2 = document.createElement("button")
        opt2.innerHTML = "8"
        opt2.onclick = function optb() {
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            document.getElementById("result").style.color = "red"
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt2)

        var opt3 = document.createElement("button")
        opt3.innerHTML = "5"
        opt3.onclick = function optc() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your Answer is Wrong!"
            count++
            setTimeout(Next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt3)
        var opt4 = document.createElement("button")
        opt4.innerHTML = "9"
        opt4.onclick = function optd() {
            document.getElementById("result").innerHTML = "Congrats! Your Answer is Correct!"
            document.getElementById("result").style.color = "green"
            setTimeout(Next, 1000)
            count++
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        document.body.appendChild(opt4)
    }

    else {
        document.getElementById("ques").innerHTML = "Quiz Ends Here"
        score();
    }
}