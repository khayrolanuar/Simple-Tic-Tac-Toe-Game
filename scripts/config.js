function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // + '1' => 1
    //or can use like this 
    //const selectedPlayerId = event.target.dataset.playerid;
    //editedPlayer = selectedPlayerId;

    playerConfigOverlayElement.style.display = 'block'; //to show again the overlay #modal
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error'); //removed class error after we click cancel that we declare on the line code below
    errorOutputElement.textContent = ''; //to removed the error message that we declare on the line code below
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) { //add event to prevent the submit form to send HTTP request to backend. bcs we bind it with addEventListener
    event.preventDefault(); //console.log(event); to see it what inside event in console
    //extract value from the form
    //FormData is a build-in blueprint object
    //const formData = {}; //{} curly braces is for create an object...or
    const formData = new FormData(event.target); // is called instantiating an object based on an object blueprint
    //event.target as a value to FormData, this event object, which describes the event that occurred has a target property that points at the HTML element
    //form here bcs it's the form that was submitted in the app.js called => formElement.addEventListener('submit', savePlayerConfig);
    //automatically look for the inputs there in index.html in form element, not just any inputs, instead inputs that have a name field.

    const enteredPlayername = formData.get('playername').trim(); 
    //values provided for the name attributes
    //.trime() method is built-in in js. which is available on all strings in js. trim excess white spaces. example for trim '   Kai   ' => 'Kai' .just for white space in front or after the content
    //console.log(enteredPlayername); to see on the console
    
    //empty string is considered a falsy value is js. Its yield false if you was in a place where a Boolean is expected
    if (!enteredPlayername) { //or enteredPlayername ===''
        event.target.firstElementChild.classList.add('error'); //that value class at configuration.css
        //if enteredPlayername is false, show error message
        errorOutputElement.textContent = 'Please enter a valid name!';
        return; //return in functions if we wanna pass a value to the place where the function was executed
        //when execute return, you stop the execution of the function
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    /*if (editedPlayer ===1){
        players[0].name = enteredPlayername;
    }
    else {
        players[1].name = enteredPlayername;
    }*/

    closePlayerConfig(); //to close after press confirm button
}