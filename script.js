var stdTime = true;

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(stdTime == true){
        if(hrs >= 12){
            session.innerHTML = 'PM';
        }
        else{
            session.innerHTML = 'AM';
        }

        if(hrs > 12){
            hrs = hrs - 12;
        }
    }
    else{
        stdTime = false;
        hrs = hrs;
        session.innerHTML = '';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}

function milButton(){
    stdTime = false;
}

function stdButton(){
    stdTime = true;
}

setInterval(displayTime, 10);