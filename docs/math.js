var num1 = parseInt(Math.floor(Math.random() * 20));
var num2 = parseInt(Math.floor(Math.random() * 20));
document.getElementById("num1").innerHTML = parseInt(num1);
document.getElementById("num2").innerHTML = parseInt(num2);
var result = num1 + num2;

let guess = document.getElementById('txtArea').value;
guess = Number(guess);

var start = Date.now();
setInterval(function() {
    var delta = Date.now() - start;
    output(Math.floor(delta / 1000));
    output(new Date().toUTCString());
}, 1000);


const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.querySelector("#countdown");

setInterval(updatecountdown, 1000);

function updatecountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    let EndGame = 60000;

    setTimeout(function() {

        setTimeout(function() {
            // window.location.reload();


            window.location.reload();
        }, )
        let msg = alert(`You Winn!`);
        let msg2 = msg.repeat(0);
        document.write(msg2);
    }, EndGame);
    // setTimeout(function() {
    //     // setTimeout(function() {
    //     //     window.location.reload();
    //     // }, 100);

    //     // alert(`You Winn! Your score is ${score2}`);

    //     window.location.reload();

    // }, 5000);

}





document.getElementById("demo4").innerHTML = score2;


function Check() {
    let guess = document.getElementById("txtArea").value;
    guess = Number(guess);
    if (guess == result) {

        document.getElementById("txtArea").style.border = "thick solid lightgreen";
        guess = document.getElementById('txtArea').value;
        guess = Number(guess);


        num1 = parseInt(Math.floor(Math.random() * 20));
        num2 = parseInt(Math.floor(Math.random() * 20));
        result = num1 + num2;
        document.getElementById("num1").innerHTML = parseInt(num1);
        document.getElementById("num2").innerHTML = parseInt(num2);
        document.getElementById("txtArea").value = null;


        setTimeout(function() {
            document.getElementById("txtArea").style.border = null;

        }, 250);



        var button = $('.increment-btn');
        counter = $('.counter');
        counter.val(parseInt(counter.val()) + 1);
        counter++;


    } else if (guess != result) {
        document.getElementById("txtArea").style.border = "thick solid red";

        guess = document.getElementById('txtArea').value;
        guess = Number(guess);


        num1 = parseInt(Math.floor(Math.random() * 20));
        num2 = parseInt(Math.floor(Math.random() * 20));
        result = num1 + num2;
        document.getElementById("num1").innerHTML = parseInt(num1);
        document.getElementById("num2").innerHTML = parseInt(num2);
        document.getElementById("txtArea").value = null;

        var button = $('.increment-btn');
        counter = $('.counter');
        counter.val(parseInt(counter.val()) - 2);
        counter--;

        // alert(`Wrong answer! The correct answer was ${result}`);

        setTimeout(function() {
            document.getElementById("txtArea").style.border = null;

        }, 250);
    }

}