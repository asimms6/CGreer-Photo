window.onload = function() {
    document.getElementById("typeofshoot").addEventListener("blur", addTextBox) //adds event listener for dropdown box
    document.getElementById("emailConf").addEventListener("blur",checkEmail) //adds event listener for email boxes
}

function addTextBox(){
    if(document.getElementById("typeofshoot").value === "other") { //if the value in the dropdown box is set to other
        document.getElementById("explainBox").innerHTML = '<label for="explainmore">Explain:</label><br><input type="text" id="explainmore"/>' //Then create a new input box
    }
    else{ //if not
        document.getElementById("explainBox").innerHTML = '' //then don't do anything/remove it
    }
}

function checkEmail(){
    if(document.getElementById("email").value === document.getElementById("emailConf").value){ //if the email boxes match eachother
        document.getElementById("submit").disabled = false; //then enable the input box
    }
    else{
        document.getElementById("submit").disabled = true; //if not then keep it disabled
    }
}

function successDone(){
    var request = new XMLHttpRequest();

    request.open("GET", "success.txt");

    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById("success").innerHTML = this.responseText;
        }
    };
    request.send();

}