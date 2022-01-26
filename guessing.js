const valueHistory = [];
let guess = Math.floor(Math.random() * 100 + 1);
let counter = 0;
let highest = 10;

document.querySelector("#reset").onclick = function() {
    guess = Math.floor(Math.random() * 100 + 1);
    counter = 0;
    valueHistory.splice(0, valueHistory.length);
    document.querySelector("#olist").innerHTML = "";
    document.getElementById("submitHistory").style.height = "50px";
    document.querySelector("#textToOutput").innerHTML = "Reset initiated! Lives back to 10 in new retry";
    document.querySelector("#firstStart").style.display = "none";
    document.querySelector("#firstStart").innerHTML ="";
}



document.querySelector("#Submit_guess").onclick = function () {
    let number = document.querySelector("#numberInput").value;
    let stem = number.toString();
    if (stem == "") {
        document.querySelector("#textToOutput").innerHTML = "Please select a valid input"
        return;
    }
    if (counter == 9) {
        document.querySelector("#firstStart").style.display = "block";
        document.querySelector("#firstStart").innerHTML += "<div id=\"winningScreen\"><p>Sorry. You have lost. Press reset to play again.</p></div>";
        return;
    }
    if (number < 1 || number > 100) {
        document.querySelector("#textToOutput").innerHTML = "Choose a valid number within the given range";
        return;
    }
    for (let i = 0; i < valueHistory.length; i++) {
        if (valueHistory[i] == number) {
            document.querySelector("#textToOutput").innerHTML = "That number was already chosen";
            return;
        }
    }
    valueHistory.push(number);
    counter++;
    if (number < guess) {
        document.querySelector("#textToOutput").innerHTML = "The number is too low. Try something greater. Lives remaining: " + (10 - counter);
    } else if (number > guess) {
        document.querySelector("#textToOutput").innerHTML = "The number is too high. Try something lower. Lives remaining: " + (10 - counter);
    } else if (number == guess) {
        if (counter < highest) {
            highest = counter;
        }
        document.querySelector("#firstStart").style.display = "block";
        document.querySelector("#firstStart").innerHTML += "<div id=\"winningScreen\"><p>Score: " + counter + "</p><p>Best: " + highest + "</p><p> Click on reset down below to play again!</div>";
        document.querySelector("#textToOutput").innerHTML = "Congratulations! You managed to guess the number right in " + counter + " guesses!";
    } 
    if (counter >= 3) {
        document.querySelector("#olist").innerHTML += "<li>" + valueHistory[counter - 1] + "</li>";
        let temp = document.getElementById("submitHistory").clientHeight - 170;
        temp += 40;
        document.getElementById("submitHistory").style.height = (temp.toString() + "px");
    }
    else {
    document.querySelector("#olist").innerHTML += "<li>" + valueHistory[counter - 1] + "</li>";
    }
}

